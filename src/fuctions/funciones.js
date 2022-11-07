import axios from "axios";

const optionsAllGames = {
  method: "GET",
  url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
  headers: {
    "X-RapidAPI-Key": "e0f0f179c8msh5469811c044f37fp1c9bcdjsn8585b50ebcbb",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

const optionsCategory = {
  method: "GET",
  url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
  params: { platform: "pc" },
  headers: {
    "X-RapidAPI-Key": "e0f0f179c8msh5469811c044f37fp1c9bcdjsn8585b50ebcbb",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

export const allGames = async () => {
  try {
    const response = await axios.request(optionsAllGames);

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const category = async (category) => {
  try {
    const response = await axios.request(optionsCategory);

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const detailsGameById = async (id) => {
  try {
    const response = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/game`,
      {
        params: { id: '343' },
        headers: {
          "X-RapidAPI-Key":
            "e0f0f179c8msh5469811c044f37fp1c9bcdjsn8585b50ebcbb",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      }
    );

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
