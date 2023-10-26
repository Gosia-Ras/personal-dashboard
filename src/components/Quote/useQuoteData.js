import { useState, useEffect } from "react";
import axios from "axios";

export const useQuoteData = () => {
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

      return quote;
}