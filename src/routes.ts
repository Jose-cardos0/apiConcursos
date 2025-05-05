// import { Router, Request, Response } from "express";

// const router = Router();

// router.get("/apostilas", (req: Request, res: Response) => {
//   res.json([
//     {
//       id: "apostila policia federal",
//       imagem: "hhttp://google.com.br",
//       descricao: "livro da pf",
//       link: "http://google.com.br",
//     },
//   ]);
// });

// router.post("/apostilas", (req: Request, res: Response) => {
//   const { id, imagem, descricao, link } = req.body;

//   res.status(201).json({
//     message: "Apostila criada com sucesso",
//     apostila: { id, imagem, descricao, link },
//   });
// });

// export { router };

import { Router, Request, Response } from "express";
import mongoose from "mongoose";

// Conectar ao MongoDB (substitua pela sua URL do MongoDB)
mongoose
  .connect(
    "mongodb+srv://devjose:14111995keko@apiteste.fooj7.mongodb.net/?retryWrites=true&w=majority&appName=ApiTeste"
  )
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error);
  });

// Definir o esquema da apostila
const apostilaSchema = new mongoose.Schema({
  id: String,
  imagem: String,
  descricao: String,
  link: String,
});

// Criar o modelo da apostila
const Apostila = mongoose.model("Apostila", apostilaSchema);

const router = Router();

// Rota GET - Buscar todas as apostilas
router.get("/apostilas", async (req: Request, res: Response) => {
  try {
    const apostilas = await Apostila.find();
    res.status(200).json(apostilas);
  } catch (error) {
    res.status(500).json({ message: "Erro ao recuperar apostilas", error });
  }
});

// Rota POST - Criar nova apostila
router.post("/apostilas", async (req: Request, res: Response) => {
  const { id, imagem, descricao, link } = req.body;

  const novaApostila = new Apostila({
    id,
    imagem,
    descricao,
    link,
  });

  try {
    // Salvar no banco de dados
    await novaApostila.save();
    res.status(201).json({
      message: "Apostila criada com sucesso",
      apostila: { id, imagem, descricao, link },
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar apostila", error });
  }
});

export { router };
