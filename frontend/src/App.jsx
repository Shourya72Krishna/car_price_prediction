import { useState } from "react";
import Form from "./form";
import Header from "./Header";
import Know1 from "./Know1";
import Output from "./Output";

function App() {
  const [result, setResult] = useState(false);
  const [priceData, setPriceData] = useState(null);

  const handleFormSubmit = async (formData) => {
    console.log("Received", formData);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      setPriceData({
        ...formData,
        ...result, // price, min_price, max_price
      });

      console.log(priceData);

      setResult(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRestart = () => {
    setResult(false);
    setPriceData(null);
  };

  return (
    <div className="supremus">
      <div>
        <Header />
      </div>

      <div className="set">
        <p className="features">Features Used</p>
        <Know1 />
        {result ? (
          <div>
            <Output data={priceData} onRestart={handleRestart} />
          </div>
        ) : (
          <Form onSubmit={handleFormSubmit} />
        )}
      </div>
    </div>
  );
}

export default App;
