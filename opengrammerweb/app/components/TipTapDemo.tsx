'use client';

import { useEffect, useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Decoration, DecorationSet } from 'prosemirror-view';
import { GrammerCheckContentTipTap } from 'opengrammer';
import 'opengrammer/styles';

export default function TipTapDemo() {
  const checkerRef = useRef<ReturnType<typeof GrammerCheckContentTipTap> | null>(null);

  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Their going to the store. Its a nice day. Your text here!</p>',
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'min-h-[120px] p-3 focus:outline-none prose prose-sm max-w-none dark:prose-invert',
      },
    },
  });

  useEffect(() => {
    if (editor) {
      checkerRef.current = GrammerCheckContentTipTap(editor, {
        decorations: { Decoration, DecorationSet },
        debounceMs: 500,
        autoCheckOnLoad: true,
        autoCheckOnBlur: true,
        debug: false
      });

      return () => {
        checkerRef.current?.destroy();
      };
    }
  }, [editor]);

  return (
    <div className="space-y-2">
      <div className="min-h-[120px] border border-blue-200 dark:border-blue-800 rounded-lg bg-white dark:bg-slate-950 overflow-hidden">
        <EditorContent editor={editor} />
      </div>
      <p className="text-xs text-blue-600 dark:text-blue-400">
        Full TipTap/ProseMirror integration with decorations.
      </p>
    </div>
  );
}

