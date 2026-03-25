import { updatePubli } from "../../models/publicationModel.js";

export async function updatePubliController(req, res){
    const {id} = req.params;
    const publi = req.body;

    const result = await updatePubli(publi, + id);

    return res.json({
        message: "Publicação atualizada com sucesso!",
        publi: result
    });
}
