const AssistantV1 = require('watson-developer-cloud/assistant/v1');
const watson = require('../src/watson/client-watson');


const watsonAssistant = new AssistantV1({
    iam_apikey: 'lAAlHSGKOE9Aax6jrvzx0lZqlqYUXn5MchNYDR5XOP3q',
    version: '2018-02-16',
    url: 'https://gateway.watsonplatform.net/assistant/api'
});

module.exports={

    async store(req, res){
        const { text, context = {} } = req.body;

        const params = {
            input: { text },
            workspace_id: '197f6c5b-e79e-44e2-b62a-924a86f98592',
            context,
        };
    
        watson.message(params, (err, response) => {
            if (err) res.status(500).json(err);
            res.json(response);
        });
    }

}