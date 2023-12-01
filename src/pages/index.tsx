import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../styles/global.css';
import logo from '../images/hahasystems.svg';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="bg-black h-screen flex flex-col items-center justify-center">
      <img src={logo} alt="haha.systems" className="w-1/2" />
    </main>
  );
};

export default IndexPage

export const Head: HeadFC = () => <title>haha.systems</title>;
