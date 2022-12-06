var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
let CometChatModal = class CometChatModal extends LitElement {
    constructor() {
        var _a;
        super();
        this.title = "";
        this.closeIconURL = "";
        this.onClose = () => { console.log("oppppssss"); };
        this.closeOnBackdropClick = true;
        this.style = {
            titleFont: "",
            titleColor: "",
            height: "266px",
            width: "300px",
            border: "",
            borderRadius: "",
            background: "white",
            closeIconTint: "",
            boxShadow: "",
        };
        this.iconStyle = {
            height: "24px",
            width: "24px",
            iconTint: "grey"
        };
        this.modalView = () => {
            if (this.onClose) {
                this.onClose();
            }
        };
        this.modalWrapperStyle = () => {
            var _a, _b, _c, _d, _e, _f;
            return {
                height: (_a = this.style) === null || _a === void 0 ? void 0 : _a.height,
                width: (_b = this.style) === null || _b === void 0 ? void 0 : _b.width,
                background: (_c = this.style) === null || _c === void 0 ? void 0 : _c.background,
                border: (_d = this.style) === null || _d === void 0 ? void 0 : _d.border,
                borderRadius: (_e = this.style) === null || _e === void 0 ? void 0 : _e.borderRadius,
                boxShadow: (_f = this.style) === null || _f === void 0 ? void 0 : _f.boxShadow
            };
        };
        this.titleStyle = () => {
            var _a, _b;
            return {
                font: (_a = this.style) === null || _a === void 0 ? void 0 : _a.titleFont,
                color: (_b = this.style) === null || _b === void 0 ? void 0 : _b.titleColor
            };
        };
        this.iconStyle.iconTint = (_a = this.style) === null || _a === void 0 ? void 0 : _a.closeIconTint;
    }
    render() {
        return html `
     <cometchat-backdrop .onClick=${this.closeOnBackdropClick ? this.onClose : null}> </cometchat-backdrop>
      <div class="modal__wrapper"  style=${styleMap(this.modalWrapperStyle())}>
     ${this.closeIconURL ? html ` <span class="modal__close" @click=${this.modalView}  > <cometchat-icon .URL=${this.closeIconURL} .style=${this.iconStyle}></cometchat-icon></span>` : ""}
    ${this.title ? html `  <div class="modal__body">  <div class="modal__caption" style=${styleMap(this.titleStyle())} >
    ${this.title}
   </div>` : ""}
     <slot></slot>
    </div>
      </div>
      `;
    }
};
CometChatModal.styles = [
    css `
    .modal__wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      margin: 0 auto;
      border-radius: 8px;
      position: fixed;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
    }
    .modal__close {
      position: absolute;
      width: 24px;
      height: 24px;
      border-radius: 8px;
      top: 24px;
      right: 28px;
      cursor: pointer;
    }
    .modal__body {
      padding: 25px;
      width: 100%;
      height: 90%;
      border-collapse: collapse;
      margin: 0;
    }
   .modal__caption {
      margin-bottom: 15px;
      text-align: center;
    }
    `
];
__decorate([
    property()
], CometChatModal.prototype, "title", void 0);
__decorate([
    property()
], CometChatModal.prototype, "closeIconURL", void 0);
__decorate([
    property()
], CometChatModal.prototype, "onClose", void 0);
__decorate([
    property()
], CometChatModal.prototype, "closeOnBackdropClick", void 0);
__decorate([
    property({ type: Object })
], CometChatModal.prototype, "style", void 0);
CometChatModal = __decorate([
    customElement('cometchat-modal')
], CometChatModal);
export { CometChatModal };
//# sourceMappingURL=cometchat-modal.js.map