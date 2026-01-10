export default function Output({ data , onRestart }) {
  const formatIndian = (num) => new Intl.NumberFormat("en-IN").format(num);

  return (
    <div className="output-container">
      <p className="title">Car Details</p> <br />
      <div className="output">
        <div className="out-row">
          <span className="label">Brand</span>
          <span className="value">{data.name}</span>
        </div>
        <div className="out-row">
          <span className="label">Age (yrs)</span>
          <span className="value">{data.age}</span>
        </div>
        <div className="out-row">
          <span className="label">Driven (kms)</span>
          <span className="value">{formatIndian(data.km_driven)}</span>
        </div>
        <div className="out-row">
          <span className="label">Fuel</span>
          <span className="value">{data.fuel}</span>
        </div>
        <div className="out-row">
          <span className="label">Seller</span>
          <span className="value">{data.seller_type}</span>
        </div>
        <div className="out-row">
          <span className="label">Gear Transmission</span>
          <span className="value">{data.transmission}</span>
        </div>
        <div className="out-row">
          <span className="label">Owner</span>
          <span className="value">{data.owner}</span>
        </div>
        <div className="out-row">
          <span className="label">Estimated Car Price</span>
          <span className="value">₹ {formatIndian(data.price)}</span>
        </div>
        <button type="restart" className="restart" onClick={onRestart}>Restart</button>
      </div>
    </div>
  );
}
