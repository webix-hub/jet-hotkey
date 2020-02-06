Hotkey handler for Webix Jet apps
================

## Why it is necessary

Helpers allow to define hotkeys which are activated only when
some view is rendered or only when some view has a focus.

Hotkey handlers will be automatically detached on view destruction.

## How to use

```js
import hotkey from "jet-hotkey";

export default class MyView extends JetView {
    confit(){
        return { view:"datatable" };
    }
    init() {
        // will be active while this view is visible
        this.on(hotkey(), "ESC", () => this.app.show("/top"));
        
        // will be active when datatable has focus
        this.on(hotkey(this.getRoot()), "DELETE", () =>
            this.app.callEvent("app:action", ["delete"])
        );
    }
}
```