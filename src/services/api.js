import axios from "axios";

import { formatMediaResponse } from "../utils/mediaFormatter";

export const fetchInstagramContent = async (url) => {
  const options = {
    method: "GET",
    url: "https://instagram-downloader-download-instagram-stories-videos4.p.rapidapi.com/convert",
    params: {
      url: url,
    },
    headers: {
      "x-rapidapi-key": "368bb062cdmsha2eb3bdf26a9e54p13ae52jsnc437ce407808",
      "x-rapidapi-host":
        "instagram-downloader-download-instagram-stories-videos4.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log("data", response);

    if (!response.data) {
      throw new Error("No content found");
    }

    if (response.data.error) {
      throw new Error(response.data.message || "Failed to fetch content");
    }

    return formatMediaResponse(response.data);
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      "Failed to fetch Instagram content. Please check the URL and try again.";
    throw new Error(errorMessage);
  }
};
