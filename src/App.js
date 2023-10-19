import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Quote from "./components/Quote/Quote";
import Tasklist from "./components/Tasklist/Tasklist";
import Weather from "./components/Weather/Weather";

function App() {
  return (
    <div className="App bg-jet text-zinc-100">
      <Header />
      <main className="bg-slate-700">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <Quote />
        </div>
        <div className=" mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex flex-row justify-between">
          <Tasklist />
          <Weather />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
