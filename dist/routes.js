"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/apostilas", (req, res) => {
    res.json([
        {
            id: "apostila policia federal",
            imagem: "hhttp://google.com.br",
            descricao: "livro da pf",
            link: "http://google.com.br",
        },
    ]);
});
router.post("/apostilas", (req, res) => {
    const { id, imagem, descricao, link } = req.body;
    res.status(201).json({
        message: "Apostila criada com sucesso",
        apostila: { id, imagem, descricao, link },
    });
});
