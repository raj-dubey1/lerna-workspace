var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
let CometChatDivider = class CometChatDivider extends LitElement {
    constructor() {
        super(...arguments);
        this.style = {
            height: "1px",
            width: "100%",
            background: "grey"
        }; //Styles applied to the backdrop element
    }
    render() {
        return html `<div class="divider__Style" style= ${styleMap(this.dividerStyle())}>
</div>`;
    }
    dividerStyle() {
        var _a, _b, _c;
        return {
            height: (_a = this.style) === null || _a === void 0 ? void 0 : _a.height,
            width: (_b = this.style) === null || _b === void 0 ? void 0 : _b.width,
            background: (_c = this.style) === null || _c === void 0 ? void 0 : _c.background,
        };
    }
};
CometChatDivider.styles = [
    css `
   .divider__Style{
     margin:2px 0;
   }
    `
];
__decorate([
    property({ type: Object })
], CometChatDivider.prototype, "style", void 0);
CometChatDivider = __decorate([
    customElement('cometchat-divider')
], CometChatDivider);
export { CometChatDivider };
//# sourceMappingURL=cometchat-divider.js.map