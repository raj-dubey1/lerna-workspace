var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
let CometChatDate = class CometChatDate extends LitElement {
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
        return html `<span style=${styleMap(this.DateStyles())}>${this.pattern()}</span>`;
    }
};
CometChatDate.styles = [
    css `
      `
];
__decorate([
    property({ type: Object })
], CometChatDate.prototype, "style", void 0);
__decorate([
    property({ type: Number })
], CometChatDate.prototype, "timestamp", void 0);
__decorate([
    property()
], CometChatDate.prototype, "pattern", void 0);
CometChatDate = __decorate([
    customElement('cometchat-date')
], CometChatDate);
export { CometChatDate };
//# sourceMappingURL=cometchat-date.js.map