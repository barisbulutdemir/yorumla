"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import Tiptap from "./Tiptap";
import axios from "axios";
import { useAppSelector } from "@/redux/hooks";

const AddPost = () => {
  const token = useAppSelector((state) => state.auth.token);
  console.log('token:', token);
  
  const handleEditorChange = (editorContent: string) => {
    form.setValue("description", editorContent); // 'description' alanını güncelleyin
  };

  const formSchema = z.object({
    title: z.string().min(5, { message: "Title is too short" }),
    description: z.string().min(5).max(100, { message: "its too long" }).trim(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
    },
  });

// İstek interceptor'ı ekleyin
axios.interceptors.request.use(request => {
  console.log('Starting Request', request);
  console.log('Request Headers', request.headers);
  if (request.data) {
    console.log('Request Data', request.data);
  }
  return request;
});

// Yanıt interceptor'ı ekleyin
axios.interceptors.response.use(response => {
  console.log('Response:', response);
  return response;
}, error => {
  // Hata durumunda da loglama yapın
  console.log('Response Error:', error);
  return Promise.reject(error);
});


  const onSubmit = async (values: { title: string; description: string }) => {
  
    try {
      // Gönderilecek veriyi JSON formatına dönüştür.
      const jsonPostData = {
        title: values.title,
        description: values.description,
      };
  
      // Axios ile POST isteği yap.
      const response = await axios.post(
        "http://localhost:8000/post/posts/",
        jsonPostData,
        {
          headers: {
            "Content-Type": "application/json",
            ...(token ? { "Authorization": `Token ${token}` } : {}), // LogToken varsa header'a ekle
          },
          withCredentials: true,
        }
      );
      
      // Hata kontrolü için response.status kullanın.
      if (response.status !== 201) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Axios, doğrudan JSON objesi döndürür.
      console.log('Post created:', response.data);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };


  useEffect (() => {
    console.log(token);
  })
  

  return (
    <div className="p-24">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Main Title " {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <br />
                </FormLabel>
                <FormControl>
                  <Tiptap
                    description={field.name}
                    onChange={handleEditorChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button className="my-4" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddPost;
