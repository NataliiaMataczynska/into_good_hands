import supabase from "/src/utils/supabase.js";
import { useEffect, useState } from "react";
import { Element } from 'react-scroll';
import image1 from "../assets/Decoration.svg";

export default function FoundationsAndOrganizations() {
    const [foundations, setFoundations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const foundationsPerPage = 3;
    const [selectedButton, setSelectedButton] = useState(2);
    const [totalFoundations, setTotalFoundations] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error, count } = await supabase
                    .from('foundations')
                    .select('*', { count: 'exact' })
                    .eq('type', selectedButton === 2 ? 'organization' : selectedButton === 1 ? 'foundation' : 'local');
                if (error) {
                    console.error('Error fetching foundations:', error.message);
                } else {
                    setTotalFoundations(count);
                }
            } catch (error) {
                console.error('Error fetching foundations:', error.message);
            }
        };

        fetchData();
    }, [selectedButton]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase
                    .from('foundations')
                    .select('*')
                    .range((currentPage - 1) * foundationsPerPage, currentPage * foundationsPerPage)
                    .eq('type', selectedButton === 2 ? 'organization' : selectedButton === 1 ? 'foundation' : 'local');
                if (error) {
                    console.error('Error fetching foundations:', error.message);
                } else {
                    setFoundations(data);
                }
            } catch (error) {
                console.error('Error fetching foundations:', error.message);
            }
        };

        fetchData();
    }, [currentPage, selectedButton]);

    const handlePageContentChange = async (type, buttonNumber) => {
        setSelectedButton(buttonNumber);
        setCurrentPage(1);
        try {
            const { data, error } = await supabase
                .from('foundations')
                .select('*')
                .range(0, foundationsPerPage)
                .eq('type', type);
            if (error) {
                console.error('Error fetching foundations:', error.message);
            } else {
                setFoundations(data);
            }
        } catch (error) {
            console.error('Error fetching foundations:', error.message);
        }
    };

    const totalPages = Math.ceil(totalFoundations / foundationsPerPage);

    return (
        <Element name="foundations-section">
            <section className="fundacion-container">
                <div className="top-column">
                    <h1 className="section-title">
                        Komu pomagamy?
                    </h1>
                    <div className="fundacion-img">
                        <img alt="" src={image1} className="fundacion-image" />
                    </div>
                    <div className="section-buttons">
                        <button className={`section-button ${selectedButton === 1 ? 'selected' : ''}`} onClick={() => handlePageContentChange('foundation', 1)}>Fundacjom</button>
                        <button className={`section-button ${selectedButton === 2 ? 'selected' : ''}`} onClick={() => handlePageContentChange('organization', 2)}>Organizacjom pozarządowym</button>
                        <button className={`section-button ${selectedButton === 3 ? 'selected' : ''}`} onClick={() => handlePageContentChange('local', 3)}>Lokalnym zbiórkom</button>
                    </div>
                    <p className="section-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                </div>
                <div >
                    <div className="bottom-column">
                        {foundations.map((foundation) => (
                            <div key={foundation.id} className="org-card">
                                <div className="org-card-content">
                                    <h3>{foundation.name}</h3>
                                    <p className="objective">{foundation.objective}</p>
                                </div>
                                <div className="org-card-icons">{foundation.needs}</div>
                            </div>
                        ))}
                    </div>
                    <div className="page-buttons">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                className={`page-button ${currentPage === index + 1 ? 'selected' : ''}`}
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </Element>
    );
}