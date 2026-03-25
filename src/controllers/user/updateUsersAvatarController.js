import { updateUserAvatar } from "../../models/userModel.js";

export async function updateUsersAvatarController(req, res){
    const {id} = req.params;
    const user = req.body;

    const avatar = user.avatar;

    const result = await updateUserAvatar({avatar}, + id);

    return res.json({
        message: "Avatar atualizado com sucesso!",
        user: result
    });
}