export default class Dialogs {
    static #options = [];

    /**
     * Set options
     * @param {object} options
     */
    static setOptions(options) {
        this.#options = options;
    }

    /**
     * Show modal dialog
     * @param {string} type
     * @param {string} message
     * @param {string} buttons - e.g. "yes no view" or "yes !no view", default button is first in list or the last prefixed with with "!"
     * @param {object} options - (optional)
     * @returns {string} result
     */
    static show(type, message, buttons, options) {
        // merge options
        options = {
            ...this.#options,
            ...options,
        };

        return Window.this.modal({
            parent: Window.this,
            //type: Window.POPUP_WINDOW,
            url: __DIR__ + "dialogs.htm",
            // state has no effect Window.this.modal() by design always shows the window
            /*state: Window.WINDOW_HIDDEN,*/
            alignment: -5,
            parameters: {
                type,
                message,
                buttons,
                options,
            },
        });
    }
}
