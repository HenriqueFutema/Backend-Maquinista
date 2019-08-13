const User = require("../models/User");
const Message = require("../models/Message");

module.exports = {
    async store(req, res) {
        const user = await User.findById(req.body.destination);

        const msg = await Message.create({
            destination: req.body.destination,
            author: req.body.author,
            content: req.body.content
        });

        user.chat.push(msg);

        await user.save();

        return res.status(200).json(msg);
    }
};