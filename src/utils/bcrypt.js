import bcrypt from "bcrypt"
const salts = parseInt(process.env.SALT_ROUNDS);
const crypto = (passwords) =>{
    return bcrypt.hashSync(passwords, salts)
}


// console.log(typeof process.env.SALT_ROUNDS);

export default crypto;
