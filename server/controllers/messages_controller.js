let messages = [];
let id = 0;

module.exports = {
    create:function(req, res) {
        let newMessage = {
            text:req.body.text,
            time:req.body.time,
            id:id
        }
        id++;
        messages.push(newMessage);
        res.status(200).send(messages);
    },

    read:function(req, res) {
        res.status(200).send(messages);
    },

    update:function(req, res) {
        const {text} = req.body;
        const idLookUp = parseInt(req.params.id);
        const indexOfMessage = messages.findIndex(message => message.id === idLookUp);
        let message = messages[indexOfMessage];
        
        messages[indexOfMessage] = {
            id:message.id,
            text:text || message.text,
            time:message.time
        };
        res.status(200).send(messages);
    },

    delete:function(req, res) {
        const idLookUp = req.params.id;
        const indexOfMessage = messages.findIndex(message => message.id == idLookUp);

        messages.splice(indexOfMessage, 1);
        res.status(200).send(messages);
    }
}