import { Inter } from "next/font/google";
import "@/scss/index.scss";
import { Raleway, Fira_Code } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
const fireCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <style jsx global>{`
          :root {
            --raleway: ${raleway.style.fontFamily}
            --fira-code: ${fireCode.style.fontFamily}
          }
        `}</style> */}
        {children}
      </body>
    </html>
  );
}
