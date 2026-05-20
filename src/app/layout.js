import { Figtree } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Navbar } from "@/Components/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "@/Components/Footer";






const figTree = Figtree({
  subsets: ["latin"],
});

export const metadata = {
  title: "Pet Harbor",
  description: "Pet harbor is a modern pet adoption platform where you can list your pet, manage your listing and also adopt pets who are listed by others!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${figTree.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <Toaster></Toaster>
        </body>
    </html>
  );
}
