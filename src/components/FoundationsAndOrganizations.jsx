import { Element } from 'react-scroll';
import React, { useState } from 'react';
import image1 from "../assets/Decoration.svg";

const Foundations = () => (
    <div>
        <div className="org-card">
            <div className="org-card-content">
                <h3>Fundacja “Dbam o Zdrowie”</h3>
                <p>Cel i misja: Pomoc sobom znajdujących sie w trudnej sytuacji zyciowej</p>
            </div>
            <div className="org-card-icons">ubrania, jedzenie, sprzęt AGD, meble, zabawki</div>
        </div>
        <div className="org-card">
            <div className="org-card-content">
                <h3>Fundacja “Dla dzieci”</h3>
                <p>Cel i misja: Pomoc dzieciom z ubogich rodzin</p>
            </div>
            <div className="org-card-icons">ubrania, meble, zabawki</div>
        </div>
        <div className="org-card">
            <div className="org-card-content">
                <h3>Fundacja “Bez domu”</h3>
                <p>Cel i misja:Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
            </div>
            <div className="org-card-icons">ubrania, jedzenie, ciepłe koce</div>
        </div>
    </div>
);

const Organizations = () => (
    <div>
        <div className="org-card">
            <div className="org-card-content">
                <h3>Organizacja “Lorem Ipsum 1”</h3>
                <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
            </div>
            <div className="org-card-icons">Egestas, sed, tempus</div>
        </div>
        <div className="org-card">
            <div className="org-card-content">
                <h3>Organizacja “Lorem Ipsum 2”</h3>
                <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
            </div>
            <div className="org-card-icons">Ut, aliquam, purus, sit, amet</div>
        </div>
        <div className="org-card">
            <div className="org-card-content">
                <h3>Organizacja “Lorem Ipsum 3”</h3>
                <p>Scelerisque in dictum non consectetur a erat nam.</p>
            </div>
            <div className="org-card-icons">Mi, quis, hendrerit, dolor</div>
        </div>
    </div>
);

const Collections = () => (
    <div>
        <div className="org-card">
            <div className="org-card-content">
                <h3>Zbiórka “Lorem Ipsum 1”</h3>
                <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
            </div>
            <div className="org-card-icons">Egestas, sed, tempus</div>
        </div>
        <div className="org-card">
            <div className="org-card-content">
                <h3>Zbiórka “Lorem Ipsum 2”</h3>
                <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
            </div>
            <div className="org-card-icons">Ut, aliquam, purus, sit, amet</div>
        </div>
        <div className="org-card">
            <div className="org-card-content">
                <h3>Zbiórka “Lorem Ipsum 3”</h3>
                <p>Scelerisque in dictum non consectetur a erat nam.</p>
            </div>
            <div className="org-card-icons">Mi, quis, hendrerit, dolor</div>
        </div>
    </div>
);
export default function FoundationsAndOrganizations() {
    const PagesContent = {
        FUNDACJE: <Foundations />,
        ORGANIZACJE: <Organizations />,
        ZBIÓRKI: <Collections />,
    };

    const [currentPageContent, setCurrentPageContent] = useState(PagesContent.FUNDACJE);
    const [selectedButton, setSelectedButton] = useState(1);

    const handlePageContentChange = (content, buttonNumber) => {
        setCurrentPageContent(content);
        setSelectedButton(buttonNumber);
    };

    return (
        <Element name="foundations-section">
            <section className="fundacion-container">
                <div className="top-column" >
                    <h1 className="section-title">
                        Komu pomagamy?
                    </h1>
                    <div className="fundacion-img">
                        <img alt="" src={image1} className="fundacion-image" />
                    </div>
                    <div className="section-buttons">
                        <button className={`section-button ${selectedButton === 1 ? 'selected' : ''}`} onClick={() => handlePageContentChange(PagesContent.FUNDACJE, 1)}>Fundacjom</button>
                        <button className={`section-button ${selectedButton === 2 ? 'selected' : ''}`} onClick={() => handlePageContentChange(PagesContent.ORGANIZACJE, 2)}>Organizacjom pozarządowym</button>
                        <button className={`section-button ${selectedButton === 3 ? 'selected' : ''}`} onClick={() => handlePageContentChange(PagesContent.ZBIÓRKI, 3)}>Lokalnym zbiórkom</button>
                    </div>
                    <p className="section-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                </div>
                <div className="bottom-column">
                    {currentPageContent}
                </div>
                <div className="page-buttons">
                    <button className={`page-button ${selectedButton === 1 ? 'selected' : ''}`} >1</button>
                    <button className={`page-button ${selectedButton === 2 ? 'selected' : ''}`} >2</button>
                    <button className={`page-button ${selectedButton === 3 ? 'selected' : ''}`} >3</button>
                </div>
            </section>
        </Element>
    );
}