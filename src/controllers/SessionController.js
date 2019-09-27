const User = require("../models/User");
const watson = require("../config/client-watson");


module.exports = {
    async store(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "Usuário não encontrado" });
        }

        if (!(await user.compareHash(password))) {
            return res.status(400).json({ error: "Senha inválida" });
        }

        const session_id = await watson.createSession({
            assistant_id: "cbacde9f-0add-44c6-b4a6-cc41af707e04"
        });


        return res.json({ user, token: User.generateToken(user), session_id });
    }
};