const User = require("../models/User");

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        if (await User.findOne({ email })) {
            return res.status(400).json("Email já cadastrado");
        }

        const user = await User.create(req.body);

        res.status(200).json(user);
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