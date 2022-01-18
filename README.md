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
- install packages `npm install`
- install latest sciter sdk `npm run install-sdk`
- start the demo `npm run scapp`

## demo requirements

- A recent version of Node.js `node` (tested with 16 LTS) and its package manager `npm`.
    - On Windows [download](https://nodejs.dev/download/) and run the installer
    - On Linux check the [installation guide](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04#option-2-%E2%80%94-installing-node-js-with-apt-using-a-nodesource-ppa)

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
