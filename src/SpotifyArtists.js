import React, { useState, useEffect } from "react";

const SpotifyArtists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10",
        {
          headers: {
            Authorization: `Bearer YOUR_ACCESS_TOKEN_HERE`,
          },
        }
      );
      const data = await response.json();
      setArtists(data.items);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Top 10 Artists</h2>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SpotifyArtists;
