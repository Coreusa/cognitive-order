var requestPromise = require('request-promise');
var queryString = require('querystring');

// Analyze a string utterance.
getPrediction = async () => {
    // YOUR-APP-ID: The App ID GUID found on the www.luis.ai Application Settings page.
    const LUIS_appId = "1ef1c20b-882b-49a5-ad82-6cea28912b0d";

    // YOUR-PREDICTION-KEY: Your LUIS authoring key, 32 character value.
    const LUIS_predictionKey = "76418d7f42e441e186a7b0f391c2fc35";

    // YOUR-PREDICTION-ENDPOINT: Replace this with your authoring key endpoint.
    const LUIS_endpoint = "https://westus.api.cognitive.microsoft.com/";

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
