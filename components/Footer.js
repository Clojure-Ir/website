// components/Layout.js
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Footer = props => (
  <Navbar style={{ "height": "200px" }} bg="primary" variant="dark">
    <Navbar.Brand href="/">
      <img
        alt=""
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Clojure_logo.svg/1024px-Clojure_logo.svg.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{'   '}
    انجمن Clojure  ایران
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/Statute">اساسنامه</Nav.Link>
      <Nav.Link href="/book/BraveClojure">ترجمه کتاب Clojure fo the Brave and True</Nav.Link>
      <Nav.Link href="/Resources">منابع آموزشی</Nav.Link>

    </Nav>
  </Navbar>

);

export default Footer;