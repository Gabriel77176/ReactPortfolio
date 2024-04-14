import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

function NavbarApp() {
  return (
    <Navbar fluid className="bg-blue-950">
      <Navbar.Brand>
        <Link to="/">
          <img
            src="../..//images/website-logo-sample.png"
            className="mr-3 h-5 sm:h-9 pb-1 pt-1"
            alt="Sample website logo"
          />
        </Link>
      </Navbar.Brand>
      <div className="flex md:order-2 hover:bg-transparent">
        <Button className="bg-white text-black hover:bg-blue-400">
          <Link to="/contact" className="text-lg">Contact</Link>
        </Button>
        <Navbar.Toggle />
      </div>
        <Navbar.Collapse className="ml-auto flex pr-6">
            <Navbar.Link>
                <Link to="/" active className="text-white text-lg">
                    Home
                </Link>
            </Navbar.Link>
            <Navbar.Link>
                <Link to="/portfolio" className="text-white text-lg">Portfolio</Link>
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarApp;
