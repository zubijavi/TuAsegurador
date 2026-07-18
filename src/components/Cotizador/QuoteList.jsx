import QuoteCard from "./QuoteCard";

export default function QuoteList({
    quotes = [],
    vehicle,
    location
}) {

    if (!quotes.length) return null;

    return (
        <div className="quotes">

            <div className="quotes-meta">
                {quotes.length} cotizaciones encontradas
            </div>

            <div className="quote-list">

                {quotes.map((quote, index) => (

                    <QuoteCard
                        key={index}
                        quote={quote}
                        vehicle={vehicle}
                        location={location}
                    />

                ))}

            </div>

        </div>
    );

}