import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Props } from "@/types";
import { getStaticProps } from "@/lib/fetchData";
import BackToTopButton from "@/components/buttons/BackToTopButton";
import Loader from "./Loader";

interface LayoutProps {
  children?: React.ReactNode;
  header?: Props["header"];
  footer?: Props["footer"];
  loader?: Props["loader"];
}

export { getStaticProps };

export default function Layout({
  header,
  footer,
  loader,
  children,
}: LayoutProps) {
  return (
    <>
      <Header header={header} />
      <main>{children}</main>
      <Footer footer={footer} />
      <BackToTopButton />
      <Loader loader={loader} />
    </>
  );
}
