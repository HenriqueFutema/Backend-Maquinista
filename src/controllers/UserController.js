const User = require("../models/User");
const watson = require("../config/client-watson");

module.exports = {
    async store(req, res) {
        const { name, email, password } = req.body;

        if (await User.findOne({ email })) {
            return res.status(400).json("Email já cadastrado");
        }

        const session_id = await watson.createSession({
            assistant_id: "cbacde9f-0add-44c6-b4a6-cc41af707e04"
        });

        const user = await User.create({
            name,
            email,
            password,
            session_id: session_id.session_id
        });

        return res.status(200).json(user);
    },

    async index(req, res) {
        const users = await User.find();

        return res.status(200).json(users);
    },

    async show(req, res) {
        const user = await User.findById(req.params.id).populate(["chat"]);

        return res.status(200).json(user);
    }
};