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
     * @param (optional) object options
     * @return string result
     */
    static show(type, message, buttons, options)
    {
        // set options if not defined
        if (typeof options === "undefined")
            options = this.#options;

        return Window.this.modal({
            parent: Window.this,
            type: Window.POPUP_WINDOW,
            url: __DIR__ + "dialog.htm",
            //state: Window.WINDOW_SHOWN,
            alignment: 5,
            //width: 400,
            //height: 170,
            parameters: {
                type: type,
                message: message,
                buttons: buttons,
                options: options,
            }
        });
    }
}
