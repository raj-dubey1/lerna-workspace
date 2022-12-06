var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
let CometChatBadge = class CometChatBadge extends LitElement {
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
            return html `<div style=${styleMap(this.getStyle())} class="unread__count"> ${this.count} </div>`;
        }
    }
};
CometChatBadge.styles = [
    css `
    .unread__count{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2px;
    }
    `
];
__decorate([
    property({ type: Number })
], CometChatBadge.prototype, "count", void 0);
__decorate([
    property({ type: Object })
], CometChatBadge.prototype, "style", void 0);
CometChatBadge = __decorate([
    customElement('cometchat-badge')
], CometChatBadge);
export { CometChatBadge };
//# sourceMappingURL=cometchat-badge.js.map