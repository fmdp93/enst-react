import { ClassesType } from "./App";

const Sitemap = ({classes}: {classes: ClassesType}) => {
    return (
        <div id="site-map" className="container-fluid">
            <div className={classes.row}>
                <div className={classes.col_1}>
                    <div className={classes.col_1_row}>
                        <div className={classes.col_1_row_col_1}>
                            <div id="side-icon">
                                <i className="fas fa-directions"></i>
                            </div>
                        </div>
                        <div className={classes.col_1_row_col_2}>
                            <h1>Sitemap</h1>
                            <p>
                                Our clinic is located in #1 lantawan Street cor. Guirayan. St Q.C.
                            </p>
                        </div>
                    </div>
                    <div id="map-wrapper">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6369.31666749968!2d121.01668641426795!3d14.607941262540779!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b626fc47d3cb%3A0x714726caca934aad!2s1%20Lantawan%2C%20Quezon%20City%2C%201113%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1608100441944!5m2!1sen!2sph" width="640" height="480" frameBorder="0" style={{ border: 0 }} allowFullScreen={true} aria-hidden="false" tabIndex={0}></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sitemap;