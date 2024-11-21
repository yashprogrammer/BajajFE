import React, { useState } from "react";
import axios from "axios";

const JsonInput = ({ setResponse }) => {
  const [jsonInput, setJsonInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      // Parse JSON to validate
      const parsedInput = JSON.parse(jsonInput);

      // Send to backend
      const response = await axios.post("http://localhost:3000/bfhl", {
        data: parsedInput.data,
        file_b64: parsedInput.file_b64 || null,
      });

      setResponse(response.data);
      setError("");
    } catch (err) {
      setError("Invalid JSON or server error");
    }
  };

  return (
    <div className="p-4">
      <textarea
        className="w-full p-2 border rounded-lg"
        rows="5"
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder='Enter JSON here, e.g., { "data": ["A", "1", "b"] }'
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Submit
      </button>
    </div>
  );
};

export default JsonInput;
