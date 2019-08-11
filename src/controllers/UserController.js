const User = require('../models/User')

module.exports = {

    async store(req, res) {
        const { email } = req.body

        if (await User.findOne({ email })) {
            return res.status(400).json('Email já cadastrado')
        }

        const user = await User.create(req.body)

        res.status(200).json(user)

    }

}