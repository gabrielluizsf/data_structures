import { Router, Request, Response } from "express";
import { GenealogyGraph } from "../data/graph/genealogyGraph.mjs";

const graphRoutes = Router();

enum Gender {
  Male = "male",
  Female = "female",
}

type Person = {
  name: string;
  gender: Gender;
  father?: Person;
  mother?: Person;
};

const Adam: Person = {
  name: "Adam",
  gender: Gender.Male,
};
const Eva: Person = {
  name: "Eva",
  gender: Gender.Female,
};

const Abel: Person = {
  name: "Abel",
  gender: Gender.Male,
  father: Adam,
  mother: Eva,
};

function newGenealogy(person: Person){
  const genealogy = new GenealogyGraph<Person>(person);
  return genealogy
}

const AdamGenealogyTree: GenealogyGraph<Person> = newGenealogy(Adam)
const EvaGenealogyTree: GenealogyGraph<Person> = newGenealogy(Eva)

AdamGenealogyTree.addMember(Adam, Abel);
EvaGenealogyTree.addMember(Eva, Abel);

graphRoutes.post("/graph/family/add", (req: Request, res: Response) => {
  const { parentName, memberData } = req.body;
  try {
    switch (parentName) {
      case "Adam":
        AdamGenealogyTree.addMember(Adam, memberData);
        return res
          .status(201)
          .json({ message: "Membro adicionado com sucesso na familia" });
      case "Eva":
        EvaGenealogyTree.addMember(Eva, memberData);
        return res
          .status(201)
          .json({ message: "Membro adicionado com sucesso na familia" });
      default:
        return res
          .status(400)
          .json({
            message: "Só pode adicionar membros para a familia de Adão e Eva",
          });
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

graphRoutes.get("/graph/family/members", (req: Request, res: Response) => {
  try {
    const AdamFamily = AdamGenealogyTree.root.children;
    const EvaFamily = EvaGenealogyTree.root.children;
    return res.json({ families: { AdamFamily, EvaFamily } });
  } catch (error: any) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
});

export default graphRoutes;
