import { db } from '../database/database.connection.js';


// pega a lista de produtos da planilha
export async function getRequisitionProducts() {
    const productsResult = await db.query('SELECT * FROM products;');
    return productsResult;
};

export async function getRequisitionProductIdTableProductsJoinUsers(id) {
    const idProductsResult = await db.query(
        `SELECT products.*, 
            json_build_object('name', users.name, 'phone', users.phone) AS users
                FROM products
                JOIN users ON products.idseler = users.email
        WHERE products.id = $1;
                `, [id]);
    return idProductsResult;
};








export async function getSendProcustId(visitCount, shortUrl) {
    const serveSend = await db.query(`UPDATE urls SET "visitCount" = $1 WHERE "shortUrl" = $2`, [visitCount, shortUrl])
    return serveSend;
};

export async function postRequisitionValidateToken(token) {
    const userLogeedResult = await db.query('SELECT * FROM userslogged WHERE token = $1;', [token]);
    return userLogeedResult;
};

export async function postRequisitionUrlsIdTableUsers(email) {
    const idUserResult = await db.query('SELECT * FROM users WHERE email = $1;', [email]);
    return idUserResult;
};

export async function postSendUrlsIdTableUsers(shortUrl, url) {
    const serveSend = await db.query('INSERT INTO urls ("shortUrl",url) VALUES ($1, $2)', [shortUrl, url]);
    return serveSend;
};



export async function postSendUrlsIdTableShortuser(idUser, idUrls) {
    const serveSend = await db.query('INSERT INTO shortuser ( "userId" ,"shortId") VALUES ($1, $2)', [idUser, idUrls]);
    return serveSend;
};



export async function deleteRequisitionUrlsId(id) {
    const usersResult = await db.query('SELECT * FROM users WHERE id = $1;', [id]);
    return usersResult;
};

export async function deleteRequisitionShortuserLink(user, id) {
    const shortUrlResult = await db.query(`SELECT * FROM shortuser WHERE "userId" = $1 AND "shortId" = $2;`, [user, id]);
    return shortUrlResult;
};

export async function deleteSendShortuserId(id) {
    const serveSend = await db.query(`DELETE FROM shortuser WHERE "shortId" = $1;`, [id]);
    return serveSend;
};

export async function deleteSendUrlsId(id) {
    const serveSend = await db.query(`DELETE FROM urls WHERE id = $1;`, [id]);
    return serveSend;
};