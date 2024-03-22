// 

import "./style.css"
import ramen from "./ramen.jpg"

function App() {
  return (
    <>
      <nav>
        <ul id="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Menu</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <img src={ramen}/>
      <section id="hero">
        <div id="cta">
          <a href="#"> Make a Booking </a>
        </div>
      </section>
      <section id="about-us">
        <div className="content">
          <h1>Japanese so fresh, any fresh you have to fly to Japan</h1>
        </div>
      </section>
    </>
  );
}

export default App;
