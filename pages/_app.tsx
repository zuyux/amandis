import '@/app/globals.css';
import type { AppProps } from 'next/app';
import type { ComponentType } from 'react';
import Navbar from '@/components/navbar';
import MouseMoveEffect from "@/components/mouse-move-effect"


export default function App({ Component, pageProps }: AppProps & { Component: ComponentType }) {
  return (
    <html lang="en" className="dark">
      <main className='bg-background text-foreground antialiased'>
        <Navbar/>
        <Component {...pageProps} />
        <MouseMoveEffect />
      </main>
    </html>
  );
}
