const watson = require("../config/client-watson");

module.exports = {
    async store(req, res) {
        const { text } = req.body;

        const session_id = await watson.createSession({
            assistant_id: "cbacde9f-0add-44c6-b4a6-cc41af707e04"
        });

        watson
            .message({
                assistant_id: "cbacde9f-0add-44c6-b4a6-cc41af707e04",
                session_id: session_id.session_id,
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