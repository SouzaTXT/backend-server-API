import { updatePubliText } from "../../models/publicationModel.js";

export async function updatePubliTextController(req, res){
    const {id} = req.params;
    const publi = req.body;

    const image = publi.image;

    const result = await updatePubliText({image}, + id);

    return res.json({
        message: "Imagem atualizado com sucesso!",
        image: result
    });
}