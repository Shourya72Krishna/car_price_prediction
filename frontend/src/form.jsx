import { useState } from "react";

export default function Form({onSubmit}) {
  const [name, setName] = useState("");
  const [fuel, setFuel] = useState("");
  const [seller_type, setSeller] = useState("");
  const [transmission, setTransmission] = useState("");
  const [owner, setOwner] = useState("");
  const [age, setAge] = useState(0);
  const [km_driven, setDriven] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) {
      alert("Your Form is invalid.");
      return;
    }
      const data = {
    name,
    fuel,
    seller_type,
    transmission,
    owner,
    age,
    km_driven,
  };
    console.log("Submitted");
    onSubmit(data);
  };

  const isValid =
    name != "" &&
    fuel != "" &&
    seller_type != "" &&
    transmission != "" &&
    owner != "" &&
    age >= 0 &&
    km_driven >= 0;

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <p className="title">Car Details</p>

        <div className="row">
          <label htmlFor="car_brand" className="label">Select Car Brand</label>
          <select
            name="car_brand"
            id="car_brand"
            onChange={(e) => setName(e.target.value)}
            defaultValue={""}
            className="value"
          >
            <option value="Ambassador">Ambassador</option>
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Daewoo">Daewoo</option>
            <option value="Datsun">Datsun</option>
            <option value="Fiat">Fiat</option>
            <option value="Ford">Ford</option>
            <option value="Force">Force</option>
            <option value="Honda">Honda</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Isuzu">Isuzu</option>
            <option value="Jaguar">Jaguar</option>
            <option value="Jeep">Jeep</option>
            <option value="Kia">Kia</option>
            <option value="Land">Land</option>
            <option value="MG">MG</option>
            <option value="Mahindra">Mahindra</option>
            <option value="Maruti">Maruti</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Mitsubishi">Mitsubishi</option>
            <option value="Nissan">Nissan</option>
            <option value="OpelCorsa">OpelCorsa</option>
            <option value="Renault">Renault</option>
            <option value="Skoda">Skoda</option>
            <option value="Tata">Tata</option>
            <option value="Toyota">Toyota</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Volvo">Volvo</option>
            <option value="">Select</option>
          </select> <br />
        </div>

        <div className="row">
          <label htmlFor="year" className="label">
          Enter the year in which you bought the Car
        </label>
        <input
          type="number"
          id="year"
          placeholder="Enter year...."
          min={1995}
          max={2026}
          onChange={(e)=>setAge(2026-e.target.value)}
          className="value"
        />
        </div>

        <div className="row">
          <label htmlFor="km_driven" className="label">
          Enter the number of Kms the car has been driven</label>
        <input
          className="value"
          type="number"
          min={0}
          placeholder="Number of kilometers"
          id="km_driven"
          onChange={(e)=>setDriven(Number(e.target.value))}
        />
        </div>

        <div className="row">
          <label htmlFor="fuel" className="label">Select the Fuel Type</label>
        <select
          name="fuel"
          className="value"
          id="fuel"
          onChange={(e) => setFuel(e.target.value)}
          defaultValue={""} 
        >
          <option value="">Select</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="LPG">LPG</option>
          <option value="CNG">CNG</option>
          <option value="Electric">Electric</option>
        </select>
        </div>

        <div className="row">
          <label htmlFor="seller_type" className="label">Select the Seller Type</label>
        <select
          name="seller_type"
          id="seller_type"
          onChange={(e) => setSeller(e.target.value)}
          defaultValue={""}
          className="value"
        >
          <option value="">Select</option>
          <option value="Individual">Individual</option>
          <option value="Dealer">Dealer</option>
          <option value="Trustmark Dealer">Trustmark Dealer</option>
        </select></div> 

        <div className="row">
          <label htmlFor="transmission" className="label">Select the Gear Transmission</label>
        <select
          name="transmission"
          id="transmission"
          onChange={(e) => setTransmission(e.target.value)}
          defaultValue={""}
          className="value"
        >
          <option value="">Select</option>
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
        </select>
        </div>

        <div className="row">
          <label htmlFor="owner" className="label">Select the Owner Type</label>
        <select
          name="owner"
          id="owner"
          className=""
          onChange={(e) => setOwner(e.target.value)}
        >
          <option value="">Select</option>
          <option value="First">First Owner</option>
          <option value="Second">Second Owner</option>
          <option value="Third">Third Owner</option>
          <option value="Fourth">Fourth or Above Owner</option>
          <option value="Test">Test Drive Car</option>
        </select>
        </div>

        <div className="buttons"><button type="submit" disabled={!isValid} className="sub">Submit</button>
        <button type="reset" className="clr">Clear</button></div>
      </form>
    </div>
  );
}
