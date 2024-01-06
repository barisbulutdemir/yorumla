// tiptap-extensions.d.ts
import '@tiptap/core'

declare module '@tiptap/core' {
  interface ChainedCommands {
    insertStar: () => ChainedCommands;
  }
}
