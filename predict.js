var requestPromise = require('request-promise');
var queryString = require('querystring');
const config = require('./config.json');

// Analyze a string utterance.
getPrediction = async () => {
    // YOUR-APP-ID: The App ID GUID found on the www.luis.ai Application Settings page.
    const LUIS_appId = config.appId;

    // YOUR-PREDICTION-KEY: Your LUIS authoring key, 32 character value.
    const LUIS_predictionKey = config.predictionKey;

    // YOUR-PREDICTION-ENDPOINT: Replace this with your authoring key endpoint.
    const LUIS_endpoint = config.endpoint;

    // The utterance you want to use.
    const utterance = process.argv[2]

    // Create query string
    const queryParams = {
        "show-all-intents": true,
        "verbose":  true,
        "query": utterance,
        "subscription-key": LUIS_predictionKey
    }

    // Create the URI for the REST call.
    const URI = `${LUIS_endpoint}luis/prediction/v3.0/apps/${LUIS_appId}/slots/production/predict?${queryString.stringify(queryParams)}`

    // Send the REST call.
    const response = await requestPromise(URI);

    // Display the response from the REST call.
    console.log(JSON.stringify(response, null, 4));
}

// Pass an utterance to the sample LUIS app
getPrediction()
  .then(() => console.log("done"))
  .catch((err) => console.log(err));
