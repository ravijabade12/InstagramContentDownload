const formatSingleMedia = (mediaItem) => {
  console.log(typeof mediaItem);

  // Handle string URLs
  if (typeof mediaItem === "string") {
    return {
      type: mediaItem.includes(".mp4") ? "video" : "image",
      url: mediaItem,
    };
  }

  // Handle object format
  const url = mediaItem.url || mediaItem.media_url || mediaItem;
  if (!url || typeof url !== "string") return null;

  return {
    type: mediaItem.type || (url.includes(".mp4") ? "video" : "image"),
    url,
  };
};

export const formatMediaResponse = (data) => {
  // Handle array of media
  if (Array.isArray(data.media)) {
    return data.media.map(formatSingleMedia).filter(Boolean); // Remove null items
  }

  // Handle single media item
  if (data.media) {
    const formattedMedia = formatSingleMedia(data.media);
    return formattedMedia ? [formattedMedia] : [];
  }

  // Handle direct media response
  if (typeof data === "string" || data.url) {
    const formattedMedia = formatSingleMedia(data);
    return formattedMedia ? [formattedMedia] : [];
  }

  return [];
};
