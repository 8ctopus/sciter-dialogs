export class dialogs
{
    static #options = [];

    /**
     * Set options
     * @param object options
     */
    static setOptions(options)
    {
        this.#options = options;
    }

    /**
     * Show modal dialog
     * @param  string type
     * @param  string message
     * @param  string buttons
     * @param  object (optional) options
     * @return string result
     */
    static show(type, message, buttons, options)
    {
        // merge options
        options = {
            ...this.#options,
            ...options,
        };

        return Window.this.modal({
            parent: Window.this,
            //type: Window.POPUP_WINDOW,
            url: __DIR__ + "dialog.html",
            state: Window.WINDOW_HIDDEN,
            alignment: -5,
            parameters: {
                type: type,
                message: message,
                buttons: buttons,
                options: options,
            }
        });
    }
}
