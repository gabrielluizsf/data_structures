import express, {Request,Response} from "express";
import linkedListRoutes from "./routes/linkedList.routes.mjs";
import binarySearchRoutes from "./routes/bst.routes.mjs";
import graphRoutes from "./routes/graph.routes.mjs";

const server = express()
const PORT = process.env.PORT || 3000;

// Middleware para fazer o parse do corpo das requisições em JSON
server.use(express.json());

// Rota para ter resposta no endpoint http://localhost:3000/
server.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Bem-vindo a API onde você pode utilizar estruturas de dados em endpoints especificos !' });
});

server.use(linkedListRoutes)
server.use(binarySearchRoutes)
server.use(graphRoutes)

// Inicializa o servidor http
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
