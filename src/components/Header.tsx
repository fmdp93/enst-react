const Header = () => {
    return (
        <header>
            <div className="container-sm-fluid nav-wrapper">
                <nav className="navbar navbar-expand-sm navbar-light px-md-4">
                    <a className="navbar-brand mt-sm-2" href="index.php">ENST</a>
                    <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarToggler" ariaControls="navbarToggler" ariaExpanded="false" ariaLabel="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="index.php">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contacts.php">Contacts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="sitemap.php">Sitemap</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;