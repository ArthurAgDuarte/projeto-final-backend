import bcrypt from "bcrypt"
// const salts = parseInt(process.env.SALT_ROUNDS);
// const crypto = (password) =>{
//     return bcrypt.hashSync(password, salts)
// }

// export const validatePassword = (password, hashPassword) => {
//     return bcrypt.compareSync(password, hashPassword);
// }


// export default crypto;

const SALTS = parseInt(process.env.SALTS_ROUNDS);
const cryptPassword = (password) => {
    return bcrypt.hashSync(password, SALTS);
}

export const validatePassword = (password, hashPassword) =>{
    return bcrypt.compareSync(password,hashPassword);
}

export default cryptPassword
