const AssistantV2 = require("watson-developer-cloud/assistant/v2");

const watsonAssistant = new AssistantV2({
    iam_apikey: "Zz90FkYdRNiCFEFiHwUXVwnKx6rxIAWRoQPNAZd4NnE6",
    version: "v2",
    url: "https://gateway.watsonplatform.net/assistant/api"
});

module.exports = watsonAssistant;