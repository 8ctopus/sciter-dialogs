// add event handler for not yet existing button 4
document.on("keydown", "body", function(event, element) {
    if (event.code !== "KeyF5")
        return;

    // reload app
    Window.this.load(location.href);
});
