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
- run `install.bat` to download the latest sciter binaries, library and the sciter package manager
- install packages `php spm.phar install`
- start `scapp.exe`
- to refresh the app after changes to the html/css click `F5`

# install

- add the `src` dir to your project
- then in your code

```
<script type="module">

import {showDialog} from "src/dialog.js";

let value = showDialog("question", "Do you want to update widget?", "yes no cancel");
```

# todo

- add don't show again checkbox

# known issues

- no issues known
