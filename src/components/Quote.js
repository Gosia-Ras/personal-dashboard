import axios from "axios";
import React, { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    async function fetchQuote() {
      try {
        const response = await axios.get("https://api.quotable.io/random");
        setQuote(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching the quote:", error);
      }
    }

    fetchQuote();
  }, []);

  return (
    <div className="font-sans">
      <p>{quote.content}</p>
      <p>{quote.author}</p>
    </div>
  );
};

export default Quote;
