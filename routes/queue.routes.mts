import { Router, Request, Response } from "express";
import { Queue } from "../data/queue/queue.mjs";

const queueRoutes = Router();

type Patient = {
  name: string;
  age: number;
  illness: string;
};
const queue = new Queue<Patient>();

queueRoutes.post("/queue/service", (req: Request, res: Response) => {
  const { name, age, illness } = req.body;
  const patient: Patient = { name, age, illness };
  console.log(`${patient.name} entrou na fila de espera\n`);
  const patientQueue = queue.enqueue(patient);
  if (queue.getLength() === 10) {
    const patient = patientQueue.dequeue();
    console.log(`${patient.name} começou a ser atendido\n`);
  }
  return res.status(201).json({ message: "Produto adicionado na fila" });
});

export default queueRoutes;
