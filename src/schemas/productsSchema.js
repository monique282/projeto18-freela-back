import joi from "joi";

// validação da url grande que o usuario manda
export const registerProduct= joi.object({
    name : joi.string().min(1).required(),
    description : joi.string().min(10).required(),
    price: joi.string().min(1).required(),
    category: joi.string().required(),
    photo: joi.string().uri().required()
});