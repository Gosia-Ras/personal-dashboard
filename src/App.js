import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Quote from "./components/Quote";
import Tasklist from "./components/Tasklist";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App bg-jet text-white">
      <Header />
      <main>
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
