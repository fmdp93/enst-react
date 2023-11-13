import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="container-sm-fluid nav-wrapper">
            <nav className="navbar navbar-expand-sm navbar-light px-md-4">
                <a className="navbar-brand mt-sm-2" href="index.php">ENST</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacts" className="nav-link">Contacts</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sitemap" className="nav-link">Sitemap</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;