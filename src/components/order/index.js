import Footer from "../Footer/footer";
import Header from "../Header/header";
import "./order.css";

export function Order() {
  return (
    <div className="container">
      <Header />
        <div className="text-section">
          <section className="reserve-header-text">
            <h1>Order Online</h1>
            <h3>Comming Soon</h3>
          </section>
        </div>
      <Footer />
    </div>
  );
}
