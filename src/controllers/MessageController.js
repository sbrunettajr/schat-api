const { Message } = require('../models')

exports.sendMessage = async (request, response) => {
    try {

        const { fromUserId, toUserId, message } = request.body
        const object = await Message.create({
            fromUserId,
            toUserId,
            message
        })

        response.io.emit("NEW-MESSAGE", object)
        return response.send()
    } catch (error) {
        console.log(error)
    }
}