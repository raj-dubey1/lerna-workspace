var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
let CometChatInput = class CometChatInput extends LitElement {
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
        return html `  ${!this.value && this.type != "checkbox" ? html ` <cometchat-label .dir=${this.dir}  class="label__style"  text="${this.placeholderText}" style=${styleMap(this.placeholderStyle())} ></cometchat-label>` : ""} 
      <input dir=${this.dir}  @input="${(e) => { this.keyDownCallback(e); }}" class="input__style" id="input" type="${this.type}" ?hidden=${this.hidden}  accept=${this.accept} ?multiple=${this.multiple}   value=${this.value}  style=${styleMap(this.inputStyle())}   />`;
    }
};
CometChatInput.styles = [
    css `
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
    property({ type: Boolean })
], CometChatInput.prototype, "disabled", void 0);
__decorate([
    property()
], CometChatInput.prototype, "value", void 0);
__decorate([
    property()
], CometChatInput.prototype, "type", void 0);
__decorate([
    property({ type: Boolean })
], CometChatInput.prototype, "checked", void 0);
__decorate([
    property()
], CometChatInput.prototype, "placeholderText", void 0);
__decorate([
    property({ type: Boolean })
], CometChatInput.prototype, "hidden", void 0);
__decorate([
    property({ type: Boolean })
], CometChatInput.prototype, "multiple", void 0);
__decorate([
    property()
], CometChatInput.prototype, "accept", void 0);
__decorate([
    property({ type: Function })
], CometChatInput.prototype, "searchCallback", void 0);
__decorate([
    property()
], CometChatInput.prototype, "dir", void 0);
__decorate([
    property({ type: Object })
], CometChatInput.prototype, "style", void 0);
CometChatInput = __decorate([
    customElement('cometchat-input')
], CometChatInput);
export { CometChatInput };
//# sourceMappingURL=cometchat-input.js.map