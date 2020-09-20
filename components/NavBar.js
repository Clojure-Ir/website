// components/NavBar.js
import Link from "next/link"
const NavBar = () => (
    <div>
        <nav className="navbar navbar-light bg-light static-top">
            <div className="container">

                <Link href="/" >
                    <a className="btn btn-primary" />
                </Link>
                <Link href="/contact.html">
                    <a className="btn btn-primary" >تماس با ما</a>
                </Link>
            </div>
        </nav>
    </div>
);

export default NavBar;