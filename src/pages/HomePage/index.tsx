import React from "react";
import { SectionMain } from "./Sections/SectionMain/SectionMain";
import { SectionBeneficio } from "./Sections/SectionBeneficio/SectionBeneficio";

export const HomePage: React.FC = () =>{
    return(
        <>
        <SectionMain/>
        <SectionBeneficio/>
        </>
    )
}