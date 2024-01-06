'use client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useStore from "@/zustand/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { setCredentials } from '@/redux/features/authSlice';
import { useDispatch } from 'react-redux';
import { useLoginUserMutation } from "@/redux/services/api";

const Login = () => {
  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const result = await loginUser({ username, password }).unwrap();
      dispatch(setCredentials(result));
      console.log('Giriş Başarılı');
      router.push('/'); // Başarıyla giriş yaptıktan sonra anasayfaya yönlendir

    } catch (error) {
      console.error('Giriş başarısız', error);
      // Burada kullanıcıya hata mesajı göster
    }
  };





  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div
            className=""
          >
            Login
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              <div className="flex justify-between items-center">
                <Label className="text-2xl">Login</Label>
                <Link
                  href="/register"
                  className="text-green-500 text-sm hover:underline"
                >
                  Or Register
                </Link>
              </div>
            </AlertDialogTitle>
            <AlertDialogDescription>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Username</Label>
                <Input value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Password</Label>
                  <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="flex justify-end cursor-pointer">
                  <Link href="/" className="text-xs">
                    Do you forget password ?
                  </Link>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogin}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Login;
