import React from "react";
import * as S from "./styles";
import { HaederPageAdmin } from "../../../../components/HeaderPageAdmin/HeaderPageAdmin";
import { SectionColaboradores } from "../SectionColaboradores/SectionColaboradores";

export const SectionPersonal: React.FC = () => {
  return (
    <>
      <S.SectionPersonal>
      <HaederPageAdmin/>
      <SectionColaboradores/>
      </S.SectionPersonal>
    </>
  );
};
