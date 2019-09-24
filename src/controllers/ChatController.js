const watson = require("../config/client-watson");

module.exports = {
    async store(req, res) {
        watson
            .createSession({
                assistant_id: "XrtlW7mVU3XnN7RkdUvdSmZ2o4Lh7Jga8ffrXaZW43eu"
            })
            .then(res => {
                console.log(JSON.stringify(res, null, 2));
            })
            .catch(err => {
                console.log(err);
            });
    }
};