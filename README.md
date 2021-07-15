# sciter dialogs

This project implements modal dialogs for [sciter.js](https://sciter.com/).

![sciter dialogs screenshot](screenshot.png)

## features

- modal dialog with icon
- skinnable
- help button opens external link
- translatable using callback

## demo

- git clone the repository
- run `install.bat` to download the latest sciter binaries and the sciter package manager
- install packages `php spm.phar install`
- update fontawesome path to `../vendor/8ctopus/sciter-fontawesome/src/css/fontawesome.css` in `dialog.htm`
- run `scapp.bat`
- to refresh the app after changes to the html/css click `F5`

## install

- add the `src` dir to your project
- then in your code

```js
<script type="module">

import {dialogs} from "src/dialogs.js";

let value = dialogs.show("question", "Do you want to update widget?", "yes no cancel");

```

# todo

- add don't show again checkbox
- set tab focus on first button
- add keyboard shortcuts to buttons &#818;

# known issues

- fix fontawesome css include
