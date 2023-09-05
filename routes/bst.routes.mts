import { Request, Response, Router } from "express";
import { BinaryTree } from "../data/binary-search-tree/bst.mjs";

const binarySearchRoutes = Router();
// criando a constante que possui os metódos públicos da classe de exemplo da estrutura de dados BinaryTree
const nameBinaryTree = new BinaryTree<string>();

binarySearchRoutes.post(
  "/binarySearchTree/AddName",
  (req: Request, res: Response) => {
    const newName = req.body.newName;
    nameBinaryTree.insert(newName);
    res
      .status(201)
      .json({
        message: `Nome ${newName} adicionado com sucesso na árvore binária`,
      });
  }
);

binarySearchRoutes.get(
  "/binarySearchTree/Search/:myName",
  (req: Request, res: Response) => {
    const myName = req.params.myName;
    const name = nameBinaryTree.search(myName);
    res.json({ myName: name });
  }
);

export default binarySearchRoutes;
