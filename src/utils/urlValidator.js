export const isValidInstagramUrl = (url) => {
  // More comprehensive Instagram URL validation
  const patterns = [
    // Posts
    /^https?:\/\/(www\.)?instagram\.com\/p\/[\w-]+\/?/,
    // Reels
    /^https?:\/\/(www\.)?instagram\.com\/reels?\/[\w-]+\/?/,
    // Stories
    /^https?:\/\/(www\.)?instagram\.com\/stories\/[\w-]+\/[\d]+\/?/,
    // IGTV
    /^https?:\/\/(www\.)?instagram\.com\/(tv|reel)\/[\w-]+\/?/,
    // Short URLs
    /^https?:\/\/instagr\.am\/[\w-]+\/?/
  ];

  return patterns.some(pattern => pattern.test(url));
};