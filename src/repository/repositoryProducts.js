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

export async function postRequisitionValidateToken(token) {
    const userLogeedResult = await db.query('SELECT * FROM userslogged WHERE token = $1;', [token]);
    return userLogeedResult;
};

export async function deleteSendUserLoggedToken(token) {
    const serveSend = await db.query(`DELETE FROM userslogged WHERE "token" = $1;`, [token]);
    return serveSend;
};

export async function getSendProductsParamTableProducts(param) {
    const serveSend = await db.query('SELECT * FROM products WHERE category = $1;', [param]);
    return serveSend;
};

export async function getRequisitionValidateToken(token) {
    const userLogeedResult = await db.query('SELECT * FROM userslogged WHERE token = $1;', [token]);
    return userLogeedResult;
};

export async function getRequisitionProductsUsers(email) {
    const emailUserResult = await db.query('SELECT * FROM products WHERE idseler = $1;', [email]);
    return emailUserResult;
};

export async function sendSaleOpenUpdatStatusBreak(id) {
    const serveSend = await db.query(`UPDATE products SET status = $1 WHERE id = $2`, ["false", id])
    return serveSend;
};

export async function sendSaleOpenUpdatStatusUnpause(id) {
    const serveSend = await db.query(`UPDATE products SET status = $1 WHERE id = $2`, ["true", id])
    return serveSend;
};

export async function getRequisitionProductsUsersId(id) {
    const emailUserResult = await db.query('SELECT * FROM products WHERE id = $1;', [id]);
    return emailUserResult;
};

export async function deleteSendproductsId(id) {
    const serveSend = await db.query(`DELETE FROM products WHERE id = $1;`, [id]);
    return serveSend;
};


export async function postSendUrlsIdTableShortuser(name, description, price, category, photo, email) {
    const serveSend = await db.query('INSERT INTO products ( name ,idseler, category,description, photo, price) VALUES ($1, $2, $3, $4, $5, $6)', [name, email, category, description, photo, price]);
    return serveSend;
};



