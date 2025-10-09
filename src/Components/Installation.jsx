import React from "react";

const Installation = () => {
  const [cards, setCards] = React.useState([]);

  // Load cards from localStorage
  const loadCards = React.useCallback(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("cards")) || [];
      setCards(saved);
    } catch {
      setCards([]);
    }
  }, []);

  React.useEffect(() => {
    // initial load
    loadCards();

    // Listen for storage events (other tabs/windows)
    const onStorage = (e) => {
      if (e.key === "cards") {
        loadCards();
      }
    };

    // Listen for a custom event to handle same-window updates
    const onCardsUpdated = () => {
      loadCards();
    };

    window.addEventListener("storage", onStorage);
    window.addEventListener("cardsUpdated", onCardsUpdated);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("cardsUpdated", onCardsUpdated);
    };
  }, [loadCards]);

  const handleUninstall = (id) => {
    const updated = cards.filter((card) => String(card.id) !== String(id));
    setCards(updated);
    localStorage.setItem("cards", JSON.stringify(updated));
    // notify other listeners in this window
    window.dispatchEvent(new Event("cardsUpdated"));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Installed Cards</h1>

      {cards.length === 0 ? (
        <p className="text-gray-600">No cards installed.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-full border rounded-lg p-4 flex flex-col md:flex-row items-start md:items-center gap-4"
            >
              {card.image && (
                <img
                  src={card.image}
                  alt={card.appTitle || card.title || `card-${card.id}`}
                  className="w-full md:w-40 h-28 object-cover rounded"
                />
              )}

              <div className="flex-1">
                <h2 className="text-lg font-semibold">
                  {card.appTitle || card.title || "Untitled"}
                </h2>
                {card.description && (
                  <p className="text-sm text-gray-600 mt-1">
                    {card.description}
                  </p>
                )}
                <div className="text-sm text-gray-700 mt-2">
                  <div>Downloads: {card.downloads ?? "N/A"}</div>
                  <div>
                    Average rating: {card.ratingAvg ?? card.rating ?? "N/A"}
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0">
                <button
                  onClick={() => handleUninstall(card.id)}
                  className="btn btn-sm btn-error"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Installation;
