import React from 'react';

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
      <p className="text-red-600">{message}</p>
    </div>
  );
};

export default ErrorMessage;