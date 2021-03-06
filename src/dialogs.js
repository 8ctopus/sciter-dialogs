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
     * @param {string} buttons
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
            state: Window.WINDOW_HIDDEN,
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
