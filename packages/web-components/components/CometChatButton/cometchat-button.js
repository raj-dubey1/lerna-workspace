var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
let CometChatButton = class CometChatButton extends LitElement {
    constructor() {
        super();
        this.disabled = false;
        this.text = "";
        this.iconURL = "";
        this.hoverText = "";
        this.onClick = () => {
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
        return html `<button class="button__Style" title=${this.hoverText} @click=${() => { this.onClick ? this.onClick() : null; }} style= ${styleMap(this.buttonStyle())}  ?disabled=${this.disabled} >${html `<cometchat-icon  .URL=${this.iconURL} .style=${this.iconStyle}></cometchat-icon>`} ${this.text}</button>`;
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
CometChatButton.styles = [
    css `
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
    property({ type: Boolean })
], CometChatButton.prototype, "disabled", void 0);
__decorate([
    property()
], CometChatButton.prototype, "text", void 0);
__decorate([
    property()
], CometChatButton.prototype, "iconURL", void 0);
__decorate([
    property()
], CometChatButton.prototype, "hoverText", void 0);
__decorate([
    property({ type: Function })
], CometChatButton.prototype, "onClick", void 0);
__decorate([
    property({ type: Object })
], CometChatButton.prototype, "style", void 0);
CometChatButton = __decorate([
    customElement('cometchat-button')
], CometChatButton);
export { CometChatButton };
//# sourceMappingURL=cometchat-button.js.map