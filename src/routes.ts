import { Router, Request, Response } from "express";

const router = Router();

router.get("/apostilas", (req: Request, res: Response) => {
  res.json([
    {
      id: "apostila policia federal",
      imagem: "hhttp://google.com.br",
      descricao: "livro da pf",
      link: "http://google.com.br",
    },
  ]);
});

router.post("/apostilas", (req: Request, res: Response) => {
  const { id, imagem, descricao, link } = req.body;

  res.status(201).json({
    message: "Apostila criada com sucesso",
    apostila: { id, imagem, descricao, link },
  });
});

export { router };
