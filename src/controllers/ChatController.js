const watson = require("../config/client-watson");

module.exports = {
    async store(req, res) {
        const { text } = req.body;

        if (!req.body.session_id) {
            const session_id = await watson.createSession({
                assistant_id: "0ad920b4-7a98-4d39-8acd-5dea5adfc016"
            });
            session = session_id.session_id;
        } else {
            session = req.body.session_id;
        }

        console.log(session);

        await watson
            .message({
                assistant_id: "0ad920b4-7a98-4d39-8acd-5dea5adfc016",
                session_id: session,
                input: {
                    message_type: "text",
                    text: text
                }
            })
            .then(response => {
                return res.json({ response, session });
            })
            .catch(err => {
                return res.json(err);
            });
    }
};