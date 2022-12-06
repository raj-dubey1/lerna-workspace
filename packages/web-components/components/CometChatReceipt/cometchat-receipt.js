var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let CometChatReceipt = class CometChatReceipt extends LitElement {
    constructor() {
        super(...arguments);
        this.waitIcon = `../../assets/wait.svg`;
        this.sentIcon = `../../assets/message-sent.svg`;
        this.deliveredIcon = `../../assets/message-delivered.svg`;
        this.readIcon = `../../assets/message-read.svg`;
        this.errorIcon = `../../assets/warning-small.svg`;
        this.receipt = receipts.wait;
        this.icon = '';
    }
    connectedCallback() {
        if (this.receipt == receipts.error) {
            this.icon = this.errorIcon;
        }
        else if (this.receipt == receipts.sent) {
            this.icon = this.sentIcon;
        }
        else if (this.receipt == receipts.delivered) {
            this.icon = this.deliveredIcon;
        }
        else if (this.receipt == receipts.read) {
            this.icon = this.readIcon;
        }
        else if (this.receipt == receipts.wait) {
            this.icon = this.waitIcon;
        }
        super.connectedCallback();
    }
    render() {
        if (this.icon) {
            return html `<cometchat-icon iconURL=${this.icon}></cometchat-icon>`;
        }
    }
};
CometChatReceipt.styles = [
    css `
      i {
        display: flex;
        justify-content: center;
      }
      `
];
__decorate([
    property()
], CometChatReceipt.prototype, "waitIcon", void 0);
__decorate([
    property()
], CometChatReceipt.prototype, "sentIcon", void 0);
__decorate([
    property()
], CometChatReceipt.prototype, "deliveredIcon", void 0);
__decorate([
    property()
], CometChatReceipt.prototype, "readIcon", void 0);
__decorate([
    property()
], CometChatReceipt.prototype, "errorIcon", void 0);
__decorate([
    property()
], CometChatReceipt.prototype, "receipt", void 0);
CometChatReceipt = __decorate([
    customElement('cometchat-receipt')
], CometChatReceipt);
export { CometChatReceipt };
export var receipts;
(function (receipts) {
    receipts[receipts["wait"] = 0] = "wait";
    receipts[receipts["sent"] = 1] = "sent";
    receipts[receipts["delivered"] = 2] = "delivered";
    receipts[receipts["read"] = 3] = "read";
    receipts[receipts["error"] = 4] = "error";
})(receipts || (receipts = {}));
//# sourceMappingURL=cometchat-receipt.js.map