import joi from "joi";

export const registerTable = joi.object({

    name: joi.string().min(1).required(),
    email: joi.string().email().required(),
    cpf: joi.string().length(11).required(),
    phone: joi.string().length(11).required(),
    password: joi.string().min(3).required(),
    confirmPassword: joi.string().min(3).required()
});

export const loginTable = joi.object({

    email: joi.string().email().required(),
    password: joi.string().required().min(3)
});
