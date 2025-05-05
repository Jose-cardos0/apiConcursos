"use strict";
// import { Router, Request, Response } from "express";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
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
const express_1 = require("express");
const mongoose_1 = __importDefault(require("mongoose"));
// Conectar ao MongoDB (substitua pela sua URL do MongoDB)
mongoose_1.default
    .connect("mongodb+srv://devjose:14111995keko@apiteste.fooj7.mongodb.net/?retryWrites=true&w=majority&appName=ApiTeste")
    .then(() => {
    console.log("Conectado ao MongoDB");
})
    .catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error);
});
// Definir o esquema da apostila
const apostilaSchema = new mongoose_1.default.Schema({
    id: String,
    imagem: String,
    descricao: String,
    link: String,
});
// Criar o modelo da apostila
const Apostila = mongoose_1.default.model("Apostila", apostilaSchema);
const router = (0, express_1.Router)();
exports.router = router;
// Rota GET - Buscar todas as apostilas
router.get("/apostilas", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apostilas = yield Apostila.find();
        res.status(200).json(apostilas);
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao recuperar apostilas", error });
    }
}));
// Rota POST - Criar nova apostila
router.post("/apostilas", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, imagem, descricao, link } = req.body;
    const novaApostila = new Apostila({
        id,
        imagem,
        descricao,
        link,
    });
    try {
        // Salvar no banco de dados
        yield novaApostila.save();
        res.status(201).json({
            message: "Apostila criada com sucesso",
            apostila: { id, imagem, descricao, link },
        });
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao criar apostila", error });
    }
}));
