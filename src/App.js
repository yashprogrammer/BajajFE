import React, { useState } from "react";
import JsonInput from "./components/JsonInput";
import Dropdown from "./components/Dropdown";
import ResponseDisplay from "./components/ResponseDisplay";

const App = () => {
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { value: "alphabets", label: "Alphabets" },
    { value: "numbers", label: "Numbers" },
    {
      value: "highest_lowercase_alphabet",
      label: "Highest Lowercase Alphabet",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1>Your Roll Number</h1>
      </header>
      <main className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow">
        <JsonInput setResponse={setResponse} />
        <Dropdown options={options} setSelectedOptions={setSelectedOptions} />
        <ResponseDisplay
          response={response}
          selectedOptions={selectedOptions}
        />
      </main>
    </div>
  );
};

export default App;
