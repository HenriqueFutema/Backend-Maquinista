const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../config/auth')


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next()
    }

    this.password = await bcrypt.hash(this.password, 8)
})

UserSchema.methods = {
    compareHash(password) {
        return bcrypt.compare(password, this.password)
    }
}

UserSchema.statics = {
    generateToken({ id }) {
        return jwt.sign({ id }, authConfig.secret, {
            expiresIn: authConfig.ttl
        })
    }
}

module.exports = mongoose.model('User', UserSchema);