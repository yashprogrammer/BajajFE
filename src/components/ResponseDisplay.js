import React from "react";

const ResponseDisplay = ({ response, selectedOptions }) => {
  if (!response) return null;

  const renderData = () => {
    return selectedOptions.map((option) => (
      <div key={option.value} className="mt-4">
        <h3 className="text-lg font-bold">{option.label}</h3>
        <p>{JSON.stringify(response[option.value], null, 2)}</p>
      </div>
    ));
  };

  return <div className="p-4">{renderData()}</div>;
};

export default ResponseDisplay;
