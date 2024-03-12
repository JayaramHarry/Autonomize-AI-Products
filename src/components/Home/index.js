import { Link } from "react-router-dom";
import "./style.css"


const Home = () => (
    <div className="landing-page">   
      <h1 className="main-heading">Shop Smart, Live Stylishly: Your Ultimate Destination for Fashion & More!</h1>
      <p className="description">Explore the latest trends, hottest deals, and timeless classics all in one place! From fashion-forward clothing to must-have accessories, home essentials, and gadgets galore, our shopping website has everything you need to elevate your style and simplify your life. Start browsing now and discover the joy of effortless shopping!</p>  
      <button><Link className="button" to="/products">View More</Link></button>
    </div>
  );
  export default Home