import bcrypt from "bcrypt"
const salts = parseInt(process.env.SALT_ROUNDS);
const crypto = (passwords) =>{
    return bcrypt.hashSync(passwords, salts)
}

export const validatePassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
}
// console.log(typeof process.env.SALT_ROUNDS);

export default crypto;
