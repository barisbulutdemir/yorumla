'use client'

import { useEditor, EditorContent, RawCommands, Extension} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import { Toolbar } from './Toolbar'
import { Heading } from '@tiptap/extension-heading'
import { Node, mergeAttributes } from '@tiptap/core'
import { StarExtension } from '@/lib/starExtension'


export default function Tiptap({description, onChange,
}: {description: string, onChange:(richText: string) => void}) {

    
      
    

    const editor = useEditor({
        extensions: [StarterKit.configure({

        }),Heading.configure({
            HTMLAttributes:{
                class: 'text-2xl font-bold',
                levels: [2],
            }
        }),
        BulletList.configure({
            HTMLAttributes: {
              class: 'list-disc pl-6'
            }
          }),
        OrderedList.configure({
            HTMLAttributes:{
                class: 'list-decimal pl-6'
            }
        }),
    ],
        content:description,
        editorProps: {
            attributes: {
                class: "rounded-md border bg-white min-h-[250px] border-input ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            },
        },
        onUpdate({ editor }){
            onChange(editor.getHTML())
            console.log(editor.getHTML())
        }
    })

    return (
        <div className='flex flex-col justify-stretch space-y-2 min-h-[250px]  rounded-lg '>
            <Toolbar editor={editor} />
            <EditorContent editor={editor} className='bg-white rounded-md  p-2' />
        </div>
    )

}