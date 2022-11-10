import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Categories.css'
import {
  AiOutlineBook,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiFillFileText,
  AiFillSetting,
} from "react-icons/ai";
import { TiSortAlphabetically } from 'react-icons/ti';

function CategoriesNav() {
    return (
      <div className="container" id="categories">
        <h1>Categories</h1>
        <Link to="/categories/all">
          <Button variant="dark" id="all">
            <TiSortAlphabetically />
            All
          </Button>{" "}
        </Link>
        <Link to="/categories/properties">
          <Button variant="dark" id="properties">
            <AiOutlineBook />
            Books
          </Button>{" "}
        </Link>
        <Link to="/categories/auto">
          <Button variant="dark" id="auto">
            <AiOutlineFundProjectionScreen />
            Projects
          </Button>{" "}
        </Link>
        <Link to="/categories/home">
          <Button variant="dark" id="home">
            <AiOutlineUser />
            Tutor
          </Button>{" "}
        </Link>
        <Link to="/categories/electronics">
          <Button variant="dark" id="electronics">
            <AiFillFileText />
            Notes
          </Button>{" "}
        </Link>
        <Link to="/categories/clothes">
          <Button variant="dark" id="clothes">
            <AiFillSetting />
            Hardware
          </Button>{" "}
        </Link>
      </div>
    );
}

export default CategoriesNav;