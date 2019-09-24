const watson = require("../config/client-watson");

module.exports = {
    async store(req, res) {
        watson
            .createSession({
                assistant_id: "cbacde9f-0add-44c6-b4a6-cc41af707e04"
            })
            .then(res => {
                console.log(JSON.stringify(res, null, 2));
            })
            .catch(err => {
                console.log(err);
            });
    }
};