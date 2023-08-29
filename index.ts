import express,{Request,Response} from "express";
import { LinkedList } from "./data/linked-list/linkedList.mjs"
import { BinaryTree } from "./data/binary-search-tree/bst.mjs";

const app = express();
const PORT = process.env.PORT || 3000;

// criando a constante que possui os metódos da classe de exemplo da estrutura de dados LinkedList
const numberLinkedList = new LinkedList<number>()
// criando a constante que possui os metódos públicos da classe de exemplo da estrutura de dados BinaryTree
const nameBinaryTree = new BinaryTree<string>()
// Middleware para fazer o parse do corpo das requisições em JSON
app.use(express.json());

// Rota para ter resposta no endpoint http://localhost:3000/
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Bem-vindo à minha API!' });
});


app.post('/linkedList/AddNumber',(req: Request, res: Response)=>{
  const newNumber = req.body.number;
  numberLinkedList.append(newNumber)
  res.status(201).json({message:`Número ${newNumber} adicionado com sucesso na lista ligada`})
})

app.get('/linkedList/GetNumbers',(req: Request, res: Response)=>{
  const myNumbers = numberLinkedList.display()
  res.json({numbers:myNumbers})
})

app.post('/binarySearchTree/AddName',(req: Request, res: Response)=>{
  const newName = req.body.newName;
  nameBinaryTree.insert(newName)
  res.status(201).json({message: `Nome ${newName} adicionado com sucesso na árvore binária`})
})

app.get('/binarySearchTree/Search/:myName',(req: Request, res: Response)=>{
  const myName = req.params.myName;
  const name = nameBinaryTree.search(myName)
  res.json({myName: name})
})

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
