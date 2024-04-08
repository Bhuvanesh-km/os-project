import { useNavigate } from "react-router-dom";

export default function Brands() {
  const navigate = useNavigate();

  return (
    <div className="brands-container">
      <h1>Brands</h1>
      <p>Here are some of the brands we carry:</p>
      <div className="cards">
        <div className="card">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/03/Brita-logo.jpg"
            alt="BRITA"
          />
          <h2>BRITA</h2>
          <p>Description of BRITA</p>
          <button onClick={() => navigate("/brita")}>More</button>
        </div>
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5DdqxjtJSduqbiVPCChv1hcsA5lJQ4Z__mF23RxnzGw&s"
            alt="BURTSBEES"
          />
          <h2>BURTSBEES</h2>
          <p>Description of BURTSBEES</p>
          <button onClick={() => navigate("/burtsbees")}>More</button>
        </div>
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXl4_cOLpO2t64FcbSS4ZRS5A9B1_kaCkQUpKfD2sMog&s"
            alt="CAT LITTER"
          />
          <h2>CAT LITTER</h2>
          <p>Description of CAT LITTER</p>
          <button onClick={() => navigate("/cat-litter")}>More</button>
        </div>
        <div className="card">
          <img
            src="https://www.thecloroxcompany.com/wp-content/uploads/2022/06/clorox@4x.png?width=330&height=330&fit=crop"
            alt="CLOROX"
          />
          <h2>CLOROX</h2>
          <p>Description of CLOROX</p>
          <button onClick={() => navigate("/clorox")}>More</button>
        </div>
        <div className="card">
          <img
            src="https://cdn.worldvectorlogo.com/logos/glad.svg"
            alt="GLAD"
          />
          <h2>GLAD</h2>
          <p>Description of GLAD</p>
          <button onClick={() => navigate("/glad")}>More</button>
        </div>
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUUl_1IO6ndeifyFva0tP5kF5vtrRHJWgk7_ZTZdViRQ&s"
            alt="HOMECARE"
          />
          <h2>HOMECARE</h2>
          <p>Description of HOMECARE</p>
          <button onClick={() => navigate("homecare")}>More</button>
        </div>
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl-r_PYMw3fNionS46ttI36dborXK66n-mcxpZLn09KA&s"
            alt="LAUNDRY"
          />
          <h2>LAUNDRY</h2>
          <p>Description of LAUNDRY</p>
          <button onClick={() => navigate("laundry")}>More</button>
        </div>
      </div>
    </div>
  );
}
