# sciter dialogs

This project implements modal dialogs for [sciter.js](https://sciter.com/).

![sciter dialogs screenshot](screenshot.png)

## features

- modal dialog with icon
- fully skinnable
- any button can open a link in the browser
- translatable using callback

## demo

- git clone the repository
- on Mac only `chmod +x install.sh scapp.sh`
- run `install.bat` on Windows or `./install.sh` on Mac to download the latest sciter binaries and the sciter package manager
- install packages `php bin/spm.phar install`
- run `scapp.bat` or `./scapp.sh`

## install

- add the `src` dir to your project or use the sciter package manager
- in `<script type="module">`

```js
import {dialogs} from "src/dialogs.js";

const value = dialogs.show("question", "Do you want to update widget?", "yes no cancel");
```

### css skinning

```js
dialogs.setOptions({
    css: [
        __DIR__ + "src/dialog-win.css",
        __DIR__ + "css/test.css",
    ]
});
```

### translation callback

```js
dialogs.setOptions({
    callback: dialogCallback,
});

/**
 * Dialog callback
 * @param DOMElement root
 * @return void
 */
function dialogCallback(root)
{
    // get all dialog elements to translate
    root.$$("[data-i18n]").map(function(element) {
        element.innerHTML += " (i18n)";
    });
}
```

# todo

- add "don't show again" checkbox
- add keyboard shortcuts to buttons &#818;

# known issues

- in some cases dialog is not modal
