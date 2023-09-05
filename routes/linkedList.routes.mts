import { Request, Response, Router } from "express";
import { LinkedList } from "../data/linked-list/linkedList.mjs";

const linkedListRoutes = Router();

// criando a constante que possui os metódos da classe de exemplo da estrutura de dados LinkedList
const numberLinkedList = new LinkedList<number>()

linkedListRoutes.post(
  "/linkedList/AddNumber",
  (req: Request, res: Response) => {
    const newNumber = req.body.number;
    numberLinkedList.append(newNumber);
    res
      .status(201)
      .json({
        message: `Número ${newNumber} adicionado com sucesso na lista ligada`,
      });
  }
);

linkedListRoutes.get(
  "/linkedList/GetNumbers",
  (req: Request, res: Response) => {
    const myNumbers = numberLinkedList.display();
    res.json({ numbers: myNumbers });
  }
);

export default linkedListRoutes