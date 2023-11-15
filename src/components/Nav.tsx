import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
    const refNavbarToggler = useRef<HTMLInputElement>(null);
    const loc = useLocation();

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/contacts", label: "Contacts" },
        { to: "/sitemap", label: "Sitemap" },
    ];

    function handleClick() {
        const navbar = refNavbarToggler.current
        navbar?.classList.remove('show');
    }

    return (        
        <div className={`container-sm-fluid nav-wrapper ${loc.pathname.replace('/', '') || "home"}`}>            
            <nav className="navbar navbar-expand-sm navbar-light px-md-4">
                <Link to={navLinks[0].to} className="navbar-brand mt-sm-2">ENST</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarToggler" aria-controls="navbarToggler"
                    aria-expanded="false" aria-label="Toggle navigation"                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler" ref={refNavbarToggler}>
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        {navLinks.map(link => (
                            <li className="nav-item" key={link.to}>
                                <Link to={link.to} className="nav-link" onClick={handleClick}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;