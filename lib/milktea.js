/*
 * milktea milktea.js
 * copyright (c) 2015 Susisu
 */

"use strict";

function endModule() {
    module.exports = Object.freeze({
        core: require("./core.js")
    });
}

endModule();
