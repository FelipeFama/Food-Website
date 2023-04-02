import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackToTopButton from "../buttons/BackToTopButton";
import Loader from "./Loader";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTopButton />
      <Loader />
    </>
  );
}
