import React, { useEffect, useState } from "react";
import { SectionMain } from "./Sections/SectionMain/SectionMain";
import { SectionBeneficio } from "./Sections/SectionBeneficio/SectionBeneficio";
import { SectionPlanos } from "./Sections/SectionPlanos/SectionPlanos";
import { SectionInstalacao } from "./Sections/SectionInstalação/SectionInstalacao";
import { SectionCadastro } from "./Sections/SectionCadastro/SectionCadastro";
import { Footer } from "./Sections/Footer/Footer";
import axios from "axios"

export const HomePage: React.FC = () =>{
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHome = async () => {
            try {
                const response = await axios.get("http://localhost3000");
                setLoading(false);
            } catch (error) {
                setLoading(false)
            }
        };

        fetchHome();
    }, []);

    if(loading) return <div>Carregando</div>;

    return(
        <>
        <SectionMain/>
        <SectionBeneficio/>
        <SectionPlanos/>
        <SectionInstalacao/>
        <SectionCadastro/>
        <Footer/>
        </>
    )
}