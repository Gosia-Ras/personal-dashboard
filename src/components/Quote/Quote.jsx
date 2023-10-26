import { useQuoteData } from "./useQuoteData";

const Quote = () => {
 const quote = useQuoteData();

  return (
    <div className="font-sans w-full tracking-widest text-xl">
      <p>"{quote.content}"</p>
      <p>{quote.author}</p>
    </div>
  );
};

export default Quote;
