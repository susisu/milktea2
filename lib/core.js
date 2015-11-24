/*
 * milktea core.js
 * copyright (c) 2015 Susisu
 */

"use strict";

function endModule() {
    module.exports = Object.freeze({
        values: require("./core/values.js")
    });
}

endModule();
