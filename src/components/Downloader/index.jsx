import React, { useState } from "react";
import { fetchInstagramContent } from "../../services/api";
import { isValidInstagramUrl } from "../../utils/urlValidator";
import DownloadForm from "./DownloadForm";
import ContentDisplay from "./ContentDisplay";
import ErrorMessage from "./ErrorMessage";

const Downloader = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setContent(null);

    if (!isValidInstagramUrl(url)) {
      setError(
        "Please enter a valid Instagram URL (post, reel, story, or IGTV)"
      );
      return;
    }

    setLoading(true);
    try {
      const data = await fetchInstagramContent(url);
      console.log("fetch data", data);

      if (!data || data.length === 0) {
        throw new Error("No downloadable content found");
      }
      setContent(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="download" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Download Instagram Content
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Enter the Instagram URL to download posts, reels, stories, or IGTV
            videos
          </p>
        </div>

        <div className="mt-8 max-w-xl mx-auto">
          <DownloadForm
            url={url}
            loading={loading}
            onUrlChange={setUrl}
            onSubmit={handleSubmit}
          />
          <ErrorMessage message={error} />
          <ContentDisplay content={content} />
        </div>
      </div>
    </div>
  );
};

export default Downloader;
