import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Quote from "./components/Quote/Quote";
import Tasklist from "./components/Tasklist/Tasklist";
import Weather from "./components/Weather/Weather";
import React, { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  return (
    <div className="App text-zinc-100">
      <Header inputRef={inputRef} />
      <main className="container mx-auto">
        <div className="mx-auto max-w-7xl py-14 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between gap-10">
          <Quote />
        </div>
        <div className="mx-auto max-w-7xl py-14 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between gap-10">
          <Weather />
        </div>
        <div className=" mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex flex-row justify-between">
          <Tasklist inputRef={inputRef} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
