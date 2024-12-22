import dishicons from "./icons_assets/Dish icon.svg";

export default function Menu({ dishimg, dishName, price }) {
  return (
    <>
      <div className="menu">
        <img src={dishimg} alt="imog" className="imog" />
        <h2>{dishName}</h2>
        <span id="price">{price}</span>
        <p>
          The famous cheese burger of cheese, lettuce, potatoes and BBQ sauce{" "}
        </p>
        <div>
          <pre>Order a delivery</pre>
          <img src={dishicons} alt="dishicon" id="icon" />
        </div>
      </div>
    </>
  );
}
