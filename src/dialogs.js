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
        // set options if not defined
        if (typeof options === "undefined")
            options = this.#options;

        return Window.this.modal({
            parent: Window.this,
            //type: Window.POPUP_WINDOW,
            url: __DIR__ + "dialog.html",
            state: Window.WINDOW_HIDDEN,
            //alignment: 5,
            // temporary fix for 4.4.8.7 division by zero
            // https://sciter.com/forums/topic/div-by-zero-on-window-creation/
            width: 400,
            height: 170,
            parameters: {
                type: type,
                message: message,
                buttons: buttons,
                options: options,
            }
        });
    }
}
