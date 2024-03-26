import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import { Potentials } from "./sections";

const App = () => {
  return (
    <main className="relative gap-5">
      <Nav />
      <Hero />
      <Potentials />
    </main>
  );
};

export default App;
