import { nanoid } from 'nanoid';
import {
     deleteSendUserLoggedToken, getRequisitionProductIdTableProductsJoinUsers,
    getRequisitionProducts,postRequisitionValidateToken,
    postSendUrlsIdTableUsers
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
        await deleteSendUserLoggedToken(token);

        // se tudo der certo
        res.sendStatus(204);

    } catch (erro) {
        res.status(500).send(erro.message);
    };
}

// função que filtra as postagens por categoria
export async function urlsPost(req, res) {

    // pegando os dados enviado pelo usuario parames
    const { param } = req.params;

    try {

        // enviando os dados para o servidor
        await postSendUrlsIdTableUsers(shortUrl, url);

        return res.status(201).send({ "id": idUrls.rows[0].id, "shortUrl": shortUrl });

    } catch (erro) {
        res.status(500).send(erro.message);
    };
}



