import prisma from "./src/connection/connection.js";

const allUsers = await prisma.users.findMany();
console.log(allUsers);
