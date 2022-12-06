var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
let CometChatIcon = class CometChatIcon extends LitElement {
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
            return html ` <div class="icon__style" style=${styleMap(this.iconStyle())} title=${this.name}></div>`;
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
CometChatIcon.styles = [
    css `
    `
];
__decorate([
    property()
], CometChatIcon.prototype, "name", void 0);
__decorate([
    property()
], CometChatIcon.prototype, "URL", void 0);
__decorate([
    property({ type: Object })
], CometChatIcon.prototype, "style", void 0);
CometChatIcon = __decorate([
    customElement('cometchat-icon')
], CometChatIcon);
export { CometChatIcon };
//# sourceMappingURL=cometchat-icon.js.map