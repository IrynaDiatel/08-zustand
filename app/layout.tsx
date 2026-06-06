import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NoteHub",
  description: "Application for creating and managing notes",
  openGraph: {
    title: "NoteHub",
    description: "Application for creating and managing notes",
    images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <TanStackProvider>
          <div className="app-wrapper">
            <Header />
            <main className="main-content">{children}</main>
            <Footer />
          </div>
          {modal}
          <div id="modal-root"></div>
        </TanStackProvider>
      </body>
    </html>
  );
}
