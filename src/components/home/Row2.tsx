const Row2 = () => {
    const home_row_2_heading = "home-row-2-heading col-12 col-lg-10 py-5 pl-sm-5 mx-auto";
    const hr2h_li = "py-3 pl-5";
    return (
        <div className="container-fluid row-2">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="col-1-bg"></div>
                    <div className="col-1-bg-overlay"></div>
                    <div className="row">                        
                        <div className={home_row_2_heading}>
                            <h2>Do you want to</h2>
                            <ul>
                                <li className={hr2h_li}>Stay young</li>
                                <li className={hr2h_li}>Healthy</li>
                                <li className={hr2h_li}>Always energetic and strong?</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6  h-100">
                    <div className="col-2-bg"></div>
                    <div className="col-2-bg-overlay"></div>
                    <div className="row h-100">
                        <div className={home_row_2_heading}>
                            <h2>Are you looking for a</h2>
                            <ul>
                                <li className={hr2h_li}>Relief to your aches and pains?</li>
                                <li className={hr2h_li}>An easy cure to your ailments?</li>
                                <li className={hr2h_li}>Liberation from anxiety, tension and worries?</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Row2;