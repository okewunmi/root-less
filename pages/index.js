import Navbar from "../components/Nav";
import Top from "../components/Top/index";
import Detail from '../components/Detail/index'
import Project from '../components/Project/index'
import Footer from '../components/Footer/index'
import Testimony from '../components/Testimony'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Top></Top>
      <Detail></Detail>
      <Project></Project>
      <Testimony></Testimony>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}
