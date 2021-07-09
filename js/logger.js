"use strict";

/**
 * redirect console logging to plaintext element
 */
(function() {
    // get console log method address
    const log = console.log;

    const output = document.$("plaintext#logger");

    // replace original console log
    console.log = function(message) {
        log.apply(console, arguments);
        output.plaintext.appendLine(message);
        output.lastElementChild.scrollIntoView({behavior:"smooth"});
    };

    // get console warn method address
    const warn = console.warn;

    // replace original console log
    console.warn = function(message) {
        warn.apply(console, arguments);
        output.plaintext.appendLine(message);
        output.lastElementChild.scrollIntoView({behavior:"smooth"});
    };

    // get console error method address
    const error = console.error;

    // replace original console log
    console.error = function(message) {
        error.apply(console, arguments);
        output.plaintext.appendLine(message);
        output.lastElementChild.scrollIntoView({behavior:"smooth"});
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
