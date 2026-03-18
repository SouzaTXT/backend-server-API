import { createUser } from "../../models/userModel.js";

export async function createUsersController(req, res){

    /*const user = {
        avatar: "https://github.com/SouzaTXT.png",
        name: "Mateus Fonseca",
        email: "emaildomateus@gmail.com",
        pass: "12345678"
    }*/

    const user = req.body

    const result = await createUser(user)

    res.json({
        message: `Usuário ${user.name} criado com sucesso!`,
        user: result
    })
}
