import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Quote from "./components/Quote/Quote";
import Tasklist from "./components/Tasklist/Tasklist";
import Weather from "./components/Weather/Weather";
import React, { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  return (
    <div className="App min-h-full flex flex-col text-zinc-100">
      <Header inputRef={inputRef} />
      <main className="container mx-auto flex flex-col gap-5 mb-5 items-center">
        <article className="max-w-7xl w-full rounded-lg py-5 lg:py-8 lg:px-8 px-3 flex flex-col lg:flex-row justify-between gap-10">
          <Quote />
        </article>
        <article className="max-w-7xl w-full rounded-lg py-5 lg:py-8 lg:px-8 px-3 flex flex-col lg:flex-row justify-between gap-10">
          <Weather inputRef={inputRef} />
        </article>
        <article className="max-w-7xl w-full rounded-lg py-5 lg:py-8 lg:px-8 px-3 flex flex-col lg:flex-row justify-between gap-10">
          <Tasklist inputRef={inputRef} />
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default App;
