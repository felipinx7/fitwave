import React from "react";
import { SectionMain } from "./Sections/SectionMain/SectionMain";
import { SectionBeneficio } from "./Sections/SectionBeneficio/SectionBeneficio";
import { SectionPlanos } from "./Sections/SectionPlanos/SectionPlanos";
import { SectionInstalacao } from "./Sections/SectionInstalação/SectionInstalacao";
import { SectionCadastro } from "./Sections/SectionCadastro/SectionCadastro";
import { Footer } from "./Sections/Footer/Footer";

export const HomePage: React.FC = () =>{
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