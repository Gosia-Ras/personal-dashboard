import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Quote from "./components/Quote/Quote";
import Tasklist from "./components/Tasklist/Tasklist";
import Weather from "./components/Weather/Weather";

function App() {
  return (
    <div className="App text-zinc-100">
      <Header />
      <main className="container mx-auto">
        <div className="mx-auto max-w-7xl py-14 sm:px-6 lg:px-8 flex flex-row justify-between gap-10">
          <Quote />
          <Weather />
        </div>
        <div className=" mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex flex-row justify-between">
          <Tasklist />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
