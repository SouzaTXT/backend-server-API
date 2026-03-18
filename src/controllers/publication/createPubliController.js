import { createPubli } from "../../models/publicationModel.js";

export async function createPubliController(req, res){

    /*const user = {
        avatar: "https://github.com/SouzaTXT.png",
        name: "Mateus Fonseca",
        email: "emaildomateus@gmail.com",
        pass: "12345678"
    }*/

    const publi = req.body

    const result = await createPubli(publi)

    res.json({
        message: `Publicação ${publi.title} criado com sucesso!`,
        publi: result
    })
}