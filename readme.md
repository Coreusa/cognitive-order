## Cognitive Services Order Intent Example (LUIS)
![header image](https://i.imgur.com/H1chadf.jpg)
An example for figuring out order intents and returning the parsed result. Uses the language understanding services from Azure at luis.ai.

### Installation
yarn

### Usage
Update the LUIS_APP_ID, LUIS_PREDICTION_KEY and LUIS_ENDPOINT_URL constants in predict.js to match your subscription and setup.

Then run:
node predict.js "Your inquery"

### Examples
node predict.js "I want to order a large pizza with ham and extra cheese. I need the pizza to be gluten free."

Result:
```
{
	"query": "I want to order a large pizza with ham and extra cheese. I need the pizza to be gluten free.",
	"prediction": {
		"topIntent": "ModifyOrder",
		"intents": {
			"ModifyOrder": {
				"score": 1.0
			},
			"None": {
				"score": 9.6E-09
			},
			"Greetings": {
				"score": 2.0555555E-09
			},
			"CancelOrder": {
				"score": 1.6636363E-09
			},
			"Confirmation": {
				"score": 1.1125E-09
			},
			"Communication.PressKey": {
				"score": 8.238095E-10
			}
		},
		"entities": {
			"Order": [{
				"FullPizzaWithModifiers": [{
					"PizzaType": ["pizza"],
					"Size": [
						["Large"]
					],
					"ToppingModifiers": [{
						"Topping": [
							["Ham"],
							["Cheese"]
						],
						"Modifier": [
							["Add"],
							["Add"]
						],
						"$instance": {
							"Topping": [{
								"type": "ToppingList",
								"text": "ham",
								"startIndex": 35,
								"length": 3,
								"score": 0.9998451,
								"modelTypeId": 1,
								"modelType": "Entity Extractor",
								"recognitionSources": ["model"]
							}, {
								"type": "ToppingList",
								"text": "cheese",
								"startIndex": 49,
								"length": 6,
								"score": 0.9903456,
								"modelTypeId": 1,
								"modelType": "Entity Extractor",
								"recognitionSources": ["model"]
							}],
							"Modifier": [{
								"type": "ModifierList",
								"text": "with",
								"startIndex": 30,
								"length": 4,
								"score": 0.9999676,
								"modelTypeId": 1,
								"modelType": "Entity Extractor",
								"recognitionSources": ["model"]
							}, {
								"type": "ModifierList",
								"text": "extra",
								"startIndex": 43,
								"length": 5,
								"score": 0.9771383,
								"modelTypeId": 1,
								"modelType": "Entity Extractor",
								"recognitionSources": ["model"]
							}]
						}
					}],
					"$instance": {
						"PizzaType": [{
							"type": "PizzaType",
							"text": "pizza",
							"startIndex": 24,
							"length": 5,
							"score": 0.9811977,
							"modelTypeId": 1,
							"modelType": "Entity Extractor",
							"recognitionSources": ["model"]
						}],
						"Size": [{
							"type": "SizeList",
							"text": "large",
							"startIndex": 18,
							"length": 5,
							"score": 0.998666,
							"modelTypeId": 1,
							"modelType": "Entity Extractor",
							"recognitionSources": ["model"]
						}],
						"ToppingModifiers": [{
							"type": "ToppingModifiers",
							"text": "with ham and extra cheese",
							"startIndex": 30,
							"length": 25,
							"score": 0.9304755,
							"modelTypeId": 1,
							"modelType": "Entity Extractor",
							"recognitionSources": ["model"]
						}]
					}
				}],
				"$instance": {
					"FullPizzaWithModifiers": [{
						"type": "FullPizzaWithModifiers",
						"text": "a large pizza with ham and extra cheese",
						"startIndex": 16,
						"length": 39,
						"score": 0.92640364,
						"modelTypeId": 1,
						"modelType": "Entity Extractor",
						"recognitionSources": ["model"]
					}]
				}
			}],
			"$instance": {
				"Order": [{
					"type": "Order",
					"text": "a large pizza with ham and extra cheese",
					"startIndex": 16,
					"length": 39,
					"score": 0.7469307,
					"modelTypeId": 1,
					"modelType": "Entity Extractor",
					"recognitionSources": ["model"]
				}]
			}
		}
	}
}
```
