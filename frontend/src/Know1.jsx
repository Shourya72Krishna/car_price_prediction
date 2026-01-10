export default function Know1() {
  return (
    <div className="know">
      <div className="row2">
        <p className="subtitle">Car Brand</p>
        <p>
          Different car brands have different market values, reliability, and
          maintenance costs. Premium brands usually retain higher resale value
          compared to budget brands.
        </p>
      </div>

      <hr className="line" />

      <div className="row2">
        <p className="subtitle">Year of Purchase</p>
        <p>
          Older cars usually depreciate more due to wear and technological
          upgrades.
        </p>
      </div>
      <hr className="line" />
      <div className="row2">
        <p className="subtitle">Kilometers Driven</p>
        <p>
          Shows how much the car has been used. Higher mileage often means more
          wear and tear, reducing resale value.
        </p>
      </div>
      <hr className="line" />
      <div className="row2">
        <p className="subtitle">Transmission Type</p>
        <p>
          <strong>Manual</strong> – Common and affordable <br />
          <strong>Automatic</strong> – More comfortable, higher demand in cities{" "}
          <br /> Automatic cars usually have higher resale value.
        </p>
      </div>
      <hr className="line" />
      <div className="row2">
        <p className="subtitle">Fuel Type</p>
        <p>
          The fuel used by the car impacts running cost and demand: <br />
          <strong>Petrol</strong> –Lower upfront cost <br />
          <strong>Diesel</strong> – Better for long-distance usage <br />
          <strong>CNG / LPG</strong> –Economical and eco-friendly <br />
          <strong>Electric</strong> – Low running cost, growing demand
        </p>
      </div>
      <hr className="line" />

      <div className="row2">
        <p className="subtitle">Seller Type</p>
        <p>
          Indicates who is selling the car: <br /> <strong>Individual</strong> –
          Private owner
          <br /> <strong>Dealer</strong> – Car showroom or reseller <br />{" "}
          <strong>Trustmark Dealer</strong> – Verified and certified dealers{" "}
          <br />
          Certified sellers generally offer higher-priced but reliable cars.
        </p>
      </div>
      <hr className="line" />

      <div className="row2">
        <p className="subtitle">Owner Type</p>
        <p>
          Owner Type Represents how many times the car has changed ownership:{" "}
          <br />
          <strong>First Owner</strong> – Highest value <br />
          <strong>Second / Third Owner</strong> – Reduced value <br />{" "}
          <strong>Test Drive Cars</strong> – Very limited usage
          <br />
          Fewer owners generally mean better resale price.
        </p>
      </div>
    </div>
  );
}
