import { getPublication } from "../../models/publicationModel.js"

export async function getPubliController(req, res){

    const result = await getPublication();

    res.json({
        message: "publicações listados com sucesso",
        publi: result
    });
}