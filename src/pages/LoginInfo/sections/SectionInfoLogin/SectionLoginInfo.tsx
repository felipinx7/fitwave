import React, { useRef, useState } from "react";
import * as S from "./styles";
import { FaUserCircle, FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const SectionInfoLogin: React.FC = () => {
  const [foto, setFoto] = useState<string | null>(null);
  const inputFotoRef = useRef<HTMLInputElement>(null);
  const [nome, setnome] = useState("");
  const [sobrenome, setsobrenome] = useState("");

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFoto(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const navigate = useNavigate()

  const linkCadastroCorpo = () =>{
    navigate("/CadastroCorpo")
  }

  return (
    <S.SectionLoginInfo>
      <S.FormInfoLogin>
        <S.ContainerInfoPrincipais>
          <S.TextoInfoDados>Informe seus dados</S.TextoInfoDados>
          <S.ContainerInputFoto onClick={() => inputFotoRef.current?.click()}>
            <S.InputFoto
              ref={inputFotoRef}
              type="file"
              accept="image/*"
              onChange={handleFotoChange}
              style={{ display: "none" }}
            />
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
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
              <FaCamera
                size={20}
                color="#000"
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  background: "white",
                  borderRadius: "50%",
                  padding: "2px",
                }}
                onClick={() => inputFotoRef.current?.click()}
              />
            </div>
          </S.ContainerInputFoto>

          <S.ContainerCamera onClick={() => inputFotoRef.current?.click()}>
            <S.IconeCamera>
              <FaCamera />
            </S.IconeCamera>
          </S.ContainerCamera>
          <S.TextoFotoPerfil>Foto Perfil</S.TextoFotoPerfil>
        </S.ContainerInfoPrincipais>

        <S.ContainerInfoInputs>
          <S.LabelInput>Nome</S.LabelInput>
          <S.InputLogin
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setnome(e.target.value)}
            required
          />

          <S.LabelInput>Sobrenome</S.LabelInput>
          <S.InputLogin
            type="text"
            placeholder="Digite seu sobrenome"
            required
            onChange={(e) => setsobrenome(e.target.value)}
            value={sobrenome}
          />
          <S.ContainerButton>
            <S.ButtonProsseguir type="submit" onClick={linkCadastroCorpo}>Prosseguir</S.ButtonProsseguir>
          </S.ContainerButton>
        </S.ContainerInfoInputs>
      </S.FormInfoLogin>
    </S.SectionLoginInfo>
  );
};
