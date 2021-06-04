"use strict";

/**
 * redirect console logging to plaintext element
 */
(function() {
    // get console log method address
    const log = console.log;

    // replace original console log
    console.log = function(message) {
        document.$("#logger").plaintext.appendLine(message);
        log.apply(console, arguments);
    };

    // get console warn method address
    const warn = console.warn;

    // replace original console log
    console.warn = function(message) {
        document.$("#logger").plaintext.appendLine(message);
        warn.apply(console, arguments);
    };

    // get console error method address
    const error = console.error;

    // replace original console log
    console.error = function(message) {
        document.$("#logger").plaintext.appendLine(message);
        error.apply(console, arguments);
    };
})();

/**
 * Add event listener
 */
document.on("parsed ready complete", function(event, element) {
    const log = document.$("plaintext#logger");

    switch (event.type) {
        case "contentchange":
            if (element.tag === "plaintext" && element.id === "logger")
                break;

        default:
            log.plaintext.appendLine(`${event.type} on ${element.tag}.${element.className}#${element.id}`);
            break;
    }
});
