const AssistantV1 = require("watson-developer-cloud/assistant/v1");

const watsonAssistant = new AssistantV1({
    iam_apikey: "lAAlHSGKOE9Aax6jrvzx0lZqlqYUXn5MchNYDR5XOP3q",
    version: "2018-02-16",
    url: "https://gateway-wdc.watsonplatform.net/assistant/api"
});

module.exports = watsonAssistant;