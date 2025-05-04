"use client"
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const components = {
    h1: (props) => <h1 className={cn("text-8xl font-bold text-blue-600")} {...props} />,
  };

  return (
    <MDXProvider components={components}>
      <div className="p-6 bg-gray-100 border rounded-lg">
        <header className="mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">MDX Page Layout</h1>
        </header>
        <main>{children}</main>
        <footer className="mt-6 text-center text-gray-500 text-sm">
          <p>© 2025 My Website</p>
        </footer>
      </div>
    </MDXProvider>
  );
}
