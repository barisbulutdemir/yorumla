import { Extension } from '@tiptap/core'

export const StarExtension = Extension.create({
  name: 'star',

  addCommands():any {
    return {
      insertStar: () => ({ commands }: any) => {
        return commands.insertContent('⭐')
      },
    }
  },
})