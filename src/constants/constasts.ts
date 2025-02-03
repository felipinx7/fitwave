import { GoHomeFill } from "react-icons/go";
import { FaDumbbell } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { IoIosPaper } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";

export const LinkSideBarsPersonal = [
  { nome: "Home", id: "Home", icone: GoHomeFill, param: 1 },
  { nome: "Treinos", id: "Treinos", icone: FaDumbbell, param: 2 },
  { nome: "Alunos", id: "Alunos", icone: FaUser, param: 3 },
  { nome: "Relatorio", id: "Relatorio", icone: IoIosPaper, param: 4 },
  { nome: "Perfil", id: "Perfil", icone: FaRegUserCircle, param: 5 },
  { nome: "Status", id: "Status", icone: FaCalendarCheck, param: 6 },
];

export const LinksSideBarsNavegacao = [
  { nome: "Home", id: "Home", icone: GoHomeFill, param: 1 },
  { nome: "Treinos", id: "Treinos", icone: FaDumbbell, param: 2 },
  { nome: "Notiificação", id: "Notificacao", icone: FaBell, param: 3 },
  { nome: "Perfil", id: "Perfil", icone: FaRegUserCircle, param: 4 },
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

export const PessoasParaCompartilhar = [
  {
    id: 1,
    nome: "Felipe",
    sobrenome: "Lima",
    email: "flimalimafelipek@gmail.com",
    imagem: "utrç",
  },
  {
    id: 2,
    nome: "Ana",
    sobrenome: "Silva",
    email: "ana.silva@example.com",
    imagem: "utrç",
  },
  {
    id: 3,
    nome: "Carlos",
    sobrenome: "Santos",
    email: "carlos.santos@example.com",
    imagem: "utrç",
  },
  {
    id: 4,
    nome: "Mariana",
    sobrenome: "Oliveira",
    email: "mariana.oliveira@example.com",
    imagem: "utrç",
  },
  {
    id: 5,
    nome: "João",
    sobrenome: "Souza",
    email: "joao.souza@example.com",
    imagem: "utrç",
  },
];

const generateRandomPassword = (length: number): string => {
  const charset = "0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

export const usuariosClientes = [
  {
    id: 1,
    nome: "Felipe",
    sobrenome: "Lima",
    email: "felipe.lima@email.com",
    telefone: "(11) 98765-4321",
    senha: generateRandomPassword(8), // Senha aleatória
    categoria: "intermediario",
  },
  {
    id: 2,
    nome: "Lucas",
    sobrenome: "Silva",
    email: "lucas.silva@email.com",
    telefone: "(21) 91234-5678",
    senha: generateRandomPassword(8), // Senha aleatória
    categoria: "iniciante",
  },
  {
    id: 3,
    nome: "Mariana",
    sobrenome: "Souza",
    email: "mariana.souza@email.com",
    telefone: "(31) 99876-5432",
    senha: generateRandomPassword(8), // Senha aleatória
    categoria: "avancado",
  },
  {
    id: 4,
    nome: "Carlos",
    sobrenome: "Oliveira",
    email: "carlos.oliveira@email.com",
    telefone: "(41) 93456-7890",
    senha: generateRandomPassword(8), // Senha aleatória
    categoria: "intermediario",
  },
  {
    id: 5,
    nome: "Ana",
    sobrenome: "Pereira",
    email: "ana.pereira@email.com",
    telefone: "(51) 94567-1234",
    senha: generateRandomPassword(8), // Senha aleatória
    categoria: "iniciante",
  },
  {
    id: 6,
    nome: "Roberto",
    sobrenome: "Ferreira",
    email: "roberto.ferreira@email.com",
    telefone: "(61) 95678-2345",
    senha: generateRandomPassword(8), // Senha aleatória
    categoria: "avancado",
  },
  {
    id: 7,
    nome: "Juliana",
    sobrenome: "Costa",
    email: "juliana.costa@email.com",
    telefone: "(71) 96789-3456",
    senha: generateRandomPassword(8), // Senha aleatória
    categoria: "intermediario",
  },
  {
    id: 8,
    nome: "Bruno",
    sobrenome: "Rodrigues",
    email: "bruno.rodrigues@email.com",
    telefone: "(81) 97890-4567",
    senha: generateRandomPassword(8), // Senha aleatória
    categoria: "iniciante",
  },
  {
    id: 9,
    nome: "Gabriela",
    sobrenome: "Martins",
    email: "gabriela.martins@email.com",
    telefone: "(91) 98901-5678",
    senha: generateRandomPassword(8), // Senha aleatória
    categoria: "intermediario",
  },
  {
    id: 10,
    nome: "Ricardo",
    sobrenome: "Almeida",
    email: "ricardo.almeida@email.com",
    telefone: "(31) 99012-6789",
    senha: generateRandomPassword(8), // Senha aleatória
    categoria: "avancado",
  },
  {
    id: 11,
    nome: "Fernanda",
    sobrenome: "Lopes",
    email: "fernanda.lopes@email.com",
    telefone: "(32) 91234-5678",
    senha: generateRandomPassword(8), // Senha aleatória
    categoria: "iniciante",
  },
  {
    id: 12,
    nome: "Gustavo",
    sobrenome: "Ribeiro",
    email: "gustavo.ribeiro@email.com",
    telefone: "(33) 92345-6789",
    senha: generateRandomPassword(8), // Senha aleatória
    categoria: "intermediario",
  },
  {
    id: 13,
    nome: "Isabela",
    sobrenome: "Carvalho",
    email: "isabela.carvalho@email.com",
    telefone: "(34) 93456-7890",
    senha: generateRandomPassword(8), // Senha aleatória
    categoria: "avancado",
  },
  {
    id: 14,
    nome: "Vinícius",
    sobrenome: "Santos",
    email: "vinicius.santos@email.com",
    telefone: "(35) 94567-8901",
    senha: generateRandomPassword(8), // Senha aleatória
    categoria: "iniciante",
  },
  {
    id: 15,
    nome: "Amanda",
    sobrenome: "Mendes",
    email: "amanda.mendes@email.com",
    telefone: "(36) 95678-9012",
    senha: generateRandomPassword(8), // Senha aleatória
    categoria: "intermediario",
  },
  {
    id: 16,
    nome: "Thiago",
    sobrenome: "Gomes",
    email: "thiago.gomes@email.com",
    telefone: "(37) 96789-0123",
    senha: generateRandomPassword(8), // Senha aleatória
    categoria: "avancado",
  },
  {
    id: 17,
    nome: "Renata",
    sobrenome: "Barros",
    email: "renata.barros@email.com",
    telefone: "(38) 97890-1234",
    senha: generateRandomPassword(8), // Senha aleatória
    categoria: "iniciante",
  },
  {
    id: 18,
    nome: "Eduardo",
    sobrenome: "Nunes",
    email: "eduardo.nunes@email.com",
    telefone: "(39) 98901-2345",
    senha: generateRandomPassword(8), // Senha aleatória
    categoria: "intermediario",
  },
  {
    id: 19,
    nome: "Beatriz",
    sobrenome: "Fernandes",
    email: "beatriz.fernandes@email.com",
    telefone: "(40) 99012-3456",
    senha: generateRandomPassword(8), // Senha aleatória
    categoria: "avancado",
  },
  {
    id: 20,
    nome: "Leonardo",
    sobrenome: "Souza",
    email: "leonardo.souza@email.com",
    telefone: "(41) 90123-4567",
    senha: generateRandomPassword(8), // Senha aleatória
    categoria: "intermediario",
  },
];

export const pessoas = [
  {
    nome: "Carlos",
    sobrenome: "Silva",
    email: "exemplo1@gmail.com",
    telefone: "(11) 93141-1476",
    altura: 1.84,
    peso: 97.12,
    imc: 28.83,
    treinos: Array.from({ length: 10 }, (_, i) => ({
      data: `02/0${(i % 5) + 1}/2025`,
      categoria: ["Cardio", "Glúteos", "Pernas", "Costas", "Peitoral"][i % 5],
      caloriasPerdidas: Math.floor(Math.random() * (600 - 300 + 1)) + 300,
      duracao: Math.floor(Math.random() * (90 - 30 + 1)) + 30, // Duração entre 30 e 90 minutos
    })),
  },
  {
    nome: "Fernanda",
    sobrenome: "Oliveira",
    email: "exemplo2@gmail.com",
    telefone: "(11) 91372-9318",
    altura: 1.6,
    peso: 86.87,
    imc: 33.73,
    treinos: Array.from({ length: 10 }, (_, i) => ({
      data: `02/0${(i % 5) + 1}/2025`,
      categoria: ["Cardio", "Glúteos", "Pernas", "Costas", "Peitoral"][i % 5],
      caloriasPerdidas: Math.floor(Math.random() * (600 - 300 + 1)) + 300,
      duracao: Math.floor(Math.random() * (90 - 30 + 1)) + 30,
    })),
  },
  {
    nome: "Lucas",
    sobrenome: "Santos",
    email: "exemplo3@gmail.com",
    telefone: "(11) 97566-3710",
    altura: 1.66,
    peso: 55.43,
    imc: 20.21,
    treinos: Array.from({ length: 10 }, (_, i) => ({
      data: `02/0${(i % 5) + 1}/2025`,
      categoria: ["Cardio", "Glúteos", "Pernas", "Costas", "Peitoral"][i % 5],
      caloriasPerdidas: Math.floor(Math.random() * (600 - 300 + 1)) + 300,
      duracao: Math.floor(Math.random() * (90 - 30 + 1)) + 30,
    })),
  },
  {
    nome: "Ana",
    sobrenome: "Pereira",
    email: "exemplo4@gmail.com",
    telefone: "(11) 91406-1927",
    altura: 1.81,
    peso: 85.61,
    imc: 26.11,
    treinos: Array.from({ length: 10 }, (_, i) => ({
      data: `02/0${(i % 5) + 1}/2025`,
      categoria: ["Cardio", "Glúteos", "Pernas", "Costas", "Peitoral"][i % 5],
      caloriasPerdidas: Math.floor(Math.random() * (600 - 300 + 1)) + 300,
      duracao: Math.floor(Math.random() * (90 - 30 + 1)) + 30,
    })),
  },
  {
    nome: "Roberto",
    sobrenome: "Costa",
    email: "exemplo5@gmail.com",
    telefone: "(11) 95924-9836",
    altura: 1.87,
    peso: 59.52,
    imc: 17.03,
    treinos: Array.from({ length: 10 }, (_, i) => ({
      data: `02/0${(i % 5) + 1}/2025`,
      categoria: ["Cardio", "Glúteos", "Pernas", "Costas", "Peitoral"][i % 5],
      caloriasPerdidas: Math.floor(Math.random() * (600 - 300 + 1)) + 300,
      duracao: Math.floor(Math.random() * (90 - 30 + 1)) + 30,
    })),
  },
];

export const treinosPendentes = [
  {
    nome: "Felipe Lima",
    treino: "Musculação - Peito",
    pendente: true,
    data: "01/09/2023",
  },
  {
    nome: "Amanda Costa",
    treino: "Corrida - 5km",
    pendente: false,
    data: "01/09/2023",
  },
  {
    nome: "Carlos Silva",
    treino: "Yoga - Equilíbrio",
    pendente: true,
    data: "01/09/2023",
  },
  {
    nome: "Juliana Souza",
    treino: "Natação - 30 min",
    pendente: false,
    data: "01/09/2023",
  },
  {
    nome: "Gabriel Oliveira",
    treino: "Treinamento Funcional",
    pendente: true,
    data: "01/09/2023",
  },
];

export const notificacoes = [
  {
    texto: "Olá Felipe, há treinos novos disponíveis! Dá uma olhada.",
    data: "2025-01-30",
  },
  {
    texto:
      "Olá Felipe, você melhorou seu rendimento em 15% nos últimos 15 dias. Parabéns!",
    data: "2025-01-29",
  },
  {
    texto: "Felipe, não se esqueça de concluir seu treino de hoje!",
    data: "2025-01-28",
  },
  {
    texto:
      "Ótimo trabalho, Felipe! Você completou todos os treinos desta semana.",
    data: "2025-01-27",
  },
  {
    texto: "Novo treino liberado! Hora de evoluir ainda mais, Felipe!",
    data: "2025-01-26",
  },
  {
    texto: "Felipe, sua frequência nos treinos está excelente! Continue assim.",
    data: "2025-01-25",
  },
  {
    texto:
      "Seu desempenho está incrível, Felipe! Mais um treino concluído com sucesso.",
    data: "2025-01-24",
  },
  {
    texto:
      "Fique de olho, Felipe! Você está a apenas um treino de bater seu recorde semanal.",
    data: "2025-01-23",
  },
  {
    texto: "Olá Felipe, lembrete: amanhã tem treino novo te esperando!",
    data: "2025-01-22",
  },
  {
    texto: "Felipe, você atingiu 80% da sua meta mensal! Continue no ritmo.",
    data: "2025-01-21",
  },
];

export const ButtonFiltroCliente = [
  { nome: "Treinos Pendentes", param: 1 },
  { nome: "Treinos Concluidos", param: 2 },
];
export const treinosClienteTela = [
  {
    id: 1,
    nome: "Explosão de Cardio",
    personal: "Felipe Lima",
    envio: "25/01/2025",
    pendencia: true,
    duracao: "30 minutos",
    series: "4",
    repeticoes: "Tempo",
    intervalo: "30s",
    descricao: "Treino cardiovascular intenso para queima de gordura.",
  },
  {
    id: 2,
    nome: "Força Total",
    personal: "Mariana Souza",
    envio: "20/01/2025",
    pendencia: false,
    duracao: "45 minutos",
    series: "5",
    repeticoes: "8-10",
    intervalo: "60s",
    descricao: "Levantamento de peso para ganho de força máxima.",
  },
  {
    id: 3,
    nome: "Resistência Extrema",
    personal: "Carlos Mendes",
    envio: "18/01/2025",
    pendencia: true,
    duracao: "40 minutos",
    series: "4",
    repeticoes: "12-15",
    intervalo: "45s",
    descricao: "Foco na resistência muscular com exercícios de alta repetição.",
  },
  {
    id: 4,
    nome: "Definição Muscular",
    personal: "Ana Oliveira",
    envio: "22/01/2025",
    pendencia: false,
    duracao: "50 minutos",
    series: "4",
    repeticoes: "10-12",
    intervalo: "45s",
    descricao: "Treino para tonificação muscular e redução de gordura.",
  },
  {
    id: 5,
    nome: "Treino HIIT Avançado",
    personal: "Lucas Silva",
    envio: "19/01/2025",
    pendencia: true,
    duracao: "25 minutos",
    series: "Circuito",
    repeticoes: "Tempo",
    intervalo: "15s",
    descricao:
      "Treino intervalado de alta intensidade para explosão e condicionamento.",
  },
  {
    id: 6,
    nome: "Mobilidade e Flexibilidade",
    personal: "Beatriz Rocha",
    envio: "24/01/2025",
    pendencia: false,
    duracao: "35 minutos",
    series: "3",
    repeticoes: "Tempo",
    intervalo: "20s",
    descricao: "Exercícios para aumentar a flexibilidade e evitar lesões.",
  },
  {
    id: 7,
    nome: "Core de Aço",
    personal: "Ricardo Alves",
    envio: "21/01/2025",
    pendencia: true,
    duracao: "30 minutos",
    series: "4",
    repeticoes: "15-20",
    intervalo: "30s",
    descricao: "Treino focado no fortalecimento do abdômen e lombar.",
  },
  {
    id: 8,
    nome: "Potência Explosiva",
    personal: "Fernanda Lima",
    envio: "23/01/2025",
    pendencia: false,
    duracao: "40 minutos",
    series: "4",
    repeticoes: "6-8",
    intervalo: "60s",
    descricao: "Treino para aumentar potência muscular e velocidade.",
  },
  {
    id: 9,
    nome: "Treino Funcional",
    personal: "Gustavo Martins",
    envio: "17/01/2025",
    pendencia: true,
    duracao: "45 minutos",
    series: "5",
    repeticoes: "Tempo",
    intervalo: "40s",
    descricao: "Movimentos naturais do corpo para condicionamento geral.",
  },
  {
    id: 10,
    nome: "Condicionamento de Atleta",
    personal: "Juliana Torres",
    envio: "16/01/2025",
    pendencia: false,
    duracao: "50 minutos",
    series: "5",
    repeticoes: "10-12",
    intervalo: "60s",
    descricao: "Treino voltado para resistência, força e velocidade.",
  },
];

export  const NovosUsuarios = [
  {
    nome: "João Silva",
    sobrenome: "Silva",
    email: "joao.silva@example.com",
    dataDePagamento: "2025-01-15",
    data: "2025-01-01",
    areaDeFoco: "Hipertrofia",
    categoria: "Intermediário",
    peso: 75,
    telefone: "(11) 91234-5678",
    senha: "senha123",
    sexo: "Masculino",
    principaisObjetivos: "Ganhar massa muscular",
    treinosSemanais: 5,
    altura: 1.78,
    status: true,
    foto: "https://example.com/foto1.jpg"
  },
  {
    nome: "Maria Oliveira",
    sobrenome: "Oliveira",
    email: "maria.oliveira@example.com",
    dataDePagamento: "2025-02-10",
    data: "2025-01-05",
    areaDeFoco: "Emagrecimento",
    categoria: "Iniciante",
    peso: 65,
    telefone: "(21) 99876-5432",
    senha: "maria@2025",
    sexo: "Feminino",
    principaisObjetivos: "Perder gordura corporal",
    treinosSemanais: 3,
    altura: 1.65,
    status: true,
    foto: "https://example.com/foto2.jpg"
  },
  {
    nome: "Carlos Pereira",
    sobrenome: "Pereira",
    email: "carlos.pereira@example.com",
    dataDePagamento: "2025-03-05",
    data: "2025-01-10",
    areaDeFoco: "Resistência",
    categoria: "Avançado",
    peso: 82,
    telefone: "(31) 98765-4321",
    senha: "c4rl0s!",
    sexo: "Masculino",
    principaisObjetivos: "Aumentar resistência cardiovascular",
    treinosSemanais: 6,
    altura: 1.85,
    status: true,
    foto: "https://example.com/foto3.jpg"
  },
  {
    nome: "Ana Souza",
    sobrenome: "Souza",
    email: "ana.souza@example.com",
    dataDePagamento: "2025-01-25",
    data: "2025-01-12",
    areaDeFoco: "Flexibilidade",
    categoria: "Intermediário",
    peso: 58,
    telefone: "(41) 97654-3210",
    senha: "Ana#2025",
    sexo: "Feminino",
    principaisObjetivos: "Melhorar alongamento e postura",
    treinosSemanais: 4,
    altura: 1.60,
    status: true,
    foto: "https://example.com/foto4.jpg"
  },
  {
    nome: "Pedro Lima",
    sobrenome: "Lima",
    email: "pedro.lima@example.com",
    dataDePagamento: "2025-02-20",
    data: "2025-01-18",
    areaDeFoco: "Força",
    categoria: "Avançado",
    peso: 90,
    telefone: "(51) 96543-2109",
    senha: "pedro!lim@2025",
    sexo: "Masculino",
    principaisObjetivos: "Aumentar força e potência muscular",
    treinosSemanais: 5,
    altura: 1.82,
    status: true,
    foto: "https://example.com/foto5.jpg"
  }
];


