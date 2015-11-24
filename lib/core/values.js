/*
 * milktea core/values.js
 * copyright (c) 2015 Susisu
 */

"use strict";

function endModule() {
    module.exports = Object.freeze({
        Type   : Type,
        getType: getType,
    });
}

var Type = Object.freeze({
    UNKNOWN  : "unknown",
    UNIT     : "unit",
    NUMBER   : "number",
    STRING   : "string",
    BOOL     : "bool",
    FUNCTION : "function",
    VECTOR   : "vector",
    OBJECT   : "object",
    REFERENCE: "reference"
});

function getType(value) {
    switch (typeof value) {
        case "number":
            return Type.NUMBER;
        case "string":
            return Type.STRING;
        case "boolean":
            return Type.BOOL;
        case "function":
            return Type.FUNCTION;
        case "object":
            if (value instanceof Array) {
                return Type.VECTOR;
            }
            else if (value instanceof Value) {
                return value.type;
            }
        default:
            return Type.UNKNOWN;
    }
}

endModule();
