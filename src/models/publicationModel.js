import {prisma} from '../helpers/dbConnection.js';

export const createPubli = async (publi) => {
    return await prisma.publi.create({
        data: publi
    });
}

export const getPublication = async () => {
    return await prisma.publi.findMany();
}
