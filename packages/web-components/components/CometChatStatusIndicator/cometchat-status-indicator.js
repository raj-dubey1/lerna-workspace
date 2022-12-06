var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
let CometChatStatusIndicator = class CometChatStatusIndicator extends LitElement {
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
        return html `<span style= ${styleMap(this.getStyle())} class="status__indictor"> </span>`;
    }
};
CometChatStatusIndicator.styles = [
    css `
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
    property()
], CometChatStatusIndicator.prototype, "backgroundColor", void 0);
__decorate([
    property()
], CometChatStatusIndicator.prototype, "backgroundImage", void 0);
__decorate([
    property({ type: Object })
], CometChatStatusIndicator.prototype, "style", void 0);
CometChatStatusIndicator = __decorate([
    customElement('cometchat-status-indicator')
], CometChatStatusIndicator);
export { CometChatStatusIndicator };
//# sourceMappingURL=cometchat-status-indicator.js.map