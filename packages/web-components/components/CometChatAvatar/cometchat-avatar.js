var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
let CometChatAvatar = class CometChatAvatar extends LitElement {
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
            ;
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
        return html `<div style=${styleMap(this.getOuterViewStyle())}>
      <span style=${styleMap(this.getContainerStyle())} class="avatar__container">
        <span style=${styleMap(this.getImageStyle())} class="image__style"></span>
      </span>
    </div>`;
    }
};
CometChatAvatar.styles = [
    css `
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
    property()
], CometChatAvatar.prototype, "image", void 0);
__decorate([
    property()
], CometChatAvatar.prototype, "name", void 0);
__decorate([
    property({ type: Object })
], CometChatAvatar.prototype, "style", void 0);
CometChatAvatar = __decorate([
    customElement('cometchat-avatar')
], CometChatAvatar);
export { CometChatAvatar };
//# sourceMappingURL=cometchat-avatar.js.map