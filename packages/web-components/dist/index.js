'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lit = require('lit');
var decorators_js = require('lit/decorators.js');
var styleMap_js = require('lit/directives/style-map.js');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

exports.CometChatAvatar = class CometChatAvatar extends lit.LitElement {
    constructor() {
        super();
        this.name = "raj";
        this.style = {
            borderRadius: "16px",
            width: "28px",
            height: "28px",
            border: "none",
            backgroundColor: "red",
            nameTextColor: "rgb(20,20,20)",
            backgroundSize: "cover",
            nameTextFont: "500 16px Inter",
            outerView: "",
            outerViewSpacing: "",
            outerViewBorderRadius: ""
        };
        this.avatar = "";
        this.generateAvatar = (data) => {
            var _a, _b, _c;
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            canvas.width = 200;
            canvas.height = 200;
            //Draw background
            context.fillStyle = (_a = this.style) === null || _a === void 0 ? void 0 : _a.backgroundColor;
            context.fillRect(0, 0, canvas.width, canvas.height);
            //Draw text
            context.font = this.getCanvasFontSize((_b = this.style) === null || _b === void 0 ? void 0 : _b.nameTextFont);
            context.fillStyle = (_c = this.style) === null || _c === void 0 ? void 0 : _c.nameTextColor;
            context.strokeStyle = "rgba(20, 20, 20, 8%)";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText(data, canvas.width / 2, canvas.height / 2);
            return canvas.toDataURL("image/svg");
        };
        // this object contains dynamic stylings for this component
        this.getImageStyle = () => {
            var _a, _b, _c;
            return {
                backgroundSize: (_a = this.style) === null || _a === void 0 ? void 0 : _a.backgroundSize,
                backgroundImage: `url(${this.avatar})`,
                border: `${(_b = this.style) === null || _b === void 0 ? void 0 : _b.border} `,
                borderRadius: (_c = this.style) === null || _c === void 0 ? void 0 : _c.borderRadius,
            };
        };
        this.getContainerStyle = () => {
            var _a, _b, _c;
            return {
                height: (_a = this.style) === null || _a === void 0 ? void 0 : _a.height,
                width: (_b = this.style) === null || _b === void 0 ? void 0 : _b.width,
                borderRadius: (_c = this.style) === null || _c === void 0 ? void 0 : _c.borderRadius,
            };
        };
        this.getOuterViewStyle = () => {
            var _a, _b, _c, _d, _e;
            return {
                height: (_a = this.style) === null || _a === void 0 ? void 0 : _a.height,
                width: (_b = this.style) === null || _b === void 0 ? void 0 : _b.width,
                borderRadius: (_c = this.style) === null || _c === void 0 ? void 0 : _c.outerViewBorderRadius,
                outline: (_d = this.style) === null || _d === void 0 ? void 0 : _d.outerView,
                outlineOffset: (_e = this.style) === null || _e === void 0 ? void 0 : _e.outerViewSpacing
            };
        };
        this.updateAvatar();
    }
    update(changedProperties) {
        this.updateAvatar();
        super.update(changedProperties);
    }
    updateAvatar() {
        if (this.image && this.image.trim().length) {
            this.avatar = this.image;
        }
        else if (this.name && Object.keys(this.name).length) {
            let splitName = this.name.split(" ");
            const char = (splitName.length && splitName.length > 1) ? splitName[0].substring(0, 1).toUpperCase() + splitName[1].substring(0, 1).toUpperCase() : this.name.substring(0, 2).toUpperCase();
            this.avatar = this.generateAvatar(char);
        }
        this.render();
    }
    getCanvasFontSize(font) {
        var _a;
        let fontStyle = font === null || font === void 0 ? void 0 : font.split(" ");
        let fontSize = Number((_a = fontStyle[1]) === null || _a === void 0 ? void 0 : _a.replace("px", ""));
        let fontInPixel = fontSize * 5.5 + "px";
        return `${fontStyle[0]} ${fontInPixel} ${fontStyle[2]}`;
    }
    connectedCallback() {
        super.connectedCallback();
    }
    render() {
        return lit.html `<div style=${styleMap_js.styleMap(this.getOuterViewStyle())}>
      <span style=${styleMap_js.styleMap(this.getContainerStyle())} class="avatar__container">
        <span style=${styleMap_js.styleMap(this.getImageStyle())} class="image__style"></span>
      </span>
    </div>`;
    }
};
exports.CometChatAvatar.styles = [
    lit.css `
    :host {
      display: block;
    }
    .avatar__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
      background-color: #ffffff;
      box-sizing: content-box;
      cursor: inherit;
      outline: none;
      position: static;
      padding: 0;
    }
    .image__style{
      display: flex;
      width: 100%;
      height: 100%;
      flex: 1 1 100%;
      background-color: transparent;
      background-position: center;
    }
    `
];
__decorate([
    decorators_js.property()
], exports.CometChatAvatar.prototype, "image", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatAvatar.prototype, "name", void 0);
__decorate([
    decorators_js.property({ type: Object })
], exports.CometChatAvatar.prototype, "style", void 0);
exports.CometChatAvatar = __decorate([
    decorators_js.customElement('cometchat-avatar')
], exports.CometChatAvatar);

exports.CometChatBadge = class CometChatBadge extends lit.LitElement {
    constructor() {
        super(...arguments);
        this.count = 0;
        this.style = {
            height: "28px",
            width: "28px",
            borderRadius: "16px",
            background: "",
            border: "",
            textFont: "",
            textColor: ""
        };
        this.getStyle = () => {
            var _a, _b, _c, _d, _e, _f, _g;
            return {
                border: `${(_a = this.style) === null || _a === void 0 ? void 0 : _a.border}`,
                borderRadius: (_b = this.style) === null || _b === void 0 ? void 0 : _b.borderRadius,
                background: (_c = this.style) === null || _c === void 0 ? void 0 : _c.background,
                color: (_d = this.style) === null || _d === void 0 ? void 0 : _d.textColor,
                font: (_e = this.style) === null || _e === void 0 ? void 0 : _e.textFont,
                width: (_f = this.style) === null || _f === void 0 ? void 0 : _f.width,
                height: (_g = this.style) === null || _g === void 0 ? void 0 : _g.height,
            };
        };
    }
    connectedCallback() {
        if (this.count > 999) {
            this.count = "999+";
        }
        super.connectedCallback();
    }
    render() {
        if (this.count > 0) {
            return lit.html `<div style=${styleMap_js.styleMap(this.getStyle())} class="unread__count"> ${this.count} </div>`;
        }
    }
};
exports.CometChatBadge.styles = [
    lit.css `
    .unread__count{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2px;
    }
    `
];
__decorate([
    decorators_js.property({ type: Number })
], exports.CometChatBadge.prototype, "count", void 0);
__decorate([
    decorators_js.property({ type: Object })
], exports.CometChatBadge.prototype, "style", void 0);
exports.CometChatBadge = __decorate([
    decorators_js.customElement('cometchat-badge')
], exports.CometChatBadge);

exports.CometChatReceipt = class CometChatReceipt extends lit.LitElement {
    constructor() {
        super(...arguments);
        this.waitIcon = `../../assets/wait.svg`;
        this.sentIcon = `../../assets/message-sent.svg`;
        this.deliveredIcon = `../../assets/message-delivered.svg`;
        this.readIcon = `../../assets/message-read.svg`;
        this.errorIcon = `../../assets/warning-small.svg`;
        this.receipt = receipts.wait;
        this.icon = '';
    }
    connectedCallback() {
        if (this.receipt == receipts.error) {
            this.icon = this.errorIcon;
        }
        else if (this.receipt == receipts.sent) {
            this.icon = this.sentIcon;
        }
        else if (this.receipt == receipts.delivered) {
            this.icon = this.deliveredIcon;
        }
        else if (this.receipt == receipts.read) {
            this.icon = this.readIcon;
        }
        else if (this.receipt == receipts.wait) {
            this.icon = this.waitIcon;
        }
        super.connectedCallback();
    }
    render() {
        if (this.icon) {
            return lit.html `<cometchat-icon iconURL=${this.icon}></cometchat-icon>`;
        }
    }
};
exports.CometChatReceipt.styles = [
    lit.css `
      i {
        display: flex;
        justify-content: center;
      }
      `
];
__decorate([
    decorators_js.property()
], exports.CometChatReceipt.prototype, "waitIcon", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatReceipt.prototype, "sentIcon", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatReceipt.prototype, "deliveredIcon", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatReceipt.prototype, "readIcon", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatReceipt.prototype, "errorIcon", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatReceipt.prototype, "receipt", void 0);
exports.CometChatReceipt = __decorate([
    decorators_js.customElement('cometchat-receipt')
], exports.CometChatReceipt);
var receipts;
(function (receipts) {
    receipts[receipts["wait"] = 0] = "wait";
    receipts[receipts["sent"] = 1] = "sent";
    receipts[receipts["delivered"] = 2] = "delivered";
    receipts[receipts["read"] = 3] = "read";
    receipts[receipts["error"] = 4] = "error";
})(receipts || (receipts = {}));

exports.CometChatStatusIndicator = class CometChatStatusIndicator extends lit.LitElement {
    constructor() {
        super(...arguments);
        this.backgroundColor = "orange";
        this.backgroundImage = "";
        this.style = {
            height: "10px",
            width: "10px",
            border: "",
            borderRadius: "16px",
        }; //Custom styling
        this.background = "";
        this.getStyle = () => {
            var _a, _b, _c, _d;
            this.background = "";
            if (this.backgroundImage) {
                this.background = `${this.backgroundColor} url(${this.backgroundImage}) no-repeat  center`;
            }
            else if (this.backgroundColor && !this.backgroundImage) {
                this.background = this.backgroundColor;
            }
            return {
                border: (_a = this.style) === null || _a === void 0 ? void 0 : _a.border,
                borderRadius: (_b = this.style) === null || _b === void 0 ? void 0 : _b.borderRadius,
                height: (_c = this.style) === null || _c === void 0 ? void 0 : _c.height,
                width: (_d = this.style) === null || _d === void 0 ? void 0 : _d.width,
                background: this.background
            };
        };
    }
    render() {
        return lit.html `<span style= ${styleMap_js.styleMap(this.getStyle())} class="status__indictor"> </span>`;
    }
};
exports.CometChatStatusIndicator.styles = [
    lit.css `
  .status__indictor{
    display: block;
    overflow:overlay;
    position: absolute;
    bottom: 0;
    right: 0;
}
  `
];
__decorate([
    decorators_js.property()
], exports.CometChatStatusIndicator.prototype, "backgroundColor", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatStatusIndicator.prototype, "backgroundImage", void 0);
__decorate([
    decorators_js.property({ type: Object })
], exports.CometChatStatusIndicator.prototype, "style", void 0);
exports.CometChatStatusIndicator = __decorate([
    decorators_js.customElement('cometchat-status-indicator')
], exports.CometChatStatusIndicator);

exports.CometChatDate = class CometChatDate extends lit.LitElement {
    constructor() {
        super(...arguments);
        this.style = {
            timeStampFont: "",
            timeStampColor: "",
            backgroundColor: "",
            height: "",
            width: "",
            border: "",
            borderRadius: "",
            background: ""
        };
        this.timestamp = 0;
        this.pattern = () => { };
        //   styles
        this.DateStyles = () => {
            var _a, _b, _c, _d, _e, _f, _g;
            return {
                font: (_a = this.style) === null || _a === void 0 ? void 0 : _a.timeStampFont,
                color: (_b = this.style) === null || _b === void 0 ? void 0 : _b.timeStampColor,
                backgroundColor: (_c = this.style) === null || _c === void 0 ? void 0 : _c.backgroundColor,
                height: (_d = this.style) === null || _d === void 0 ? void 0 : _d.height,
                width: (_e = this.style) === null || _e === void 0 ? void 0 : _e.width,
                border: (_f = this.style) === null || _f === void 0 ? void 0 : _f.border,
                borderRadius: (_g = this.style) === null || _g === void 0 ? void 0 : _g.borderRadius,
                textAlign: 'center',
            };
        };
    }
    connectedCallback() {
        super.connectedCallback();
    }
    render() {
        return lit.html `<span style=${styleMap_js.styleMap(this.DateStyles())}>${this.pattern()}</span>`;
    }
};
exports.CometChatDate.styles = [
    lit.css `
      `
];
__decorate([
    decorators_js.property({ type: Object })
], exports.CometChatDate.prototype, "style", void 0);
__decorate([
    decorators_js.property({ type: Number })
], exports.CometChatDate.prototype, "timestamp", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatDate.prototype, "pattern", void 0);
exports.CometChatDate = __decorate([
    decorators_js.customElement('cometchat-date')
], exports.CometChatDate);

exports.CometChatIcon = class CometChatIcon extends lit.LitElement {
    constructor() {
        super(...arguments);
        this.name = "";
        this.URL = "";
        this.style = {
            height: "24px",
            width: "24px",
            iconTint: "grey"
        };
    }
    render() {
        if (this.URL) {
            return lit.html ` <div class="icon__style" style=${styleMap_js.styleMap(this.iconStyle())} title=${this.name}></div>`;
        }
    }
    iconStyle() {
        var _a, _b, _c;
        return {
            WebkitMask: `url(${this.URL})`,
            background: (_a = this.style) === null || _a === void 0 ? void 0 : _a.iconTint,
            height: (_b = this.style) === null || _b === void 0 ? void 0 : _b.height,
            width: (_c = this.style) === null || _c === void 0 ? void 0 : _c.width
        };
    }
};
exports.CometChatIcon.styles = [
    lit.css `
    `
];
__decorate([
    decorators_js.property()
], exports.CometChatIcon.prototype, "name", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatIcon.prototype, "URL", void 0);
__decorate([
    decorators_js.property({ type: Object })
], exports.CometChatIcon.prototype, "style", void 0);
exports.CometChatIcon = __decorate([
    decorators_js.customElement('cometchat-icon')
], exports.CometChatIcon);

exports.CometChatBackdrop = class CometChatBackdrop extends lit.LitElement {
    constructor() {
        super(...arguments);
        this.isOpen = true; //If `true`, the component is shown
        this.style = {
            background: "black"
        }; //Styles applied to the backdrop element
        this.list = [
            {
                id: "delete",
                title: "delete",
                //inside style
                iconURL: `../../../assets/search.svg`,
                callBack: null,
            },
            {
                id: "edit",
                title: "edit",
                //inside style
                iconURL: `../../../assets/search.svg`,
                callBack: null,
            },
            {
                id: "delete",
                title: "delete",
                //inside style
                iconURL: `../../../assets/search.svg`,
                callBack: null,
            },
            {
                id: "edit",
                title: "edit",
                //inside style
                iconURL: `../../../assets/search.svg`,
                callBack: null,
            },
            {
                id: "delete",
                title: "delete",
                //inside style
                iconURL: `../../../assets/search.svg`,
                callBack: null,
            },
            {
                id: "edit",
                title: "edit",
                //inside style
                iconURL: `../../../assets/search.svg`,
                callBack: null,
            }
        ];
        this.clickHandler = () => {
            if (this.onClick) {
                this.onClick();
            }
        };
    }
    render() {
        // return html`<cometchat-menu-list .list=${this.list}></cometchat-menu-list>`
        if (this.isOpen) {
            return lit.html `<div class="backdrop__Style" style= ${styleMap_js.styleMap(this.backDropStyle())}  @click= ${this.clickHandler}>
    <div class="modal__dialog">
       <slot></slot>
       
    </div>
</div>`;
        }
    }
    backDropStyle() {
        var _a, _b, _c, _d, _e;
        return {
            height: (_a = this.style) === null || _a === void 0 ? void 0 : _a.height,
            width: (_b = this.style) === null || _b === void 0 ? void 0 : _b.width,
            border: (_c = this.style) === null || _c === void 0 ? void 0 : _c.border,
            borderRadius: (_d = this.style) === null || _d === void 0 ? void 0 : _d.borderRadius,
            background: (_e = this.style) === null || _e === void 0 ? void 0 : _e.background,
        };
    }
};
exports.CometChatBackdrop.styles = [
    lit.css `
    .backdrop__Style {
      opacity: .3;
      position: fixed;
      width: 100%;
      height: 100%;
      transition: .3s ease-out 0;
      top: 0;
      left: 0;
      z-index: 5;
    }
    .modal__dialog {
      opacity: 100;
    }
    
    `
];
__decorate([
    decorators_js.property()
], exports.CometChatBackdrop.prototype, "isOpen", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatBackdrop.prototype, "onClick", void 0);
__decorate([
    decorators_js.property({ type: Object })
], exports.CometChatBackdrop.prototype, "style", void 0);
exports.CometChatBackdrop = __decorate([
    decorators_js.customElement('cometchat-backdrop')
], exports.CometChatBackdrop);

const callConstants = {
    incomingCall: "incomingCall",
    incomingMessage: "incomingMessage",
    incomingMessageFromOther: "incomingMessageFromOther",
    outgoingCall: "outgoingCall",
    outgoingMessage: "outgoingMessage",
    INCOMING_CALL_RECEIVED: "onIncomingCallReceived",
    OUTGOING_CALL_ACCEPTED: "onOutgoingCallAccepted",
    OUTGOING_CALL_REJECTED: "onOutgoingCallRejected",
    INCOMING_CALL_CANCELLED: "onIncomingCallCancelled",
    CALL_SCREEN_: "callscreen_",
    CALL_TYPE_DIRECT: "DIRECT_CALL",
};
Object.freeze({
    file: "file",
    liveReaction: "live_reaction",
    extension: "extensions",
    extensions: {
        thumbnailGeneration: "thumbnail-generation",
        polls: "polls",
        document: "document",
        whiteboard: "whiteboard",
        xssfilter: "xss-filter",
        datamasking: "data-masking",
        profanityfilter: "profanity-filter",
        reactions: "reactions",
        linkpreview: "link-preview",
        smartReply: "smart-reply",
        REPLY_POSITIVE: "reply_positive",
        REPLY_NEUTRAL: "reply_neutral",
        REPLY_NEGATIVE: "reply_negative",
    },
    metadata: "metadata",
    injected: "@injected",
    links: "links",
});

class CometChatSoundManager {
    /**
     * @param  {string} sound
     * @param  {string|null=null} customSound
     */
    static play(sound, customSound = null) {
        const resource = CometChatSoundManager.Sound[sound];
        const handler = CometChatSoundManager.handlers[resource];
        if (!handler) {
            return false;
        }
        return handler(customSound);
    }
    static pause() {
        if (CometChatSoundManager.audio) {
            CometChatSoundManager.audio.pause();
        }
    }
}
CometChatSoundManager.audio = null;
CometChatSoundManager.Sound = Object.freeze({
    incomingCall: callConstants.incomingCall,
    incomingMessage: callConstants.incomingMessage,
    incomingMessageFromOther: callConstants.incomingMessageFromOther,
    outgoingCall: callConstants.outgoingCall,
    outgoingMessage: callConstants.outgoingMessage,
});
/**
 * @param  {string|null=null} customSound
 */
CometChatSoundManager.onIncomingMessage = (customSound = null) => {
    if (customSound) {
        CometChatSoundManager.audio = new Audio(customSound);
        CometChatSoundManager.audio.currentTime = 0;
        CometChatSoundManager.audio.play();
    }
    else {
        CometChatSoundManager.audio = new Audio('./audio/incomingmessage.wav');
        CometChatSoundManager.audio.currentTime = 0;
        CometChatSoundManager.audio.play();
    }
};
/**
 * @param  {string|null=null} customSound
 */
CometChatSoundManager.onIncomingOtherMessage = (customSound = null) => {
    if (customSound) {
        CometChatSoundManager.audio = new Audio(customSound);
        CometChatSoundManager.audio.currentTime = 0;
        CometChatSoundManager.audio.play();
    }
    else {
        CometChatSoundManager.audio = new Audio('./audio/incomingothermessage.wav');
        CometChatSoundManager.audio.currentTime = 0;
        CometChatSoundManager.audio.play();
    }
};
/**
 * @param  {string|null=null} customSound
 */
CometChatSoundManager.onOutgoingMessage = (customSound = null) => {
    if (customSound) {
        CometChatSoundManager.audio = new Audio(customSound);
        CometChatSoundManager.audio.currentTime = 0;
        CometChatSoundManager.audio.play();
    }
    else {
        CometChatSoundManager.audio = new Audio('./audio/outgoingmessage.wav');
        CometChatSoundManager.audio.currentTime = 0;
        CometChatSoundManager.audio.play();
    }
};
/**
 * @param  {string|null=null} customSound
 */
CometChatSoundManager.onIncomingCall = (customSound = null) => {
    if (customSound) {
        try {
            CometChatSoundManager.audio = new Audio(customSound);
            CometChatSoundManager.audio.currentTime = 0;
            if (typeof CometChatSoundManager.audio.loop == "boolean") {
                CometChatSoundManager.audio.loop = true;
            }
            else {
                CometChatSoundManager.audio.addEventListener("ended", function () {
                    this.currentTime = 0;
                    this.play();
                }, false);
            }
            CometChatSoundManager.audio.play();
        }
        catch (error) { }
    }
    else {
        try {
            CometChatSoundManager.audio = new Audio('./audio/incomingcall.wav');
            CometChatSoundManager.audio.currentTime = 0;
            if (typeof CometChatSoundManager.audio.loop == "boolean") {
                CometChatSoundManager.audio.loop = true;
            }
            else {
                CometChatSoundManager.audio.addEventListener("ended", function () {
                    this.currentTime = 0;
                    this.play();
                }, false);
            }
            CometChatSoundManager.audio.play();
        }
        catch (error) { }
    }
};
/**
 * @param  {string|null=null} customSound
 */
CometChatSoundManager.onOutgoingCall = (customSound = null) => {
    if (customSound) {
        try {
            CometChatSoundManager.audio = new Audio(customSound);
            CometChatSoundManager.audio.currentTime = 0;
            if (typeof CometChatSoundManager.audio.loop == "boolean") {
                CometChatSoundManager.audio.loop = true;
            }
            else {
                CometChatSoundManager.audio.addEventListener("ended", function () {
                    this.currentTime = 0;
                    this.play();
                }, false);
            }
            CometChatSoundManager.audio.play();
        }
        catch (error) { }
    }
    else {
        try {
            CometChatSoundManager.audio = new Audio('./audio/outgoingcall.wav');
            CometChatSoundManager.audio.currentTime = 0;
            if (typeof CometChatSoundManager.audio.loop == "boolean") {
                CometChatSoundManager.audio.loop = true;
            }
            else {
                CometChatSoundManager.audio.addEventListener("ended", function () {
                    this.currentTime = 0;
                    this.play();
                }, false);
            }
            CometChatSoundManager.audio.play();
        }
        catch (error) { }
    }
};
CometChatSoundManager.handlers = {
    incomingCall: CometChatSoundManager.onIncomingCall,
    outgoingCall: CometChatSoundManager.onOutgoingCall,
    incomingMessage: CometChatSoundManager.onIncomingMessage,
    incomingMessageFromOther: CometChatSoundManager.onIncomingOtherMessage,
    outgoingMessage: CometChatSoundManager.onOutgoingMessage,
};

exports.CometChatButton = class CometChatButton extends lit.LitElement {
    constructor() {
        super();
        this.disabled = false;
        this.text = "";
        this.iconURL = "";
        this.hoverText = "";
        this.onClick = () => {
            CometChatSoundManager.play(CometChatSoundManager.Sound.outgoingMessage);
        };
        this.style = {
            height: "fit-content",
            width: "fit-content",
            buttonTextFont: "",
            buttonTextColor: "",
            borderRadius: "8px",
            border: "1px solid #eeeeee",
            buttonIconTint: "",
            background: ""
        };
        this.iconStyle = {
            height: "24px",
            width: "24px",
            iconTint: "grey"
        };
    }
    // connectedCallback() {
    //   super.connectedCallback()
    //   this.render()
    // }
    render() {
        var _a;
        this.iconStyle.iconTint = ((_a = this.style) === null || _a === void 0 ? void 0 : _a.buttonIconTint) || "grey";
        return lit.html `<button class="button__Style" title=${this.hoverText} @click=${() => { this.onClick ? this.onClick() : null; }} style= ${styleMap_js.styleMap(this.buttonStyle())}  ?disabled=${this.disabled} >${lit.html `<cometchat-icon  .URL=${this.iconURL} .style=${this.iconStyle}></cometchat-icon>`} ${this.text}</button>`;
    }
    buttonStyle() {
        var _a, _b, _c, _d, _e, _f, _g;
        return {
            font: (_a = this.style) === null || _a === void 0 ? void 0 : _a.buttonTextFont,
            color: (_b = this.style) === null || _b === void 0 ? void 0 : _b.buttonTextColor,
            height: (_c = this.style) === null || _c === void 0 ? void 0 : _c.height,
            width: (_d = this.style) === null || _d === void 0 ? void 0 : _d.width,
            border: (_e = this.style) === null || _e === void 0 ? void 0 : _e.border,
            borderRadius: (_f = this.style) === null || _f === void 0 ? void 0 : _f.borderRadius,
            background: (_g = this.style) === null || _g === void 0 ? void 0 : _g.background,
            ...this.style
        };
    }
};
exports.CometChatButton.styles = [
    lit.css `
    button{
      display:flex;
      flex-direction:row
      justify-content: center;
      align-items: center;
      padding:2px 6px;
      cursor:pointer;
    }
    `
];
__decorate([
    decorators_js.property({ type: Boolean })
], exports.CometChatButton.prototype, "disabled", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatButton.prototype, "text", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatButton.prototype, "iconURL", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatButton.prototype, "hoverText", void 0);
__decorate([
    decorators_js.property({ type: Function })
], exports.CometChatButton.prototype, "onClick", void 0);
__decorate([
    decorators_js.property({ type: Object })
], exports.CometChatButton.prototype, "style", void 0);
exports.CometChatButton = __decorate([
    decorators_js.customElement('cometchat-button')
], exports.CometChatButton);

var Placement;
(function (Placement) {
    Placement[Placement["top"] = 0] = "top";
    Placement[Placement["right"] = 1] = "right";
    Placement[Placement["bottom"] = 2] = "bottom";
    Placement[Placement["left"] = 3] = "left";
})(Placement || (Placement = {}));
exports.CometChatPopOver = class CometChatPopOver extends lit.LitElement {
    constructor() {
        super(...arguments);
        this.style = {
            width: "372px",
            height: "330px",
            border: "none",
            background: "white",
            borderRadius: "8px",
            boxShadow: "0px 0px 32px rgba(20, 20, 20, 0.2)",
        };
        this.hasToolTip = false;
        this.placement = Placement.top;
        this.deg = {
            0: 180,
            1: 270,
            2: 0,
            3: 90
        };
        this.x = 0;
        this.y = 0;
        this.tipPositionMapping = {
            0: "x",
            1: "y",
            2: "x",
            3: "y"
        };
        this.onclick = (e) => {
            e.stopPropagation();
            this.x = e.pageX;
            this.y = e.pageY;
            this.renderRoot.querySelector('.tooltip').classList.toggle("hide");
            this.requestUpdate();
        };
        this.toolTipWrapperStyle = () => {
            const axis = this.tipPositionMapping[this.placement];
            let x = this.x ? this.x : 0;
            let y = this.y ? this.y : 0;
            let width = parseInt(this.style.width);
            let height = parseInt(this.style.height);
            let windowWidth = window.innerWidth;
            let windowHeight = window.innerHeight;
            let percent = 0;
            if (axis === "x") {
                percent = (100 * x) / windowWidth;
            }
            else {
                percent = (100 * y) / windowHeight;
            }
            let axisPosition = {};
            if (axis === "x") {
                axisPosition = {
                    left: `${x - width * (percent / 100)}px`
                };
            }
            else {
                axisPosition = {
                    top: `${y - height * (percent / 100)}px`
                };
            }
            let positionStyle = {};
            if (this.placement === Placement.top) {
                positionStyle = {
                    top: `${y - parseInt(height) - 20}px`
                };
            }
            else if (this.placement === Placement.bottom) {
                positionStyle = {
                    top: `${y + 20}px`
                };
            }
            else if (this.placement === Placement.left) {
                positionStyle = {
                    left: `${x - parseInt(width) - 30}px`
                };
            }
            else if (this.placement === Placement.right) {
                positionStyle = {
                    left: `${x + 25}px`
                };
            }
            return {
                boxShadow: this.style.boxShadow,
                borderRadius: this.style.borderRadius,
                width: `${width}px`,
                height: `${height}px`,
                position: "fixed",
                background: `${this.style.background}`,
                ...positionStyle,
                ...axisPosition
            };
        };
        this.toolTipContentStyle = () => {
            return {
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%"
            };
        };
        this.toolTipStyles = () => {
            const axis = this.tipPositionMapping[this.placement];
            let x = this.x ? this.x : 0;
            let y = this.y ? this.y : 0;
            let width = parseInt(this.style.width);
            let height = parseInt(this.style.height);
            let windowWidth = window.innerWidth;
            let windowHeight = window.innerHeight;
            let percent = 0;
            if (axis === "x") {
                percent = (100 * x) / windowWidth;
            }
            else {
                percent = (100 * y) / windowHeight;
            }
            let positionStyle = {};
            if (axis === "x") {
                if (this.placement === Placement.top) {
                    console.log(height);
                    positionStyle = {
                        left: `${width * (percent / 100) - 10}px`,
                        top: height + "px"
                    };
                }
                else if (this.placement === Placement.bottom) {
                    positionStyle = {
                        left: `${width * (percent / 100) - 10}px`,
                        top: -10 + "px"
                    };
                }
            }
            else {
                if (this.placement === Placement.left) {
                    positionStyle = {
                        left: `calc(${width + "px"} - 5px)`,
                        top: `${height * (percent / 100) - 10}px`
                    };
                }
                else if (this.placement === Placement.right) {
                    positionStyle = {
                        left: -15 + "px",
                        top: `${height * (percent / 100) - 10}px`
                    };
                }
            }
            return {
                zIndex: 11,
                width: "0",
                height: "0",
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderBottom: `10px solid grey`,
                position: "relative",
                ...positionStyle,
                transform: `rotate(${this.deg[this.placement]}deg)`
            };
        };
    }
    requestUpdate(name, oldValue, options) {
        super.requestUpdate();
    }
    render() {
        return lit.html `
<div class="tooltip hide" style=${styleMap_js.styleMap(this.toolTipWrapperStyle())}>
${this.hasToolTip ? lit.html `<div class="tooltip__pointer" style=${styleMap_js.styleMap(this.toolTipStyles())}></div>` : lit.nothing}
<div class="tooltip__content" style=${styleMap_js.styleMap(this.toolTipContentStyle())}>
<slot name="content"></slot>
</div>
</div>
<div  @click=${this.onclick}>
<slot name="children"></slot>
</div>
 `;
    }
};
exports.CometChatPopOver.styles = [
    lit.css `
.hide { display: none }
`
];
__decorate([
    decorators_js.property({ type: Object })
], exports.CometChatPopOver.prototype, "style", void 0);
__decorate([
    decorators_js.property({ type: Boolean })
], exports.CometChatPopOver.prototype, "hasToolTip", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatPopOver.prototype, "placement", void 0);
exports.CometChatPopOver = __decorate([
    decorators_js.customElement('cometchat-pop-over')
], exports.CometChatPopOver);

exports.CometChatLabel = class CometChatLabel extends lit.LitElement {
    constructor() {
        super(...arguments);
        this.text = "";
        this.dir = "ltr";
        this.style = {
            height: "",
            width: "",
            border: "",
            borderRadius: "",
            background: "",
            textFont: "",
            textColor: ""
        };
    }
    render() {
        return lit.html ` <label dir=${this.dir} style=${styleMap_js.styleMap(this.labelStyle())}> ${this.text} </label>`;
    }
    labelStyle() {
        var _a, _b, _c, _d, _e, _f, _g;
        return {
            color: (_a = this.style) === null || _a === void 0 ? void 0 : _a.textColor,
            font: (_b = this.style) === null || _b === void 0 ? void 0 : _b.textFont,
            height: (_c = this.style) === null || _c === void 0 ? void 0 : _c.height,
            width: (_d = this.style) === null || _d === void 0 ? void 0 : _d.width,
            border: (_e = this.style) === null || _e === void 0 ? void 0 : _e.border,
            borderRadius: (_f = this.style) === null || _f === void 0 ? void 0 : _f.borderRadius,
            background: (_g = this.style) === null || _g === void 0 ? void 0 : _g.background
        };
    }
};
exports.CometChatLabel.styles = [
    lit.css `
    `
];
__decorate([
    decorators_js.property()
], exports.CometChatLabel.prototype, "text", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatLabel.prototype, "dir", void 0);
__decorate([
    decorators_js.property({ type: Object })
], exports.CometChatLabel.prototype, "style", void 0);
exports.CometChatLabel = __decorate([
    decorators_js.customElement('cometchat-label')
], exports.CometChatLabel);

exports.CometChatInput = class CometChatInput extends lit.LitElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.value = "";
        this.type = "text";
        this.checked = true;
        this.placeholderText = "Start typing...";
        this.hidden = false;
        this.multiple = false;
        this.accept = "";
        this.searchCallback = () => { };
        this.dir = "ltr"; //default = "ltr" //auto default for dynamic data
        this.style = {
            height: "24px",
            width: "fit-content",
            border: "none",
            textFont: "400 14px Inter",
            textColor: "grey",
            placeholderTextFont: "500 13px Inter",
            placeholderTextColor: "#bcbcbc",
            borderRadius: "12px",
            boxShadow: "",
            background: "transparent"
        };
        this.keyDownCallback = (e) => {
            var _a;
            this.value = (_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.value;
            if (this.searchCallback) {
                this.searchCallback(this.value);
            }
        };
        this.inputStyle = () => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return {
                font: (_a = this.style) === null || _a === void 0 ? void 0 : _a.textFont,
                color: (_b = this.style) === null || _b === void 0 ? void 0 : _b.textColor,
                height: (_c = this.style) === null || _c === void 0 ? void 0 : _c.height,
                width: (_d = this.style) === null || _d === void 0 ? void 0 : _d.width,
                border: (_e = this.style) === null || _e === void 0 ? void 0 : _e.border,
                borderRadius: (_f = this.style) === null || _f === void 0 ? void 0 : _f.borderRadius,
                background: (_g = this.style) === null || _g === void 0 ? void 0 : _g.background,
                boxShadow: (_h = this.style) === null || _h === void 0 ? void 0 : _h.boxShadow
            };
        };
        this.placeholderStyle = () => {
            var _a, _b, _c;
            return {
                font: (_a = this.style) === null || _a === void 0 ? void 0 : _a.placeholderTextFont,
                color: (_b = this.style) === null || _b === void 0 ? void 0 : _b.placeholderTextColor,
                background: (_c = this.style) === null || _c === void 0 ? void 0 : _c.background,
            };
        };
    }
    render() {
        return lit.html `  ${!this.value && this.type != "checkbox" ? lit.html ` <cometchat-label .dir=${this.dir}  class="label__style"  text="${this.placeholderText}" style=${styleMap_js.styleMap(this.placeholderStyle())} ></cometchat-label>` : ""} 
      <input dir=${this.dir}  @input="${(e) => { this.keyDownCallback(e); }}" class="input__style" id="input" type="${this.type}" ?hidden=${this.hidden}  accept=${this.accept} ?multiple=${this.multiple}   value=${this.value}  style=${styleMap_js.styleMap(this.inputStyle())}   />`;
    }
};
exports.CometChatInput.styles = [
    lit.css `
    .input__style{
      border:none;
      padding:1px 3px;
      outline:none;
      width:100%;
    }
    .label__style{position:absolute;
      padding: 5px 4px; pointer-events:none;}
    `
];
__decorate([
    decorators_js.property({ type: Boolean })
], exports.CometChatInput.prototype, "disabled", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatInput.prototype, "value", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatInput.prototype, "type", void 0);
__decorate([
    decorators_js.property({ type: Boolean })
], exports.CometChatInput.prototype, "checked", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatInput.prototype, "placeholderText", void 0);
__decorate([
    decorators_js.property({ type: Boolean })
], exports.CometChatInput.prototype, "hidden", void 0);
__decorate([
    decorators_js.property({ type: Boolean })
], exports.CometChatInput.prototype, "multiple", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatInput.prototype, "accept", void 0);
__decorate([
    decorators_js.property({ type: Function })
], exports.CometChatInput.prototype, "searchCallback", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatInput.prototype, "dir", void 0);
__decorate([
    decorators_js.property({ type: Object })
], exports.CometChatInput.prototype, "style", void 0);
exports.CometChatInput = __decorate([
    decorators_js.customElement('cometchat-input')
], exports.CometChatInput);

exports.CometChatSearch = class CometChatSearch extends lit.LitElement {
    constructor() {
        var _a, _b, _c, _d, _e;
        super();
        this.name = "";
        this.searchText = "";
        this.placeholderText = "Start typing...";
        this.searchCallback = () => { };
        this.searchIconURL = `../assets/search.svg`;
        this.style = {
            height: "fit-content",
            width: "fit-content",
            border: "1px solid #dedede",
            searchTextFont: "400 14px Inter",
            searchTextColor: "grey",
            placeholderTextFont: "500 13px Inter",
            placeholderTextColor: "#bcbcbc",
            borderRadius: "6px",
            background: "",
            searchIconTint: "grey"
        };
        this.inputStyle = {
            height: "100%",
            width: "100%",
            border: "none",
            borderRadius: "inherit",
            background: "transparent"
        };
        this.iconStyle = {
            height: "24px",
            width: "24px",
            iconTint: "grey"
        };
        this.keyDownEvent = (str) => {
            if (this.searchCallback) {
                this.searchCallback(str);
            }
        };
        this.inputStyle.placeholderTextFont = (_a = this.style) === null || _a === void 0 ? void 0 : _a.placeholderTextFont;
        this.inputStyle.placeholderTextColor = (_b = this.style) === null || _b === void 0 ? void 0 : _b.placeholderTextColor;
        this.inputStyle.textFont = (_c = this.style) === null || _c === void 0 ? void 0 : _c.searchTextFont;
        this.inputStyle.textColor = (_d = this.style) === null || _d === void 0 ? void 0 : _d.searchTextColor;
        this.iconStyle.iconTint = (_e = this.style) === null || _e === void 0 ? void 0 : _e.searchIconTint;
    }
    render() {
        return lit.html `<div class="search__Style" style= ${styleMap_js.styleMap(this.searchStyle())} >
          <cometchat-icon class="icon__style"  .URL=${this.searchIconURL} .style=${this.iconStyle}></cometchat-icon>
          <cometchat-input class="input__style" .searchCallback=${this.keyDownEvent}  placeholderText=${this.placeholderText} value=${this.searchText} .style=${this.inputStyle}></cometchat-input>
</div>`;
    }
    searchStyle() {
        var _a, _b, _c, _d, _e, _f;
        return {
            height: (_a = this.style) === null || _a === void 0 ? void 0 : _a.height,
            width: (_b = this.style) === null || _b === void 0 ? void 0 : _b.width,
            border: (_c = this.style) === null || _c === void 0 ? void 0 : _c.border,
            borderRadius: (_d = this.style) === null || _d === void 0 ? void 0 : _d.borderRadius,
            background: (_e = this.style) === null || _e === void 0 ? void 0 : _e.background,
            boxShadow: (_f = this.style) === null || _f === void 0 ? void 0 : _f.boxShadow
        };
    }
};
exports.CometChatSearch.styles = [
    lit.css `
    .search__Style{
      display: flex;
      align-items: center;

    }
    .input__style{
      display: flex;
      align-items: center;
      padding:2px 0px;
      width:100%;
    }
    .icon__style{margin-top:3px;}


    `
];
__decorate([
    decorators_js.property()
], exports.CometChatSearch.prototype, "name", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatSearch.prototype, "searchText", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatSearch.prototype, "placeholderText", void 0);
__decorate([
    decorators_js.property({ type: Function })
], exports.CometChatSearch.prototype, "searchCallback", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatSearch.prototype, "searchIconURL", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatSearch.prototype, "style", void 0);
exports.CometChatSearch = __decorate([
    decorators_js.customElement('cometchat-search')
], exports.CometChatSearch);

exports.CometChatModal = class CometChatModal extends lit.LitElement {
    constructor() {
        var _a;
        super();
        this.title = "";
        this.closeIconURL = "";
        this.onClose = () => { console.log("oppppssss"); };
        this.closeOnBackdropClick = true;
        this.style = {
            titleFont: "",
            titleColor: "",
            height: "266px",
            width: "300px",
            border: "",
            borderRadius: "",
            background: "white",
            closeIconTint: "",
            boxShadow: "",
        };
        this.iconStyle = {
            height: "24px",
            width: "24px",
            iconTint: "grey"
        };
        this.modalView = () => {
            if (this.onClose) {
                this.onClose();
            }
        };
        this.modalWrapperStyle = () => {
            var _a, _b, _c, _d, _e, _f;
            return {
                height: (_a = this.style) === null || _a === void 0 ? void 0 : _a.height,
                width: (_b = this.style) === null || _b === void 0 ? void 0 : _b.width,
                background: (_c = this.style) === null || _c === void 0 ? void 0 : _c.background,
                border: (_d = this.style) === null || _d === void 0 ? void 0 : _d.border,
                borderRadius: (_e = this.style) === null || _e === void 0 ? void 0 : _e.borderRadius,
                boxShadow: (_f = this.style) === null || _f === void 0 ? void 0 : _f.boxShadow
            };
        };
        this.titleStyle = () => {
            var _a, _b;
            return {
                font: (_a = this.style) === null || _a === void 0 ? void 0 : _a.titleFont,
                color: (_b = this.style) === null || _b === void 0 ? void 0 : _b.titleColor
            };
        };
        this.iconStyle.iconTint = (_a = this.style) === null || _a === void 0 ? void 0 : _a.closeIconTint;
    }
    render() {
        return lit.html `
     <cometchat-backdrop .onClick=${this.closeOnBackdropClick ? this.onClose : null}> </cometchat-backdrop>
      <div class="modal__wrapper"  style=${styleMap_js.styleMap(this.modalWrapperStyle())}>
     ${this.closeIconURL ? lit.html ` <span class="modal__close" @click=${this.modalView}  > <cometchat-icon .URL=${this.closeIconURL} .style=${this.iconStyle}></cometchat-icon></span>` : ""}
    ${this.title ? lit.html `  <div class="modal__body">  <div class="modal__caption" style=${styleMap_js.styleMap(this.titleStyle())} >
    ${this.title}
   </div>` : ""}
     <slot></slot>
    </div>
      </div>
      `;
    }
};
exports.CometChatModal.styles = [
    lit.css `
    .modal__wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      margin: 0 auto;
      border-radius: 8px;
      position: fixed;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
    }
    .modal__close {
      position: absolute;
      width: 24px;
      height: 24px;
      border-radius: 8px;
      top: 24px;
      right: 28px;
      cursor: pointer;
    }
    .modal__body {
      padding: 25px;
      width: 100%;
      height: 90%;
      border-collapse: collapse;
      margin: 0;
    }
   .modal__caption {
      margin-bottom: 15px;
      text-align: center;
    }
    `
];
__decorate([
    decorators_js.property()
], exports.CometChatModal.prototype, "title", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatModal.prototype, "closeIconURL", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatModal.prototype, "onClose", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatModal.prototype, "closeOnBackdropClick", void 0);
__decorate([
    decorators_js.property({ type: Object })
], exports.CometChatModal.prototype, "style", void 0);
exports.CometChatModal = __decorate([
    decorators_js.customElement('cometchat-modal')
], exports.CometChatModal);

exports.CometChatMenuList = class CometChatMenuList extends lit.LitElement {
    constructor() {
        super(...arguments);
        this.data = null;
        this.moreIconURL = `../../../assets/read.svg`; //Image URL for more icon
        this.mainMenuLimit = 2;
        this.style = {
            width: "",
            height: "",
            border: "",
            borderRadius: "",
            background: "transparent",
            moreIconTint: "",
            textFont: "",
            textColor: "",
            iconTint: "",
            iconBackground: "",
            iconBorder: "",
            iconBorderRadius: "",
        }; //CSS properties
        this.subMenuStyle = {
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "12px",
            background: "rgb(20, 20, 20)",
            textFont: "",
            textColor: "",
            iconTint: "",
            iconBackground: "",
            iconBorder: "",
            iconBorderRadius: "",
        };
        this.isOpen = true;
        this.mainMenuList = [];
        this.subMenuList = [];
        this.isShown = false; // hidden by defaul
    }
    connectedCallback() {
        this.mainMenuList = this.mainMenuItems();
        this.subMenuList = this.subMenuItems();
        super.connectedCallback();
    }
    updated(_changedProperties) {
        if (!this.isOpen) {
            this.isShown = false;
        }
        super.updated(_changedProperties);
    }
    onMenuItemClick(item, e) {
        this.isOpen = false;
        this.isShown = false;
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
        if (this.data) {
            item.callBack(this.data, e);
        }
        else {
            item.callBack();
        }
    }
    /**
     * hide show submenu on click of more icon
     * @param  {any} e
     */
    toggleShow(e) {
        debugger;
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
        this.isShown = !this.isShown;
    }
    // filtering main menu options from list 
    mainMenuItems() {
        var _a;
        const defaultNumber = this.mainMenuLimit - 1;
        return (_a = this.list) === null || _a === void 0 ? void 0 : _a.filter((item, i) => {
            return i <= defaultNumber;
        });
    }
    // filtering submenu options from list
    subMenuItems() {
        var _a;
        const defaultNumber = this.mainMenuLimit - 1;
        return (_a = this.list) === null || _a === void 0 ? void 0 : _a.filter((item, i) => {
            return i > defaultNumber;
        });
    }
    render() {
        return lit.html `<div class="menu__options" style=${styleMap_js.styleMap(this.mainMenuStyles())}">
      ${this.isOpen ? lit.html `   <ul class="list__menu__item" >
      ${this.mainMenuList.map((item) => lit.html ` <cometchat-button .onHoverText=${item.title} .iconURL=${item.iconURL}
        class="list__item__style" ></cometchat-button>`)}
  
  </ul>` : ""}
   
      <div class="more__icon">
       ${this.list && this.list.length > this.mainMenuLimit + 1 && this.isOpen ? lit.html `   <div class="moremenu__class"
       @click=${(e) => { this.toggleShow(e); }}>
       <cometchat-button
       class="list__item__style"
       .iconURL=${this.moreIconURL}
       style="menuStyle"
       ></cometchat-button>
   </div>` : ""}
         
      </div>
  </div>
  
${this.isShown ? lit.html `  <div >
<ul class="list__menu__item submenu_class"  style=${styleMap_js.styleMap(this.subMenuStyles())}>
${this.subMenuList.map((menu) => lit.html ` <cometchat-button  .onHoverText=${menu.title}  style="menuStyle" class="list__item__style"
  .iconURL=${menu.iconURL}  .title=${menu.title} >
</cometchat-button>`)}
   
</ul>
</div>` : ""}`;
    }
    // submenu style
    subMenuStyles() {
        return {
            ...this.subMenuStyle,
        };
    }
    // mainmenu style
    mainMenuStyles() {
        var _a, _b, _c;
        return {
            background: (_a = this.style) === null || _a === void 0 ? void 0 : _a.background,
            borderRadius: (_b = this.style) === null || _b === void 0 ? void 0 : _b.borderRadius,
            border: (_c = this.style) === null || _c === void 0 ? void 0 : _c.border
        };
    }
};
exports.CometChatMenuList.styles = [
    lit.css `
    .list__menu__item {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin: 0;
      padding-left: 0px;
      border-radius: inherit;
  
  }
  .menu__options {
      display: flex;
      align-items: center;
  }
  .more__icon{
      border-radius: inherit;
  }
  .moremenu__class{
      border-radius: inherit;
  }
  .submenu_class {
      display: flex;
      flex-direction: column;
      position: absolute;
      height: max-content;
      padding: 5px;
      width: max-content;
      max-height: 192px;
      z-index: 10;
      border-radius: 8px;
      overflow: visible;
      margin-top: 2px;
      right: 0;
  }
  .list__item__style{
      border-radius: inherit;
  }
    `
];
__decorate([
    decorators_js.property()
], exports.CometChatMenuList.prototype, "data", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatMenuList.prototype, "list", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatMenuList.prototype, "moreIconURL", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatMenuList.prototype, "mainMenuLimit", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatMenuList.prototype, "style", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatMenuList.prototype, "subMenuStyle", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatMenuList.prototype, "isOpen", void 0);
exports.CometChatMenuList = __decorate([
    decorators_js.customElement('cometchat-menu-list')
], exports.CometChatMenuList);

exports.CometChatLoader = class CometChatLoader extends lit.LitElement {
    constructor() {
        var _a;
        super();
        this.name = "spinner";
        this.iconURL = `src/components/assets/spinner.svg`;
        this.style = {
            height: "24px",
            width: "24px",
            border: "",
            borderRadius: "",
            background: "",
            iconTint: "grey"
        };
        this.iconStyle = {
            height: "24px",
            width: "24px",
            iconTint: "grey"
        };
        this.inputStyle = () => {
            var _a, _b, _c, _d, _e;
            return {
                height: (_a = this.style) === null || _a === void 0 ? void 0 : _a.height,
                width: (_b = this.style) === null || _b === void 0 ? void 0 : _b.width,
                border: (_c = this.style) === null || _c === void 0 ? void 0 : _c.border,
                borderRadius: (_d = this.style) === null || _d === void 0 ? void 0 : _d.borderRadius,
                background: (_e = this.style) === null || _e === void 0 ? void 0 : _e.background,
            };
        };
        this.iconStyle.iconTint = (_a = this.style) === null || _a === void 0 ? void 0 : _a.iconTint;
    }
    render() {
        if (this.iconURL) {
            return lit.html ` <div class="loader" style=${styleMap_js.styleMap(this.inputStyle())}><cometchat-icon .URL=${this.iconURL} .name=${this.name} .style=${this.iconStyle}></cometchat-icon></div>`;
        }
    }
};
exports.CometChatLoader.styles = [
    lit.css `
    .loader{
      display: flex;
      align-items: center;
      justify-content: center;
    }

    `
];
__decorate([
    decorators_js.property()
], exports.CometChatLoader.prototype, "name", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatLoader.prototype, "iconURL", void 0);
__decorate([
    decorators_js.property({ type: Object })
], exports.CometChatLoader.prototype, "style", void 0);
exports.CometChatLoader = __decorate([
    decorators_js.customElement('cometchat-loader')
], exports.CometChatLoader);

exports.CometChatListItem = class CometChatListItem extends lit.LitElement {
    constructor() {
        super(...arguments);
        this.id = "";
        this.avatarURL = "";
        this.avatarName = "";
        this.statusIndicatorColor = "";
        this.statusIndicatorIcon = "";
        this.avatarStyle = {
            borderRadius: "16px",
            width: "28px",
            height: "28px",
            border: "none",
            backgroundColor: "white",
            textColor: "rgb(20,20,20)",
            backgroundSize: "cover",
            textFont: "500 16px Inter",
            outerView: "",
            outerViewSpacing: "",
        };
        this.statusIndicatorStyle = {
            borderRadius: "16px",
            width: "10px",
            height: "10px",
            border: "none",
        };
        this.title = "raj dubey";
        this.isActive = false;
        this.clickCallback = () => { };
        this.dir = "ltr";
        this.style = {
            background: "white",
            titleColor: "",
            titleFont: "500 16px Inter",
            width: "",
            height: "50px",
            border: "1px solid grey",
            borderRadius: "2px",
            borderBottom: "1px solid grey",
            seperatorColor: "1px solid rgb(222 222 222 / 46%)",
            activeBackground: "#eeeeee",
            hoverBackground: "#eeeeee"
        }; //consists of all styling properties
        this.isHovering = false;
        this.hideShowTail = () => {
            this.isHovering = !this.isHovering;
            this.requestUpdate("isHovering", !this.isHovering);
        };
        this.setActiveItem = (e) => {
            if (this.clickCallback) {
                this.clickCallback(this.id);
            }
            this.requestUpdate("isActive");
        };
        this.dividerStyles = {
            height: "1px",
            width: "100%",
            background: "grey"
        };
        this.listItemStyles = {
            listItemStyle: () => {
                var _a, _b, _c, _d, _e;
                return {
                    height: (_a = this.style) === null || _a === void 0 ? void 0 : _a.height,
                    width: (_b = this.style) === null || _b === void 0 ? void 0 : _b.width,
                    // border:this.style?.border,
                    borderRadius: (_c = this.style) === null || _c === void 0 ? void 0 : _c.borderRadius,
                    background: this.isHovering || this.isActive ? (_d = this.style) === null || _d === void 0 ? void 0 : _d.activeBackground : (_e = this.style) === null || _e === void 0 ? void 0 : _e.background
                };
            },
            itemDetailStyle: (style) => {
                const padding = { paddingLeft: "8px" };
                return {
                    width: "70%",
                    flexGrow: "1",
                    ...padding,
                };
            },
            titleStyle: (style) => {
                return {
                    font: style.titleFont,
                    color: style.titleColor,
                };
            },
            dividerStyle: () => {
                var _a;
                return {
                    marginLeft: ((_a = this.avatarStyle) === null || _a === void 0 ? void 0 : _a.height) || "36px",
                    marginRight: "8px"
                };
            }
        };
    }
    requestUpdate(name, oldValue, options) {
        super.requestUpdate();
    }
    render() {
        this.dividerStyles.background = this.style.seperatorColor || "grey";
        return lit.html ` 
    <div class="list__item" 
style=" ${styleMap_js.styleMap(this.listItemStyles.listItemStyle())}" data-id="id" @mouseenter=${this.hideShowTail} @mouseleave=${this.hideShowTail} @click=${this.setActiveItem}>
<div class="item__thumbnail">
<cometchat-avatar  .image="${this.avatarURL}" .name="${this.avatarName}" .style=${this.avatarStyle} >
</cometchat-avatar> 
  
<cometchat-status-indicator
  .backgroundColor="${this.statusIndicatorColor}" .backgroundImage="${this.statusIndicatorIcon}" .style=${this.statusIndicatorStyle}
>
</cometchat-status-indicator>
</div>
<div class="item__details">

<div class="item__title" style="${styleMap_js.styleMap(this.listItemStyles.itemDetailStyle(this.style))}">
  <div class="item__innerTitle" style="${styleMap_js.styleMap(this.listItemStyles.titleStyle(this.style))}">
  ${this.title}
  </div>
  <div> <slot name="subtitleView"></slot> </div>

</div>

<div class="tail__view">
${!this.isHovering ? lit.html `<slot name="tailView"> </slot>` : ""}
</div>

<div class="menu__view">
${this.isHovering ? lit.html `<slot name="menuView"> </slot>` : ""}

</div>
</div>

</div>
${!this.hideSeparator ? lit.html `<div class-"divider__style" style=${styleMap_js.styleMap(this.listItemStyles.dividerStyle())}> <cometchat-divider .style=${this.dividerStyles}></cometchat-divider> </div>` : lit.nothing}

    `;
    }
};
exports.CometChatListItem.styles = [
    lit.css `
    *{box-sizing:border-box;}
    .item__details{
    display: flex;
    justify-content: space-between;
    width:100%;
    }
    .tail__view{
      display: flex;
    justify-content: center;
    align-items: center;
    }
    .menu__view{
      display: flex;
    justify-content: center;
    align-items: center;
    }
    .list__item{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
      position: relative;
      padding: 0 8px;
      
  
    }
    .item__thumbnail {
      display: flex;
      flex-direction: column;
      width: fit-content;
      height: auto;
      flex-shrink: 0;
      position: relative;
    }
    `
];
__decorate([
    decorators_js.property()
], exports.CometChatListItem.prototype, "id", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatListItem.prototype, "avatarURL", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatListItem.prototype, "avatarName", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatListItem.prototype, "statusIndicatorColor", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatListItem.prototype, "statusIndicatorIcon", void 0);
__decorate([
    decorators_js.property({ type: Object })
], exports.CometChatListItem.prototype, "avatarStyle", void 0);
__decorate([
    decorators_js.property({ type: Object })
], exports.CometChatListItem.prototype, "statusIndicatorStyle", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatListItem.prototype, "title", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatListItem.prototype, "options", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatListItem.prototype, "tail", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatListItem.prototype, "hideSeparator", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatListItem.prototype, "isActive", void 0);
__decorate([
    decorators_js.property({ type: Function })
], exports.CometChatListItem.prototype, "clickCallback", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatListItem.prototype, "dir", void 0);
__decorate([
    decorators_js.property({ type: Object })
], exports.CometChatListItem.prototype, "style", void 0);
exports.CometChatListItem = __decorate([
    decorators_js.customElement('cometchat-list-item')
], exports.CometChatListItem);

exports.CometChatConfirmDialog = class CometChatConfirmDialog extends lit.LitElement {
    constructor() {
        super(...arguments);
        this.title = "Delerte Conversation?";
        this.messageText = "Would you like to delete this conversation?  This conversation will be deleted from all of your devices.";
        this.cancelButtonText = "Cancel";
        this.confirmButtonText = "Delete";
        this.cancelButtonIconURL = "";
        this.confirmButtonIconURL = "";
        this.style = {
            titleFont: "",
            titleColor: "",
            height: "100",
            width: "100%",
            background: "white",
            borderRadius: "8px",
            border: "1px solid grey",
            boxShadow: "",
            messageTextFont: "",
            messageTextColor: "",
            confirmButtonTextFont: "",
            confirmButtonTextColor: "white",
            confirmButtonBackground: "red",
            confirmButtonIconTint: "",
            cancelButtonTextColor: "",
            cancelButtonTextFont: "",
            cancelButtonBackground: "",
            cancelButtonIconTint: "",
        }; //styling style
        this.loadingIconURL = "assets/resources/Spinner.svg";
        /**
       * loading icon wrapper style
       * @param  {string} state
       */
        this.dialogWrapperStyle = () => {
            var _a, _b, _c, _d, _e;
            return {
                height: (_a = this.style) === null || _a === void 0 ? void 0 : _a.height,
                width: (_b = this.style) === null || _b === void 0 ? void 0 : _b.width,
                background: (_c = this.style) === null || _c === void 0 ? void 0 : _c.background,
                border: (_d = this.style) === null || _d === void 0 ? void 0 : _d.border,
                borderRadius: (_e = this.style) === null || _e === void 0 ? void 0 : _e.borderRadius,
            };
        };
        this.dialogFormStyle = () => {
            const display = { display: "flex" };
            return {
                ...display,
            };
        };
        // subtitle styles
        this.dialogMessageStyle = () => {
            var _a, _b;
            return {
                textAlign: "center",
                lineHeight: "1.6",
                font: (_a = this.style) === null || _a === void 0 ? void 0 : _a.messageTextFont,
                letterSpacing: "-0.1",
                color: (_b = this.style) === null || _b === void 0 ? void 0 : _b.messageTextColor,
            };
        };
        this.buttonConfirmStyle = () => {
            var _a, _b, _c;
            return {
                font: (_a = this.style) === null || _a === void 0 ? void 0 : _a.confirmButtonTextFont,
                background: (_b = this.style) === null || _b === void 0 ? void 0 : _b.confirmButtonBackground,
                color: (_c = this.style) === null || _c === void 0 ? void 0 : _c.confirmButtonTextColor,
            };
        };
        this.buttonCancelStyle = () => {
            var _a, _b, _c;
            return {
                color: (_a = this.style) === null || _a === void 0 ? void 0 : _a.cancelButtonTextColor,
                font: (_b = this.style) === null || _b === void 0 ? void 0 : _b.cancelButtonTextFont,
                background: (_c = this.style) === null || _c === void 0 ? void 0 : _c.cancelButtonBackground,
            };
        };
    }
    connectedCallback() {
        super.connectedCallback();
    }
    render() {
        return lit.html `<div class="confirm__dialog" style=${styleMap_js.styleMap(this.dialogWrapperStyle())} >
    <div class="dialog__form" >
        <div class="dialog__title" style=${styleMap_js.styleMap(this.dialogTitleStyle())}>
        ${this.title}
        </div>
        <div class="dialog__message" style=${styleMap_js.styleMap(this.dialogMessageStyle())}>
            ${this.messageText}
        </div>
        <div class="dialog__buttons">
            <button type="button" class="button__confirm" style=${styleMap_js.styleMap(this.buttonConfirmStyle())} @click=${this.onConfirm}>
            ${this.confirmButtonText}
            </button>
            <button type="button" class="button__cancel" style=${styleMap_js.styleMap(this.buttonCancelStyle())} @click=${this.onCancel}>
            ${this.cancelButtonText}
            </button>
        </div>
    </div>
</div>`;
    }
    // title message style
    dialogTitleStyle() {
        var _a, _b;
        return {
            font: (_a = this.style) === null || _a === void 0 ? void 0 : _a.titleFont,
            color: (_b = this.style) === null || _b === void 0 ? void 0 : _b.titleColor,
        };
    }
};
exports.CometChatConfirmDialog.styles = [
    lit.css `
    .confirm__dialog {
      margin: 0 auto;
      padding: 16px;
      height: 100%;
      width: 100%;
      box-sizing:border-box;
    }
    .dialog__form{
      justify-content: flex-start;
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .dialog__loading__wrapper {
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 100%;
    }
    .dialog__title {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 3px 10px 19px 10px;
    }
    button{
      height: 42px;
      border: none;
      letter-spacing: 0.1px;
      width: 100%;
      margin: 5px 0;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
    }
    .dialog__message {
      width: 100%;
      line-height: 22px !important;
    }
    .dialog__buttons {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 24px 0 0 0;
      width: 100%;
    }
    `
];
__decorate([
    decorators_js.property()
], exports.CometChatConfirmDialog.prototype, "title", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatConfirmDialog.prototype, "messageText", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatConfirmDialog.prototype, "cancelButtonText", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatConfirmDialog.prototype, "confirmButtonText", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatConfirmDialog.prototype, "cancelButtonIconURL", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatConfirmDialog.prototype, "confirmButtonIconURL", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatConfirmDialog.prototype, "onConfirm", void 0);
__decorate([
    decorators_js.property()
], exports.CometChatConfirmDialog.prototype, "onCancel", void 0);
__decorate([
    decorators_js.property({ type: Object })
], exports.CometChatConfirmDialog.prototype, "style", void 0);
exports.CometChatConfirmDialog = __decorate([
    decorators_js.customElement('cometchat-confirm-dialog')
], exports.CometChatConfirmDialog);

exports.CometChatDivider = class CometChatDivider extends lit.LitElement {
    constructor() {
        super(...arguments);
        this.style = {
            height: "1px",
            width: "100%",
            background: "grey"
        }; //Styles applied to the backdrop element
    }
    render() {
        return lit.html `<div class="divider__Style" style= ${styleMap_js.styleMap(this.dividerStyle())}>
</div>`;
    }
    dividerStyle() {
        var _a, _b, _c;
        return {
            height: (_a = this.style) === null || _a === void 0 ? void 0 : _a.height,
            width: (_b = this.style) === null || _b === void 0 ? void 0 : _b.width,
            background: (_c = this.style) === null || _c === void 0 ? void 0 : _c.background,
        };
    }
};
exports.CometChatDivider.styles = [
    lit.css `
   .divider__Style{
     margin:2px 0;
   }
    `
];
__decorate([
    decorators_js.property({ type: Object })
], exports.CometChatDivider.prototype, "style", void 0);
exports.CometChatDivider = __decorate([
    decorators_js.customElement('cometchat-divider')
], exports.CometChatDivider);

exports.CometChatButtonGroup = class CometChatButtonGroup extends lit.LitElement {
    constructor() {
        super(...arguments);
        this.data = [];
        this.style = {
            height: "100%",
            width: "100%",
            border: "1px solid #ededed",
            borderRadius: "12px",
            background: "",
            iconTint: "grey",
            buttonTextFont: "400 11px Inter",
            buttonTextColor: "black",
            buttonBorder: "none",
            buttonBorderRadius: "12px",
            buttonBackground: "white",
        };
        this.btnStyle = {};
    }
    connectedCallback() {
        var _a, _b, _c, _d, _e, _f;
        super.connectedCallback();
        this.btnStyle = {
            buttonTextFont: (_a = this.style) === null || _a === void 0 ? void 0 : _a.buttonTextFont,
            buttonTextColor: (_b = this.style) === null || _b === void 0 ? void 0 : _b.buttonTextColor,
            buttonIconTint: (_c = this.style) === null || _c === void 0 ? void 0 : _c.iconTint,
            border: (_d = this.style) === null || _d === void 0 ? void 0 : _d.buttonBorder,
            borderRadius: (_e = this.style) === null || _e === void 0 ? void 0 : _e.buttonBorderRadius,
            background: (_f = this.style) === null || _f === void 0 ? void 0 : _f.buttonBackground
        };
    }
    render() {
        if (this.data.length >= 1) {
            return lit.html `<ul class="button__group" role="group" aria-label="menu" style=${styleMap_js.styleMap(this.buttonStyle())}>         
    ${this.data.map((button) => lit.html `<li><cometchat-button .style=${this.btnStyle} .text=${button.buttonText} .hoverText=${button.hoverText}  .iconURL=${button.iconURL} .onClick=${() => { button.onClick(button === null || button === void 0 ? void 0 : button.id); }}></cometchat-button></li>`)}
</ul>`;
        }
        else {
            return null;
        }
    }
    buttonStyle() {
        var _a, _b, _c, _d, _e;
        return {
            height: (_a = this.style) === null || _a === void 0 ? void 0 : _a.height,
            width: (_b = this.style) === null || _b === void 0 ? void 0 : _b.width,
            border: (_c = this.style) === null || _c === void 0 ? void 0 : _c.border,
            borderRadius: (_d = this.style) === null || _d === void 0 ? void 0 : _d.borderRadius,
            background: (_e = this.style) === null || _e === void 0 ? void 0 : _e.background,
            ...this.style
        };
    }
};
exports.CometChatButtonGroup.styles = [
    lit.css `
    .button__group{
      display:flex;
      flex-direction:row
      justify-content: center;
      align-items: center;
      padding:2px 6px;
    }
    li{ list-style: none;}
    `
];
__decorate([
    decorators_js.property({ type: Array })
], exports.CometChatButtonGroup.prototype, "data", void 0);
__decorate([
    decorators_js.property({ type: Object })
], exports.CometChatButtonGroup.prototype, "style", void 0);
exports.CometChatButtonGroup = __decorate([
    decorators_js.customElement('cometchat-button-group')
], exports.CometChatButtonGroup);
