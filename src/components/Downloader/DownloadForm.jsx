import React from 'react';
import { FaDownload, FaSpinner } from 'react-icons/fa';

const DownloadForm = ({ url, loading, onUrlChange, onSubmit }) => (
  <form onSubmit={onSubmit} className="space-y-6">
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => onUrlChange(e.target.value)}
        placeholder="Paste Instagram URL here"
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        required
      />
    </div>
    <button
      type="submit"
      disabled={loading}
      className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50"
    >
      {loading ? (
        <>
          <FaSpinner className="animate-spin mr-2" />
          Processing...
        </>
      ) : (
        <>
          <FaDownload className="mr-2" />
          Download
        </>
      )}
    </button>
  </form>
);

export default DownloadForm;