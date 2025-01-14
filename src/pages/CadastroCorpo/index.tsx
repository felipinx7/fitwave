import React, { useState } from "react";
import { SectionSexo } from "./Sections/SectionSexo/Cadastrosexo";

export const SectionCorpo: React.FC = () => {
  const [formData, setFormData] = useState({
    sexo: "",
    focomuscular: "",
    objetivo: "",
  });

  // Funções que atualiza o estado do formulário
  const handleSexChange = (sexo: string) => {
    setFormData((prev) => ({
      ...prev,
      sexo,
    }));
  };
  const handleFocusChange = (focomuscular: string) => {
    setFormData((prev) => ({
      ...prev,
      focomuscular,
    }));
  };
  const handleobjetivoChange = (objetivo: string) => {
    setFormData((prev) => ({
      ...prev,
      objetivo,
    }));
  };

  return (
    <>
      {" "}
      <SectionSexo formData={formData} onSexChange={handleSexChange} />
    </>
  );
};
