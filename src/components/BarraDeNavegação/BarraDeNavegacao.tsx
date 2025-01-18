import React, { useRef, useState } from "react";
import * as S from "./styles";
import { FaBars } from "react-icons/fa6";
import { FaBell, FaUserCircle, FaCamera } from "react-icons/fa";
import { IconType } from "react-icons";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { FaDumbbell } from "react-icons/fa6";

interface BarraDeNavegacaoProps {
  TextoBotao: string;
  IconeTipoUser: IconType;
  TextTipoUser: string;
  ExibirSeta: boolean;
  ShowOpcaoTroca?: boolean;
  handleShowOpcaoTroca?: () => void;
  ExibirFormCliente: boolean;
  ExibirFormColaborador: boolean;
  SectionAtual: string;
  handleAdicionarClasse: () => void;
  AdicionarCLasse: boolean;
  handleFilter?: () => void;
  ValorNotificacao: number,
  handleShowContainer: () => void;
}

export const BarraDeNavegacao: React.FC<BarraDeNavegacaoProps> = (props) => {
  // Estados para controle da navegação
  const [infoQuadrado, setInfoQuadrado] = useState({
    icone: FaDumbbell,
    texto: "Personal",
  });
  const [infoTipoUser, setInfoTipoUser] = useState({
    icone: props.IconeTipoUser,
    texto: props.TextTipoUser,
  });
  const [clickContainerBarras, setClickContainerBarras] = useState(false);
  const [clickContainerSino, setClickContainerSino] = useState(false);
  const [selectedCheckbox, setSelectedCheckbox] = useState<number | null>(null);
  const [ShowFiltros, setShowFiltros] = useState(false);
  const [ShowOpcaoTroca, setShowOpcaoTroca] = useState(false);
  const [foto, setFoto] = useState<string | null>(null);
  const inputFotoRef = useRef<HTMLInputElement>(null);

  // Funções de manipulação de eventos
  const handleCheckedInput = (index: number) => {
    setSelectedCheckbox(selectedCheckbox === index ? null : index);
  };

  const handleClickContainerBarras = () => {
    setClickContainerBarras((prev) => !prev);
    setClickContainerSino(false);
    setShowFiltros((prev) => !prev);
  };

  const handleClickContainerSino = () => {
    setClickContainerSino((prev) => !prev);
    props.handleShowContainer()
  };

  const aplicarMascaraTelefone = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const valor = input.value.replace(/\D/g, "");

    const formatado = valor
      .replace(/^(\d{2})(\d)/, "($1)$2")
      .replace(/(\d{4})(\d)/, "$1-$2");

    input.value = formatado.substring(0, 14);
  };

  const handleContainerClick = () => {
    if (infoQuadrado.texto === "Personal") {
      setInfoQuadrado({
        icone: infoTipoUser.icone,
        texto: infoTipoUser.texto,
      });
      setInfoTipoUser({
        icone: FaDumbbell,
        texto: "Personal",
      });
    } else {
      setInfoQuadrado({
        icone: FaDumbbell,
        texto: "Personal",
      });
      setInfoTipoUser({
        icone: infoQuadrado.icone,
        texto: infoQuadrado.texto,
      });
    }
    setShowOpcaoTroca((prev) => prev);
  };

  return (
    <S.DivNavegacao className={props.AdicionarCLasse ? "active" : ""}>
      <S.CardColaboradorECliente
        className={props.AdicionarCLasse ? "active" : ""}
      >
        <S.DivsTextoESeta>
          <MdOutlineArrowBackIos
            onClick={() => props.handleAdicionarClasse()}
          />
          <S.TextNovoColaborador>
            Novo {props.SectionAtual}
          </S.TextNovoColaborador>
        </S.DivsTextoESeta>
        <S.ContainerInputFoto onClick={() => inputFotoRef.current?.click()}>
          <S.InputFoto
            ref={inputFotoRef}
            type="file"
            accept="image/*"
            required
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => setFoto(reader.result as string);
                reader.readAsDataURL(file);
              }
            }}
            style={{ display: "none" }}
          />
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            {foto ? (
              <img
                src={foto}
                alt="Foto de perfil"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                  display: "block",
                }}
              />
            ) : (
              <FaUserCircle
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                  color: "#525252",
                }}
              />
            )}
          </div>
          <S.ContainerCamera onClick={() => inputFotoRef.current?.click()}>
            <S.IconeCamera>
              <FaCamera />
            </S.IconeCamera>
          </S.ContainerCamera>
          <S.TextFotoPerfil>Foto Perfil</S.TextFotoPerfil>
        </S.ContainerInputFoto>
        {/* Formulário Do Cliente */}
        {props.ExibirFormCliente && (
          <S.FormCliente SwhoInputTipo={props.ExibirFormCliente}>
            <S.containerParaFormCliente>
              <S.LabelContainerCard>Nome:</S.LabelContainerCard>
              <S.InputCardInfo type="text" placeholder="Digite aqui" required />
            </S.containerParaFormCliente>
            <S.containerParaFormCliente>
              <S.LabelContainerCard>Sobrenome:</S.LabelContainerCard>
              <S.InputCardInfo type="text" placeholder="Digite aqui" required />
            </S.containerParaFormCliente>
            <S.containerParaFormCliente>
              <S.LabelContainerCard>email:</S.LabelContainerCard>
              <S.InputCardInfo
                type="email"
                placeholder="Digite aqui"
                required
              />
            </S.containerParaFormCliente>
            <S.containerParaFormCliente>
              <S.LabelContainerCard>Senha:</S.LabelContainerCard>
              <S.InputCardInfo
                type="password"
                placeholder="Digite aqui"
                required
                minLength={8}
              />
            </S.containerParaFormCliente>
            <S.containerParaFormCliente>
              <S.LabelContainerCard>Dia do Pagamento:</S.LabelContainerCard>
              <S.InputCardInfo
                type="number"
                min={1}
                max={28}
                placeholder="Digite aqui"
                required
              />
            </S.containerParaFormCliente>
            <S.containerParaFormCliente>
              <S.LabelContainerCard>Sexo:</S.LabelContainerCard>
              <S.SelectCardInfo required>
                <option value="" disabled selected>
                  Selecione uma opção
                </option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
              </S.SelectCardInfo>
            </S.containerParaFormCliente>
            <S.containerParaFormCliente>
              <S.LabelContainerCard>Área de Foco:</S.LabelContainerCard>
              <S.SelectCardInfo required>
                <option value="" disabled selected>
                  Selecione uma opção
                </option>
                <option value="corpo_todo">Corpo Todo</option>
                <option value="braco">Braço</option>
                <option value="peito">Peito</option>
                <option value="abdomen">Abdômen</option>
                <option value="perna">Perna</option>
              </S.SelectCardInfo>
            </S.containerParaFormCliente>
            <S.containerParaFormCliente>
              <S.LabelContainerCard>Objetivo:</S.LabelContainerCard>
              <S.SelectCardInfo required>
                <option value="" disabled selected>
                  Selecione uma opção
                </option>
                <option value="perder_peso">Perder Peso</option>
                <option value="aumentar_musculos">Aumentar Músculos</option>
                <option value="manter_forma">Manter a Forma</option>
              </S.SelectCardInfo>
            </S.containerParaFormCliente>
            <S.containerParaFormCliente>
              <S.LabelContainerCard>Categoria:</S.LabelContainerCard>
              <S.SelectCardInfo required>
                <option value="" disabled selected>
                  Selecione uma opção
                </option>
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
              </S.SelectCardInfo>
            </S.containerParaFormCliente>
            <S.containerParaFormCliente>
              <S.LabelContainerCard>Treinos Semanal:</S.LabelContainerCard>
              <S.InputCardInfo
                type="number"
                maxLength={7}
                placeholder="Digite aqui"
                required
              />
            </S.containerParaFormCliente>
            <S.containerParaFormCliente>
              <S.LabelContainerCard>Peso:</S.LabelContainerCard>
              <S.InputCardInfo
                type="number"
                min={20}
                max={200}
                placeholder="Digite aqui"
                required
              />
            </S.containerParaFormCliente>
            <S.containerParaFormCliente>
              <S.LabelContainerCard>Altura:</S.LabelContainerCard>
              <S.InputCardInfo
                type="number"
                placeholder="Digite aqui (cm ou m)"
                min="1.1"
                max="300"
                step="0.1"
                required
              />
            </S.containerParaFormCliente>
            <S.ButtonEnviarInfoCard type="submit">Criar</S.ButtonEnviarInfoCard>
          </S.FormCliente>
        )}
        {/* Formulário Do Colaborador */}
        {props.ExibirFormColaborador && (
          <S.FormColaborador SwhoInputTipo={props.ExibirFormColaborador}>
            {/* Formulario do Colaborador  */}
            <S.ContainerParaInputCard>
              <S.LabelContainerCard>Nome:</S.LabelContainerCard>
              <S.InputCardInfo type="text" placeholder="Digite aqui" required />
            </S.ContainerParaInputCard>
            <S.ContainerParaInputCard>
              <S.LabelContainerCard>Sobrenome:</S.LabelContainerCard>
              <S.InputCardInfo type="text" placeholder="Digite aqui" required />
            </S.ContainerParaInputCard>
            <S.ContainerParaInputCard>
              <S.LabelContainerCard>Email:</S.LabelContainerCard>
              <S.InputCardInfo
                type="email"
                placeholder="Digite aqui"
                required
              />
            </S.ContainerParaInputCard>
            <S.ContainerParaInputCard>
              <S.LabelContainerCard>Categoria:</S.LabelContainerCard>
              <S.SelectCardInfo required>
                <option value="" disabled selected>
                  Selecione uma opção
                </option>
                <option value="administrador">Administrador</option>
                <option value="personal">Personal</option>
              </S.SelectCardInfo>
            </S.ContainerParaInputCard>

            <S.ContainerParaInputCard>
              <S.LabelContainerCard>Telefone:</S.LabelContainerCard>
              <S.InputCardInfo
                type="tel"
                placeholder="(__)____-____"
                onInput={aplicarMascaraTelefone}
                maxLength={14}
                required
              />
            </S.ContainerParaInputCard>
            <S.ButtonEnviarInfoCard type="submit">Criar</S.ButtonEnviarInfoCard>
          </S.FormColaborador>
        )}
      </S.CardColaboradorECliente>

      {/* // PARTE BARRA DE NAVEGAÇÃO  */}

      <S.BarraDeNavegacao className={props.AdicionarCLasse ? "active" : ""}>
        <S.ContainerTipoUser>
          <S.ContainerTipo>
            <infoTipoUser.icone />
          </S.ContainerTipo>
          <S.TextTipoUser showArrowDow={props.ExibirSeta}>
            {infoTipoUser.texto}
            {props.ExibirSeta && (
              <MdOutlineKeyboardArrowDown
                onClick={props.handleShowOpcaoTroca}
              />
            )}
          </S.TextTipoUser>

          <S.ContainerGeralCardPersonalAdm
            ShowOpcaoTroca={props.ShowOpcaoTroca ?? false}
          >
            <S.ContainerCardPersonalAdm>
              <S.ContainerQuadrado onClick={handleContainerClick}>
                <infoQuadrado.icone />
              </S.ContainerQuadrado>
              <S.TextPersonalAdm>{infoQuadrado.texto}</S.TextPersonalAdm>
            </S.ContainerCardPersonalAdm>
          </S.ContainerGeralCardPersonalAdm>
        </S.ContainerTipoUser>

        <S.ContainerInfo>
          <S.ContainerBarras
            onClick={handleClickContainerBarras}
            clickContainerBarras={clickContainerBarras}
          >
            <FaBars />
          </S.ContainerBarras>

          <S.ContainerSino
            onClick={handleClickContainerSino}
            clickContainer={clickContainerSino}
            
          >
            <FaBell />
            <S.ValorDeNotificacaoSino>
              <S.ValorNotificacao>{props.ValorNotificacao}+</S.ValorNotificacao>
            </S.ValorDeNotificacaoSino>
          </S.ContainerSino>

          <S.ContainerFiltro
            ShowFiltros={ShowFiltros}
            onClick={handleClickContainerBarras}
          >
            Filtrar Por:
            <S.containerInputsFiltros>
              <S.LabelInputsFiltros>
                Ativo
                <S.FiltroInput
                  checked={selectedCheckbox === 0}
                  onChange={() => handleCheckedInput(0)}
                  type="checkbox"
                />
                <S.checkmark />
              </S.LabelInputsFiltros>
              <S.LabelInputsFiltros>
                Ordem Alfabética
                <S.FiltroInput
                  checked={selectedCheckbox === 1}
                  onChange={() => handleCheckedInput(1)}
                  type="checkbox"
                />
                <S.checkmark />
              </S.LabelInputsFiltros>
              <S.LabelInputsFiltros>
                Últimas semanas
                <S.FiltroInput
                  checked={selectedCheckbox === 2}
                  onChange={() => handleCheckedInput(2)}
                  type="checkbox"
                />
                <S.checkmark />
              </S.LabelInputsFiltros>
              <S.LabelInputsFiltros>
                Últimos 3 meses
                <S.FiltroInput
                  checked={selectedCheckbox === 3}
                  onChange={() => handleCheckedInput(3)}
                  type="checkbox"
                />
                <S.checkmark />
              </S.LabelInputsFiltros>
            </S.containerInputsFiltros>
            <button onClick={props.handleFilter}>han</button>
          </S.ContainerFiltro>

          <S.ButtonColaborador onClick={props.handleAdicionarClasse}>
            + {props.TextoBotao}
          </S.ButtonColaborador>
        </S.ContainerInfo>
      </S.BarraDeNavegacao>
    </S.DivNavegacao>
  );
};
