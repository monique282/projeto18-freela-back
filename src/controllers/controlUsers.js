// esse arquivo aqui serve para executar todas as funções que eu preciso
// esse arquivo é chamado la em Routes
// esse arquivo aqui é enviado por um post para faser o cadastro


import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import {
    getRequisitionUserProducts, postRequisitionLogin,
    postRequisitionLoginSend, postRequisitionRegisterCpf,
    postRequisitionRegisterEmail, postRequisitionRegisterSend
} from '../repository/repositoryUsers.js';

// essa função aqui serve para enviar um post para criar um cadastro
export async function registerPost(req, res) {

    // pegar os dados que a pessoa colocou na tela de cadastro
    const { name, email, cpf, phone, password, confirmPassword } = req.body;

    try {

        // verificando se o email ja esta cadastrado
        const existingUserEmail = await postRequisitionRegisterEmail(email);

        if (existingUserEmail.rows.length > 0) {
            return res.status(409).send({ message: "E-mail já cadastrado. Por favor, utilize outro e-mail." });
        }

        // verificar se o cpf ja foi cadastrado
        const existingUserCpf = await postRequisitionRegisterCpf(cpf);

        if (existingUserCpf.rows.length > 0) {
            return res.status(409).send({ message: "CPF já cadastrado. Por favor, utilize outro CPF, ou faça login." });
        }

        // verificando se as senhas são iguais
        if (password !== confirmPassword) {
            return res.status(422).send({ message: "Senha e Confirmar senha não são iguais." });
        }

        // cripitografas a senha 
        const passwordsafe = bcrypt.hashSync(password, 2);

        let query = 'INSERT INTO users (name,email,cpf,phone,password) VALUES ($1, $2, $3, $4, $5) ';
        const queryParams = [];

        // Verificando os parâmetros enviados pela query são validos
        // verificando se name é valido
        if (typeof name !== 'undefined' && name !== '') {
            queryParams.push(name);
        } else {
            return res.status(422).send({ message: "Formato de nome invalido." });
        };

        // verificando se o email é valido
        if (typeof email !== 'undefined' && email !== '') {
            queryParams.push(email);
        } else {
            return res.status(422).send({ message: "Formato de email invalido." });
        };

        // verificando se o cpf é valido
        if (typeof cpf !== 'undefined' && cpf !== '') {
            queryParams.push(cpf);
        } else {
            return res.status(422).send({ message: "Formato de cpf invalido." });
        };

        // verificando se o phone é valido
        if (typeof phone !== 'undefined' && phone !== '') {
            queryParams.push(phone);
        } else {
            return res.status(422).send({ message: "Formato de senha invalido." });
        };

        // verificando se a senha é valida
        if (typeof password !== 'undefined' && password !== '') {
            queryParams.push(passwordsafe);
        } else {
            return res.status(422).send({ message: "Formato de confirmar senha invalido." });
        };

        // enviar os dados pro servidor pra quando o cadastro der certo
        await postRequisitionRegisterSend(query, queryParams);
        return res.sendStatus(201);

    } catch (erro) {
        res.status(500).send(erro.message);
    };
};

// essa função aqui serve pra envia um poste e fazer login
export async function loginPost(req, res) {

    // pegar os dados que a pessoa colocou na tela de cadastro
    const { email, password } = req.body;

    try {

        // verificando se o email ja esta cadastrado
        const emailExistsQuery = await postRequisitionLogin(email);
        if (emailExistsQuery.rows.length === 0) {
            return res.status(401).send({ message: "E-mail não cadastrado. Por favor, utilize um e-mail valido, ou faça o cadastro." });
        }

        // vericiar se a senha esta correta
        const correctPassword = bcrypt.compareSync(password, emailExistsQuery.rows[0].password);
        if (!correctPassword) {
            return res.status(401).send({ message: "Senha incorreta" });
        }

        // gernado o token
        const token = uuid();
        console.log(token)
        // enviar os dados pro servidor pra quando o cadastro der certo
        await postRequisitionLoginSend(emailExistsQuery.rows[0].name, email, token);
        return res.status(200).send({ name: emailExistsQuery.rows[0].name, token });


    } catch (erro) {
        res.status(500).send(erro.message);
    };
};

// essa função aqui serve pra pegar as postagem que foi o usuario que fez users/me
export async function userProductsGet(req, res) {
    const { idseler } = req.params;
    try {
        // validando o idseler
        const userProducts = await getRequisitionUserProducts(idseler);
        if (userProducts.rows.length === 0) {
            return res.status(401).send({ message: "Dados do vendedor não encontrado." });
        };

        // se de tudo certo
        return res.status(200).send(userProducts.rows);

    } catch (error) {
        res.status(500).send(error.message);
    };
};



