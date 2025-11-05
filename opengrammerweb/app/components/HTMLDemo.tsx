'use client';

import { useEffect, useRef } from 'react';
import { GrammerCheckContent } from 'opengrammer';
import 'opengrammer/styles';

export default function HTMLDemo() {
  const editorRef = useRef<HTMLDivElement>(null);
  const checkerRef = useRef<ReturnType<typeof GrammerCheckContent> | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      checkerRef.current = GrammerCheckContent(editorRef.current, {
        debounceMs: 500,
        autoCheckOnLoad: true,
        autoCheckOnBlur: true,
        debug: false
      });

      return () => {
        checkerRef.current?.destroy();
      };
    }
  }, []);

  return (
    <div className="space-y-2">
      <div
        ref={editorRef}
        contentEditable
        className="min-h-[120px] p-3 border border-blue-200 dark:border-blue-800 rounded-lg bg-white dark:bg-slate-950 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        style={{ whiteSpace: 'pre-wrap' }}
        suppressContentEditableWarning={true}
      >
        Their going to the store. Its a nice day. Your welcome!
      </div>
      <p className="text-xs text-blue-600 dark:text-blue-400">
        Try editing the text above. Grammar errors will be highlighted automatically.
      </p>
    </div>
  );
}

