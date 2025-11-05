'use client';

import HTMLDemo from './components/HTMLDemo';
import ReactDemo from './components/ReactDemo';
import TipTapDemo from './components/TipTapDemo';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Package } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <header className="border-b border-blue-100 dark:border-blue-900/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                OpenGrammer
              </h1>
              <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                Grammar checking made easy
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button asChild>
                <a
                  href="https://www.npmjs.com/package/opengrammer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Package className="w-4 h-4" />
                  npm
                  <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/C0gzy/OpenGrammer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction Section */}
        <section className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-blue-100 mb-6">
            Scan text for grammar mistakes
          </h2>
          <p className="text-xl text-blue-800 dark:text-blue-200 max-w-3xl mx-auto mb-8">
            A JavaScript npm package that scans text for grammar mistakes using custom rules 
            and provides visual indicators with hover tooltips showing correction suggestions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-700 dark:text-blue-300">
            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
              Zero dependencies
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
              React support
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
              TipTap support
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
              Context-aware
            </span>
          </div>
        </section>

        {/* Demo Sections */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-100 mb-8 text-center">
            Try it out
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* HTML Demo */}
            <div className="flex flex-col">
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-blue-200 dark:border-blue-800 shadow-lg p-6 flex-1">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    HTML / ContentEditable
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Simplest integration for HTML contenteditable elements
                  </p>
                </div>
                <HTMLDemo />
              </div>
            </div>

            {/* React Demo */}
            <div className="flex flex-col">
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-blue-200 dark:border-blue-800 shadow-lg p-6 flex-1">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    React
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Seamless integration with React components
                  </p>
                </div>
                <ReactDemo />
              </div>
            </div>

            {/* TipTap Demo */}
            <div className="flex flex-col">
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-blue-200 dark:border-blue-800 shadow-lg p-6 flex-1">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    TipTap
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Full support for TipTap/ProseMirror editors
                  </p>
                </div>
                <TipTapDemo />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-100 mb-8 text-center">
            Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Custom Grammar Rules
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Detects homophones, double spaces, missing capitalization, and more
              </p>
            </div>
            <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Visual Indicators
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Blue wavy underlines highlight errors with interactive tooltips
              </p>
            </div>
            <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Context-Aware
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Smart checking reduces false positives by analyzing sentence context
              </p>
            </div>
            <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Easy Integration
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Works with HTML, React, and TipTap editors out of the box
              </p>
            </div>
            <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Zero Dependencies
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Core functionality has no external dependencies
              </p>
            </div>
            <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Hover Tooltips
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Interactive suggestions appear on hover with correction tips
              </p>
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section className="mb-16 text-center">
          <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-100 mb-6">
            Get Started
          </h3>
          <div className="bg-blue-950 dark:bg-blue-950 rounded-lg p-6 max-w-2xl mx-auto border border-blue-800">
            <code className="text-blue-200 text-sm">
              npm install opengrammer
            </code>
            <p className="text-blue-300 text-sm mt-4">
              For TipTap integration, also install:
            </p>
            <code className="text-blue-200 text-sm block mt-2">
              npm install opengrammer @tiptap/pm
            </code>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-200 dark:border-blue-800 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-700 dark:text-blue-300 text-sm">
            OpenGrammer - MIT License
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://www.npmjs.com/package/opengrammer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              npm Package
            </a>
            <span className="text-blue-400">•</span>
            <a
              href="https://github.com/C0gzy/OpenGrammer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
