var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
let CometChatButtonGroup = class CometChatButtonGroup extends LitElement {
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
            return html `<ul class="button__group" role="group" aria-label="menu" style=${styleMap(this.buttonStyle())}>         
    ${this.data.map((button) => html `<li><cometchat-button .style=${this.btnStyle} .text=${button.buttonText} .hoverText=${button.hoverText}  .iconURL=${button.iconURL} .onClick=${() => { button.onClick(button === null || button === void 0 ? void 0 : button.id); }}></cometchat-button></li>`)}
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
CometChatButtonGroup.styles = [
    css `
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
    property({ type: Array })
], CometChatButtonGroup.prototype, "data", void 0);
__decorate([
    property({ type: Object })
], CometChatButtonGroup.prototype, "style", void 0);
CometChatButtonGroup = __decorate([
    customElement('cometchat-button-group')
], CometChatButtonGroup);
export { CometChatButtonGroup };
//# sourceMappingURL=cometchat-button-group.js.map