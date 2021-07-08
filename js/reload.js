document.on("ready", function() {
    // bring window to front
    Window.this.isTopmost = true;
    Window.this.isTopmost = false;

    // set focus
    document.body.state.focus = true;
});

// add scapp refresh
document.on("keydown", function(event, element) {
    if (event.code !== "KeyF5")
        return;

    // reload app
    Window.this.load(location.href);
});
