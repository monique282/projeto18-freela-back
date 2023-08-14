import { nanoid } from 'nanoid';
import {
    deleteSendUserLoggedToken, getRequisitionProductIdTableProductsJoinUsers,
    getRequisitionProducts, getRequisitionProductsUsers, getRequisitionValidateToken,
    getSendProductsParamTableProducts, postRequisitionValidateToken
} from '../repository/repositoryProducts.js';
import { postRequisitionLogin } from '../repository/repositoryUsers.js';

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
export async function productCategoryPost(req, res) {

    // pegando os dados enviado pelo usuario parames
    const { param } = req.params;

    try {

        // enviando os dados para o servidor
        const productCategoria = await getSendProductsParamTableProducts(param);

        return res.status(201).send(productCategoria.rows);

    } catch (erro) {
        res.status(500).send(erro.message);
    };
}

// função que mostra os produto do usuario
export async function productsSoldByUserGet(req, res) {
    
    // pegando os dados do token
     const { authorization } = req.headers;
     const token = authorization?.replace("Bearer ", "")

    try {

        // pegas as informações do usuario pelo token
        const thereIsAUserToken = await getRequisitionValidateToken(token);

        // verificando se o usuario tem algum produto
        if (thereIsAUserToken.rows.length === 0) {
            return res.status(404).send("Nenhum produto cadastrado.");
        };

        // pegar as postagens que o usuario fez
        const userProducts = await getRequisitionProductsUsers(thereIsAUserToken.rows[0].email);

        // se tudo der certo
        // enviar a venda
        return res.status(200).send(userProducts)

    } catch (erro) {
        res.status(500).send(erro.message);
    };
}


