// import { FaArrowLeft } from "react-icons/fa";
import LeftArrow from "../../icons/LeftArrow";
import { Link } from "react-router-dom";

function BackButton() {
  return (
    <Link to="/" className="backButton">
      <LeftArrow />
      <p>Back</p>
    </Link>
  );
}

export default BackButton;
