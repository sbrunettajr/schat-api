const { User } = require('../models')

exports.signIn = async (request, response) => {
    try {
        const { phoneNumber } = request.body
        const user = await User.findOne({
            where: {
                phoneNumber
            }
        })

        if (!user) {
            return response.status(401).send()
        }
        return response.send(user)
    } catch (error) {
        console.log(error)
    }
}

exports.signUp = async (request, response) => {
    try {
        const {name, phoneNumber} = request.body
        const user = await User.create({
            name,
            phoneNumber
        })

        return response.send(user)
    } catch (error) {
        console.log(error)
    }
}

exports.getFriends = async (request, response) => {
    try {
        let contacts = []

        for (const contact of request.body) {
            const friend = await User.findOne({
                where: {
                    phoneNumber: contact.phoneNumber
                }
            })

            if (friend) {
                contact.userId = friend.id

                contacts.push(contact)
            }
        }
        return response.send(contacts)
    } catch (error) {
        // console.log(error)
    }
}