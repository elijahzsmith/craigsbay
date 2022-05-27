import React, { useEffect } from "react";

function Favorites() {
  useEffect(() => {
    fetch("/favorites")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <div>FavoritesPage</div>;
}

export default Favorites;
