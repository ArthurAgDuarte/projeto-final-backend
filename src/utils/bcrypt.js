import bcrypt from "bcrypt";

const SALTS = process.env.SALTS_ROUNDS;
const cryptPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

export default cryptPassword;
