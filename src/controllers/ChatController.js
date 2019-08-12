const watson = require("../config/client-watson");

module.exports = {
    async store(req, res) {
        const { text, context = {} } = req.body;

        const params = {
            input: { text },
            workspace_id: "197f6c5b-e79e-44e2-b62a-924a86f98592",
            context
        };

        watson.message(params, (err, response) => {
            if (err) res.status(500).json(err);
            res.json(response);
        });
    }
};