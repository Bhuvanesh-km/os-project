import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import brands from "../data/brands";
const options = ["option1", "option2", "option3", "option4"];
export default function Brands() {
  const navigate = useNavigate();

  return (
    <div
      className="brands-container"
      style={{ backgroundColor: "rgba(204, 197, 185, 1)" }}
    >
      <h1>Brands</h1>
      <p>Here are some of the brands we carry:</p>
      <div className="cards">
        {brands.map((brand) => (
          <div className="card" key={brand.name}>
            <img src={brand.img} alt={brand.name} />
            <h2>{brand.name}</h2>
            <Dropdown options={options} label={"REGULAR_AMZ"} />
            <button onClick={() => navigate(brand.path)}>Select</button>
          </div>
        ))}
      </div>
    </div>
  );
}
