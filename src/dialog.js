/**
 * Show modal dialog
 * @param  string type
 * @param  string message
 * @param  string buttons
 * @return string result
 */
function showDialog(type, message, buttons)
{
    return Window.this.modal({
        type: Window.POPUP_WINDOW,
        url: __DIR__ + "dialog.htm",
        state: Window.WINDOW_SHOWN,
        alignment: 5,
//        width: 400,
//        height: 170,
        parameters: {
            type: type,
            message: message,
            buttons: buttons,
        }
    });
}
