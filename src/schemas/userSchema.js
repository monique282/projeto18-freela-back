import joi from "joi";

export const registerTable = joi.object({

    name: joi.string().min(1).required(),
    email: joi.string().email().required(),
    cpf: joi.number().min(11).max(11).required(),
    phone: joi.number().min(10).max(11).required(),
    password: joi.string().required().min(3),
    confirmPassword: joi.string().required().min(3)
});

export const loginTable = joi.object({

    email: joi.string().email().required(),
    password: joi.string().required().min(3)
});
