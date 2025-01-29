import { GoHomeFill } from "react-icons/go";
import { FaDumbbell } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { IoIosPaper } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

export const LinkSideBarsPersonal = [
  { nome: "Home", id: "Home", icone: GoHomeFill, param: 1 },
  { nome: "Treinos", id: "Treinos", icone: FaDumbbell, param: 2 },
  { nome: "Alunos", id: "Alunos", icone: FaUser, param: 3 },
  { nome: "Relatorio", id: "Relatorio", icone: IoIosPaper, param: 4 },
  { nome: "Perfil", id: "Perfil", icone: FaRegUserCircle, param: 5 },
];

export const LinkSideBarsCliente = [
  { nome: "Home", id: "Home" },
  { nome: "Treinos", id: "Treinos" },
  { nome: "Notificação", id: "Notificacao" },
  { nome: "Perfil", id: "Perfil" },
];

export const LinksButtonFiltro = [
  { nome: "Todas", param: 1 },
  { nome: "Alunos", param: 2 },
  { nome: "Desempenho", param: 3 },
];

export const AlunosDestaques = [
  {
    nome: "Marina Oliveira",
    email: "mariaoliveira@gmail.com",
  },
  {
    nome: "Lucas Almeida",
    email: "lucasalmeida@gmail.com",
  },
  {
    nome: "Isabela Fernandes",
    email: "isabelafernandes@gmail.com",
  },
  {
    nome: "Rafael Costa",
    email: "rafaelcosta@gmail.com",
  },
  {
    nome: "Marina Oliveira",
    email: "mariaoliveira@gmail.com",
  },
  {
    nome: "Lucas Almeida",
    email: "lucasalmeida@gmail.com",
  },
  {
    nome: "Isabela Fernandes",
    email: "isabelafernandes@gmail.com",
  },
  {
    nome: "Rafael Costa",
    email: "rafaelcosta@gmail.com",
  },
];

export const AlunosNovos = [
  {
    nome: "Marina Oliveira",
    email: "mariaoliveira@gmail.com",
  },
  {
    nome: "Lucas Almeida",
    email: "lucasalmeida@gmail.com",
  },
  {
    nome: "Marina Oliveira",
    email: "mariaoliveira@gmail.com",
  },
  {
    nome: "Lucas Almeida",
    email: "lucasalmeida@gmail.com",
  },
];

export const Treinos = [
  // Cardio
  {
    id: 1,
    nome: "Corrida",
    img: "url_da_imagem_corrida.jpg",
    categoria: "Cardio",
    tipo: "Cardio",
    descricao: "Corra em ritmo moderado por um tempo contínuo.",
    repeticoes: 1,
    execucoesPorRepeticao: 20,
    intervalo: 0,
    duracao: "20min",
    nivel: "Iniciante",
  },
  {
    id: 2,
    nome: "Bicicleta Ergométrica",
    img: "url_da_imagem_bicicleta.jpg",
    categoria: "Cardio",
    tipo: "Cardio",
    descricao: "Pedale por um tempo contínuo em um ritmo moderado.",
    repeticoes: 1,
    execucoesPorRepeticao: 20,
    intervalo: 0,
    duracao: "20min",
    nivel: "Iniciante",
  },
  
  // Glúteos
  {
    id: 3,
    nome: "Agachamento com barra",
    img: "url_da_imagem_agachamentocombarra.jpg",
    categoria: "Glúteos",
    tipo: "Força",
    descricao:
      "Posicione a barra sobre os ombros e agache até os quadris ficarem paralelos ao chão.",
    repeticoes: 4,
    execucoesPorRepeticao: 12,
    intervalo: 45,
    duracao: "40s",
    nivel: "Intermediário",
  },
  {
    id: 4,
    nome: "Afundo",
    img: "url_da_imagem_afundo.jpg",
    categoria: "Glúteos",
    tipo: "Força",
    descricao:
      "Dê um passo à frente e abaixe o joelho da perna de trás em direção ao chão.",
    repeticoes: 3,
    execucoesPorRepeticao: 12,
    intervalo: 30,
    duracao: "30s",
    nivel: "Intermediário",
  },
  // Pernas
  {
    id: 5,
    nome: "Agachamento Livre",
    img: "url_da_imagem_agachamentolivre.jpg",
    categoria: "Pernas",
    tipo: "Força",
    descricao: "Agache mantendo a coluna reta e os pés alinhados aos ombros.",
    repeticoes: 4,
    execucoesPorRepeticao: 12,
    intervalo: 45,
    duracao: "40s",
    nivel: "Iniciante",
  },
  {
    id: 6,
    nome: "Leg Press",
    img: "url_da_imagem_legpress.jpg",
    categoria: "Pernas",
    tipo: "Força",
    descricao:
      "Empurre a plataforma do leg press com os pés na largura dos ombros.",
    repeticoes: 4,
    execucoesPorRepeticao: 12,
    intervalo: 40,
    duracao: "35s",
    nivel: "Intermediário",
  },
  // Costas
  {
    id: 7,
    nome: "Puxada Frontal",
    img: "url_da_imagem_puxadafrontal.jpg",
    categoria: "Costas",
    tipo: "Força",
    descricao:
      "Segure a barra com pegada aberta e puxe em direção ao peitoral.",
    repeticoes: 4,
    execucoesPorRepeticao: 12,
    intervalo: 45,
    duracao: "40s",
    nivel: "Intermediário",
  },
  {
    id: 8,
    nome: "Remada Curvada",
    img: "url_da_imagem_remadacurvada.jpg",
    categoria: "Costas",
    tipo: "Força",
    descricao:
      "Com um halter em cada mão, incline o tronco e puxe os pesos em direção ao abdômen.",
    repeticoes: 4,
    execucoesPorRepeticao: 12,
    intervalo: 40,
    duracao: "35s",
    nivel: "Intermediário",
  },
  // Peitoral
  {
    id: 9,
    nome: "Supino Reto",
    img: "url_da_imagem_supinoreto.jpg",
    categoria: "Peitoral",
    tipo: "Força",
    descricao:
      "Deite-se no banco e empurre a barra para cima até estender os braços.",
    repeticoes: 4,
    execucoesPorRepeticao: 12,
    intervalo: 45,
    duracao: "40s",
    nivel: "Intermediário",
  },
  {
    id: 10,
    nome: "Supino Inclinado",
    img: "url_da_imagem_supinoinclinado.jpg",
    categoria: "Peitoral",
    tipo: "Força",
    descricao: "Deite-se no banco inclinado e empurre a barra para cima.",
    repeticoes: 4,
    execucoesPorRepeticao: 12,
    intervalo: 45,
    duracao: "40s",
    nivel: "Intermediário",
  },
];

export const linksButtonSelected = [
  { nome: "Cardio", param: 1 },
  { nome: "Glúteos", param: 2 },
  { nome: "Pernas", param: 3 },
  { nome: "Costas", param: 4 },
  { nome: "Peitoral", param: 5 },
];
