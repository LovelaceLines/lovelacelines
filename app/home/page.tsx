import { About } from "./About";
import { Contact } from "./Contact";
import { Init } from "./Init";
import { Process } from "./Process";
import { Projects } from "./Projects";

export default function Home() {
  return (
    <>
      <Init />
      <About />
      <Projects />
      <Process />
      <Contact />
    </>
  );
}