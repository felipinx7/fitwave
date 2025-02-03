import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { LoginInfo } from "../pages/LoginInfo";
import { SectionSexo } from "../pages/CadastroCorpo/Sections/SectionSexo/Cadastrosexo";
import { SectionCorpo } from "../pages/CadastroCorpo";
import { SectionParteCorpoFocar } from "../pages/CadastroCorpo/Sections/SectionParteCorpoFocar/SectionParteCorpoFocar";
import { SectionObjetivos } from "../pages/CadastroCorpo/Sections/SectionObetivo/SectionObjetivo";
import { SectionDiasSemana } from "../pages/CadastroCorpo/Sections/SectionDiasSemana/SectionDiasSemana";
import { SectionPesoAltura } from "../pages/CadastroCorpo/Sections/SectionPesoAltura/SectionPesoAltura";
import { SectionPlanoPronto } from "../pages/CadastroCorpo/Sections/SectionPlanoPronto/SectionPlanoPronto";
import { SectionDiaPagamento } from "../pages/CadastroCorpo/Sections/SectionDiaPagamento/SectionDiaPagamento";
import { SectionCadastroFinalizado } from "../pages/CadastroCorpo/Sections/SectionCadastroFinalizado/SectionCadastroFinalizado";
import { SectionTelaCarregamento } from "../pages/CadastroCorpo/Sections/TelaDeCarregamento/TelaDeCarregamento";
import { PageAdministradora } from "../pages/PageAdministrador";
import Checkbox from "../components/texte/texte";
import { SectionCliente } from "../pages/PageAdministrador/Sections/SectionClientes/SectionClientes";
import { SectionColaboradores } from "../pages/PageAdministrador/Sections/SectionColaboradores/SectionColaboradores";
import { PagePersonal } from "../pages/PagePersonal";
import { PageCliente } from "../pages/PageCliente";
import { SectionNovosClientes } from "../pages/PageAdministrador/Sections/SectionNovosClientes/SectionNovosClientes";

export const Routes = () => {
  const [formData, setFormData] = useState({
    sexo: "",
  });

  const handleSexChange = (sexo: string) => {
    setFormData((prev) => ({
      ...prev,
      sexo,
    }));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "loginInfo",
      element: <LoginInfo />,
    },
    {
      path: "telaCarregamento",
      element: <SectionTelaCarregamento />,
    },
    {
      path: "CadastroCorpo",
      element: <SectionCorpo />,
    },
    {
      path: "sexo",
      element: (
        <SectionSexo formData={formData} onSexChange={handleSexChange} />
      ),
    },
    {
      path: "focoMuscular",
      element: <SectionParteCorpoFocar />,
    },
    {
      path: "Objetivos",
      element: <SectionObjetivos />,
    },
    {
      path: "treinoDiaSemana",
      element: <SectionDiasSemana />,
    },
    {
      path: "pesoAltura",
      element: <SectionPesoAltura />,
    },
    {
      path: "diaPagamento",
      element: <SectionDiaPagamento />,
    },
    {
      path: "FinalizarCadastro",
      element: <SectionCadastroFinalizado />,
    },

    {
      path: "PageAdmin",
      element: <PageAdministradora />,
    },
    {
      path: "teste",
      element: <Checkbox />,
    },
    {
      path: "Cliente",
      element: <SectionCliente />,
    },
    {
      path: "Colaborador",
      element: <SectionColaboradores />,
    },
    {
      path: "PagePersonal",
      element: <PagePersonal />,
    },
    {
      path: "PageAluno",
      element: <PageCliente />,
    },
    {
      path: "NovosClientes",
      element: <SectionNovosClientes />,
    },
  ]);

  return <RouterProvider router={router} />;
};
