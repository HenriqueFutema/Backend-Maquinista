const watson = require("../config/client-watson");

module.exports = {
    async store(req, res) {
        const { text } = req.body;

        if (!req.body.session_id) {
            const session_id = await watson.createSession({
                assistant_id: "cbacde9f-0add-44c6-b4a6-cc41af707e04"
            });
            session = session_id.session_id;
        } else {
            session = req.body.session_id;
        }

        console.log(session);

        watson
            .message({
                assistant_id: "cbacde9f-0add-44c6-b4a6-cc41af707e04",
                session_id: session,
                input: {
                    message_type: "text",
                    text: text
                }
            })
            .then(res => {
                console.log(JSON.stringify(res, null, 2));
            })
            .catch(err => {
                console.log(err);
            });
    }
};