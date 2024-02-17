import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="womens">Womens</Link>
        </li>
        <li>
          <Link to="mens">Mens</Link>
        </li>
        <li>
          <Link to="jewellery">Jewellery</Link>
        </li>
        <li>
          <Link to="electronics">Electroninc</Link>
        </li>
      </ul>
    </div>
  );
}
