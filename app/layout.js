import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata = {
  title: "Tic Tac Toe",
  description:
    "A clean, minimal Tic Tac Toe game with dark mode, built with Next.js and Tailwind CSS.",
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.classList.toggle('dark',t==='dark');}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}