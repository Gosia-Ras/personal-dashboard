import axios from "axios";
import React, { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    async function fetchQuote() {
      try {
        const response = await axios.get("https://api.quotable.io/random");
        setQuote(response.data);
      } catch (error) {
        console.error("Error fetching the quote:", error);
      }
    }

    fetchQuote();
  }, []);

  return (
    <div className="font-sans tracking-widest text-xl basis-1/3 quote flex flex-col justify-center p-5">
      <p>"{quote.content}"</p>
      <p>{quote.author}</p>
    </div>
  );
};

export default Quote;
