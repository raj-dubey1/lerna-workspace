var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
let CometChatConfirmDialog = class CometChatConfirmDialog extends LitElement {
    constructor() {
        super(...arguments);
        this.title = "Delerte Conversation?";
        this.messageText = "Would you like to delete this conversation?  This conversation will be deleted from all of your devices.";
        this.cancelButtonText = "Cancel";
        this.confirmButtonText = "Delete";
        this.cancelButtonIconURL = "";
        this.confirmButtonIconURL = "";
        this.style = {
            titleFont: "",
            titleColor: "",
            height: "100",
            width: "100%",
            background: "white",
            borderRadius: "8px",
            border: "1px solid grey",
            boxShadow: "",
            messageTextFont: "",
            messageTextColor: "",
            confirmButtonTextFont: "",
            confirmButtonTextColor: "white",
            confirmButtonBackground: "red",
            confirmButtonIconTint: "",
            cancelButtonTextColor: "",
            cancelButtonTextFont: "",
            cancelButtonBackground: "",
            cancelButtonIconTint: "",
        }; //styling style
        this.loadingIconURL = "assets/resources/Spinner.svg";
        /**
       * loading icon wrapper style
       * @param  {string} state
       */
        this.dialogWrapperStyle = () => {
            var _a, _b, _c, _d, _e;
            return {
                height: (_a = this.style) === null || _a === void 0 ? void 0 : _a.height,
                width: (_b = this.style) === null || _b === void 0 ? void 0 : _b.width,
                background: (_c = this.style) === null || _c === void 0 ? void 0 : _c.background,
                border: (_d = this.style) === null || _d === void 0 ? void 0 : _d.border,
                borderRadius: (_e = this.style) === null || _e === void 0 ? void 0 : _e.borderRadius,
            };
        };
        this.dialogFormStyle = () => {
            const display = { display: "flex" };
            return {
                ...display,
            };
        };
        // subtitle styles
        this.dialogMessageStyle = () => {
            var _a, _b;
            return {
                textAlign: "center",
                lineHeight: "1.6",
                font: (_a = this.style) === null || _a === void 0 ? void 0 : _a.messageTextFont,
                letterSpacing: "-0.1",
                color: (_b = this.style) === null || _b === void 0 ? void 0 : _b.messageTextColor,
            };
        };
        this.buttonConfirmStyle = () => {
            var _a, _b, _c;
            return {
                font: (_a = this.style) === null || _a === void 0 ? void 0 : _a.confirmButtonTextFont,
                background: (_b = this.style) === null || _b === void 0 ? void 0 : _b.confirmButtonBackground,
                color: (_c = this.style) === null || _c === void 0 ? void 0 : _c.confirmButtonTextColor,
            };
        };
        this.buttonCancelStyle = () => {
            var _a, _b, _c;
            return {
                color: (_a = this.style) === null || _a === void 0 ? void 0 : _a.cancelButtonTextColor,
                font: (_b = this.style) === null || _b === void 0 ? void 0 : _b.cancelButtonTextFont,
                background: (_c = this.style) === null || _c === void 0 ? void 0 : _c.cancelButtonBackground,
            };
        };
    }
    connectedCallback() {
        super.connectedCallback();
    }
    render() {
        return html `<div class="confirm__dialog" style=${styleMap(this.dialogWrapperStyle())} >
    <div class="dialog__form" >
        <div class="dialog__title" style=${styleMap(this.dialogTitleStyle())}>
        ${this.title}
        </div>
        <div class="dialog__message" style=${styleMap(this.dialogMessageStyle())}>
            ${this.messageText}
        </div>
        <div class="dialog__buttons">
            <button type="button" class="button__confirm" style=${styleMap(this.buttonConfirmStyle())} @click=${this.onConfirm}>
            ${this.confirmButtonText}
            </button>
            <button type="button" class="button__cancel" style=${styleMap(this.buttonCancelStyle())} @click=${this.onCancel}>
            ${this.cancelButtonText}
            </button>
        </div>
    </div>
</div>`;
    }
    // title message style
    dialogTitleStyle() {
        var _a, _b;
        return {
            font: (_a = this.style) === null || _a === void 0 ? void 0 : _a.titleFont,
            color: (_b = this.style) === null || _b === void 0 ? void 0 : _b.titleColor,
        };
    }
};
CometChatConfirmDialog.styles = [
    css `
    .confirm__dialog {
      margin: 0 auto;
      padding: 16px;
      height: 100%;
      width: 100%;
      box-sizing:border-box;
    }
    .dialog__form{
      justify-content: flex-start;
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .dialog__loading__wrapper {
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 100%;
    }
    .dialog__title {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 3px 10px 19px 10px;
    }
    button{
      height: 42px;
      border: none;
      letter-spacing: 0.1px;
      width: 100%;
      margin: 5px 0;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
    }
    .dialog__message {
      width: 100%;
      line-height: 22px !important;
    }
    .dialog__buttons {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 24px 0 0 0;
      width: 100%;
    }
    `
];
__decorate([
    property()
], CometChatConfirmDialog.prototype, "title", void 0);
__decorate([
    property()
], CometChatConfirmDialog.prototype, "messageText", void 0);
__decorate([
    property()
], CometChatConfirmDialog.prototype, "cancelButtonText", void 0);
__decorate([
    property()
], CometChatConfirmDialog.prototype, "confirmButtonText", void 0);
__decorate([
    property()
], CometChatConfirmDialog.prototype, "cancelButtonIconURL", void 0);
__decorate([
    property()
], CometChatConfirmDialog.prototype, "confirmButtonIconURL", void 0);
__decorate([
    property()
], CometChatConfirmDialog.prototype, "onConfirm", void 0);
__decorate([
    property()
], CometChatConfirmDialog.prototype, "onCancel", void 0);
__decorate([
    property({ type: Object })
], CometChatConfirmDialog.prototype, "style", void 0);
CometChatConfirmDialog = __decorate([
    customElement('cometchat-confirm-dialog')
], CometChatConfirmDialog);
export { CometChatConfirmDialog };
//# sourceMappingURL=cometchat-confirm-dialog.js.map