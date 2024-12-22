import Button from "./Button";
import restfood from "./restauranfood.jpg";

export default function Main() {
  return (
    <>
      <div className="main">
        <section className="one">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <Button label="reverse a table" />
          <h3>This weeks specials!</h3>
        </section>
        <section className="two">
          <img src={restfood} alt="rest" className="mainphoto" />
          <Button label="MENU ONLINE" />
        </section>
      </div>
    </>
  );
}
