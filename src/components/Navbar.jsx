import logo from "../images/airbnb 1.png";

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <img className="nav-logo" src={logo} alt="logo" />
      </nav>
    </header>
  );
};

export default Navbar;
