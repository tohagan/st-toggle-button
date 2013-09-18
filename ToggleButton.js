Ext.define("AmproWireless.ux.ToggleButton", {
    extend: "Ext.Button",
    xtype: 'uxtogglebutton',

    config: {
        isPressed: false,
        pressedText: ['Pressed', 'Not Pressed'],
        pressedIconCls: null,
        iconMask: true
    },

    initialize: function () {
        this.callParent(arguments);
        
        // Update the state before other event handlers can view it.
        this.onBefore("tap", this.onBeforeButtonPress, this);
    },

    onBeforeButtonPress: function () {
        if (!this.getDisabled()) {
            this.setIsPressed(!this.getIsPressed());
        }
    },

    updateIsPressed: function (isPressed) {
        var pressedCls = this.getPressedCls();

        if (isPressed) {
            this.addCls(pressedCls);
        } else {
            this.removeCls(pressedCls);
        }

        this.updatePressedText(this.getPressedText());
        this.updatePressedIconCls(this.getPressedIconCls());
    },

    updatePressedText: function (pressedText) {
        if (!Ext.isArray(pressedText)) {
            this.setText(pressedText);
        } else {
            this.setText(this.getIsPressed() ? pressedText[0] : pressedText[1]);
        }
    },

    updatePressedIconCls: function (pressedIconCls) {
        if (!Ext.isArray(pressedIconCls)) {
            this.setIconCls(pressedIconCls);
        } else {
            this.setIconCls(this.getIsPressed() ? pressedIconCls[0] : pressedIconCls[1]);
        }
    }

});