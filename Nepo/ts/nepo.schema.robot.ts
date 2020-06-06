export const enumDatatypes = ["Number", "Boolean", "String", "Colour", "Connection", "Image"];

export const schema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://open-roberta.org/robot.schema.json",
  "title": "Robot",
  "description": "A robot",
  "type": "object",
  "properties": {
    "robot": {
      "type": "string"
    },
    "robotGroup": {
      "type": "string"
    },
    "dataTypes": {
      "type": "array",
      "items": {
        "enum": enumDatatypes,
        "minItems": 1,
        "uniqueItems": true
      }
    },
    "listTypes": {
      "type": "array",
      "items": {
        "enum": enumDatatypes,
        "uniqueItems": true
      }
    },
    "sensors": {
      "type": "object",
      "properties": {
        "getSample": {
          "type": "array",
          "items": [
            {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "modes": {
                  "type": "array"
                },
                "slots": {
                  "type": "array"
                }
              },
              "required": [
                "name",
                "modes"
              ]
            }
          ]
        },
        "other": {
          "type": "array",
          "items": [
            {
              "type": "object"
            }
          ]
        }
      },
      "additionalProperties": false
    },
    "configurations": {
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "ports": {
              "type": "array"
            },
            "pins": {
              "type": "array"
            },
            "category": {
              "type": "string"
            }
          },
          "required": [
            "name",
            "category"
          ]
        }
      ]
    },
    "actions": {
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "modes": {
              "type": "array"
            },
            "input": {
              "type": "array"
            }
          },
          "required": [
            "name"
          ]
        }
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "robot",
    "robotGroup",
    "dataTypes",
    "listTypes",
    "sensors",
    "configurations",
    "actions"
  ]
};

