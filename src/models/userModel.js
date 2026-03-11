import {prisma} from '../helpers/dbConnection';

export const createUser = async (user) => {
    return await prisma.user.create({
        data: user
    });
}