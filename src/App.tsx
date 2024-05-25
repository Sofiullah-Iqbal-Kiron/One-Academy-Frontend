import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";


export default function App() {
  return (
    <div className="flex flex-col w-full">
      <NavBar />
      <Hero />
      <Footer />
    </div>
  )
}
