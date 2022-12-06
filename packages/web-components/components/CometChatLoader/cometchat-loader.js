var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
let CometChatLoader = class CometChatLoader extends LitElement {
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
            return html ` <div class="loader" style=${styleMap(this.inputStyle())}><cometchat-icon .URL=${this.iconURL} .name=${this.name} .style=${this.iconStyle}></cometchat-icon></div>`;
        }
    }
};
CometChatLoader.styles = [
    css `
    .loader{
      display: flex;
      align-items: center;
      justify-content: center;
    }

    `
];
__decorate([
    property()
], CometChatLoader.prototype, "name", void 0);
__decorate([
    property()
], CometChatLoader.prototype, "iconURL", void 0);
__decorate([
    property({ type: Object })
], CometChatLoader.prototype, "style", void 0);
CometChatLoader = __decorate([
    customElement('cometchat-loader')
], CometChatLoader);
export { CometChatLoader };
//# sourceMappingURL=cometchat-loader.js.map