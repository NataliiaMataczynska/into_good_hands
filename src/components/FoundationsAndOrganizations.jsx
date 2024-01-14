import image1 from "../assets/Decoration.svg";
import image5 from "../assets/Decoration.svg";
export default function FoundationsAndOrganizations() {
    return (
        <section className="fundacion-container">
            <div className="top-column" >
                <h1 className="section-title">
                    Komu pomagamy?
                </h1>
                <div className="fundacion-img">
                    <img alt="" src={image1} className="fundacion-image" />
                </div>
                <div className="section-buttons">
                    <button className="section-button">Fundacjom</button>
                    <button className="section-button">Organizacjom pozarządowym</button>
                    <button className="section-button">Lokalnym zbiórkom</button>
                </div>
                <p className="section-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
            </div>
            <div className="bottom-column" >
                <div className="org-card" >
                    <div className="org-card-content" >
                        <h3>Organizacja “Lorem Ipsum 1”</h3>
                        <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                    </div>
                    <div className="org-card-icons">Egestas, sed, tempus</div>
                </div>
                <div className="org-card" >
                    <div className="org-card-content" >
                        <h3>Organizacja “Lorem Ipsum 2”</h3>
                        <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                    </div>
                    <div className="org-card-icons">Ut, aliquam, purus, sit, amet</div>
                </div>
                <div className="org-card" >
                    <div className="org-card-content" >
                        <h3>Organizacja “Lorem Ipsum 3”</h3>
                        <p>Scelerisque in dictum non consectetur a erat nam.</p>
                    </div>
                    <div className="org-card-icons">Mi, quis, hendrerit, dolor</div>
                </div>
            </div>
            <div className="page-buttons">
                <button className="page-button" >1</button>
                <button className="page-button" >2</button>
            </div>
        </section>
    );
}