import { text } from 'express';
import {prisma} from '../helpers/dbConnection.js';

export const createPubli = async (publi) => {
    return await prisma.publi.create({
        data: publi
    });
}

export const getPublication = async () => {
    return await prisma.publi.findMany();
}

export const deletePublication = async(id) => {
    return await prisma.publi.delete({
        where:{
            id: id
        }
    })
}

export const updatePubli = async(publi, id) => {
    return await prisma.publi.update({
        data: publi,
        where: {id}
    });
}

export const updatePubliText = async(image, id) => {
    return await prisma.publi.update({
        data: image,
        where:{id}
    });
}