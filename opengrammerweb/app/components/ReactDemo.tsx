'use client';

import { useEffect, useRef } from 'react';
import { GrammerCheckContent } from 'opengrammer';
import 'opengrammer/styles';

export default function ReactDemo() {
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
        They're going there. You're welcome! Its working great.
      </div>
      <p className="text-xs text-blue-600 dark:text-blue-400">
        Powered by React hooks. Grammar checking updates automatically.
      </p>
    </div>
  );
}

