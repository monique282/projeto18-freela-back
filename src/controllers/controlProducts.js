import { nanoid } from 'nanoid';
import {
    deleteSendShortuserLoggedToken, getRequisitionProductIdTableProductsJoinUsers,
    getRequisitionProducts, postRequisitionUrlsIdTableUsers,
    postRequisitionValidateToken,
    postSendUrlsIdTableShortuser, postSendUrlsIdTableUsers
} from '../repository/repositoryProducts.js';

// função que pega todos os produtos
export async function productsGet(req, res) {

    try {
        // pegando a url peli id indicado
        const post = await getRequisitionProducts();

        // verificando se o usuario existe
        if (post.rows.length === 0) {
            return res.status(404).send("Sem nenhuma postagem");
        };

        // se tudo der certo
        res.status(200).send(post.rows);

    } catch (erro) {
        res.status(500).send(erro.message);
    };
}

// função que mostra os detalhas de um produto pelo id
export async function productsIdGet(req, res) {
    const { id } = req.params;

    try {

        // verificando se o short existe 
        const thereIsId = await getRequisitionProductIdTableProductsJoinUsers(id);

        // verificando se a thereIsId é valida
        if (thereIsId.rows.length === 0) {
            return res.status(404).send("Postagem não encontrada");
        };

        // se tudo der certo
        // enviar a venda
        console.log(thereIsId.rows)
        return res.status(200).send(thereIsId.rows)

    } catch (erro) {
        res.status(500).send(erro.message);
    };
}

// função que deleta o usuario da tabele de usuario logado
export async function usersLoggedDelete(req, res) {

    // pegando os dados do token
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "")

    try {

        // validando o token
        const userLogeed = await postRequisitionValidateToken(token);
        if (userLogeed.rows.length === 0) {
            return res.status(401).send({ message: "Usuário não autorizado." });
        };

        // fazendo a requisição para deletar usuario logado da tabela 
        await deleteSendShortuserLoggedToken(token);

        // se tudo der certo
        res.sendStatus(204);

    } catch (erro) {
        res.status(500).send(erro.message);
    };
}








// função que para cadastrar uma url a encurtando, urls/short
export async function urlsPost(req, res) {

    // pegando os dados do token
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    // pegando os dados enviado pelo usuario pelo input
    const { url } = req.body;

    try {

        // validando o token
        const userLogeed = await postRequisitionValidateToken(token);
        if (userLogeed.rows.length === 0) {
            return res.status(401).send({ message: "Usuário não autorizado." });
        };

        // quero o id da tabela de usuarios 
        const idUser = await postRequisitionUrlsIdTableUsers(userLogeed.rows[0].email);

        // gera a short URL utilizando o nanoid
        const shortUrl = nanoid(8);

        // enviando os dados para o servidor
        await postSendUrlsIdTableUsers(shortUrl, url);

        // quero o id da tabela de urls 
        const idUrls = await postRequisitionUrlsIdTableUrls(shortUrl);

        // salvar na tabela de shortUser o id do user e do urls
        await postSendUrlsIdTableShortuser(idUser.rows[0].id, idUrls.rows[0].id);

        return res.status(201).send({ "id": idUrls.rows[0].id, "shortUrl": shortUrl });

    } catch (erro) {
        res.status(500).send(erro.message);
    };
}



