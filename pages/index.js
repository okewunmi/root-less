import Navbar from "../components/Nav";
import Top from "../components/Top/index";
import Detail from '../components/Detail/index'
import Project from '../components/Project/index'

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Top></Top>
      <Detail></Detail>
      <Project></Project>
    </main>
  );
}
