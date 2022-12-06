var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
let CometChatLabel = class CometChatLabel extends LitElement {
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
        return html ` <label dir=${this.dir} style=${styleMap(this.labelStyle())}> ${this.text} </label>`;
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
CometChatLabel.styles = [
    css `
    `
];
__decorate([
    property()
], CometChatLabel.prototype, "text", void 0);
__decorate([
    property()
], CometChatLabel.prototype, "dir", void 0);
__decorate([
    property({ type: Object })
], CometChatLabel.prototype, "style", void 0);
CometChatLabel = __decorate([
    customElement('cometchat-label')
], CometChatLabel);
export { CometChatLabel };
//# sourceMappingURL=cometchat-label.js.map