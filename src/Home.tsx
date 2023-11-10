import Header from './components/Nav'

const Home = () => {
    return (
        <div className="enst-home-container">
            <div className="green-bg-overlay">

            </div>
            <div className="grid row-1">
                <div className="item mx-auto">
                    <Header></Header>
                    <div className="item-wrapper">
                        <div id="site-title">
                            <div className="p-4">
                                <h1>ENST</h1>
                                <h2>Etheric Nerve Stimulation Treatment</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;