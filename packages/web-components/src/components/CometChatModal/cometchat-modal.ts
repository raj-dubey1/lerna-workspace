import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
@customElement('cometchat-modal')
export class CometChatModal extends LitElement {
  @property() title: string = "";
  @property() closeIconURL: string = "";
  @property() onClose: any = () => { console.log("oppppssss") };
  @property() closeOnBackdropClick: boolean = true;
  @property({ type: Object }) style: any = {
    titleFont: "",
    titleColor: "",
    height: "266px",
    width: "300px",
    border: "",
    borderRadius: "",
    background: "white",
    closeIconTint: "",
    boxShadow: "",
  }
  public iconStyle: any = {
    height: "24px",
    width: "24px",
    iconTint: "grey"
  }
  constructor() {
    super()
    this.iconStyle.iconTint = this.style?.closeIconTint;
  }
  static styles = [
    css`
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
  render() {
    return html`
     <cometchat-backdrop .onClick=${this.closeOnBackdropClick ? this.onClose : null}> </cometchat-backdrop>
      <div class="modal__wrapper"  style=${styleMap(this.modalWrapperStyle())}>
     ${this.closeIconURL ? html` <span class="modal__close" @click=${this.modalView}  > <cometchat-icon .URL=${this.closeIconURL} .style=${this.iconStyle}></cometchat-icon></span>` : ""}
    ${this.title ? html`  <div class="modal__body">  <div class="modal__caption" style=${styleMap(this.titleStyle())} >
    ${this.title}
   </div>`: ""}
     <slot></slot>
    </div>
      </div>
      `
  }
  modalView = () => {
    if (this.onClose) {
      this.onClose()
    }
  }
  modalWrapperStyle = () => {
    return {
      height: this.style?.height,
      width: this.style?.width,
      background: this.style?.background,
      border: this.style?.border,
      borderRadius: this.style?.borderRadius,
      boxShadow: this.style?.boxShadow
    }
  }
  titleStyle = () => {
    return {
      font: this.style?.titleFont,
      color: this.style?.titleColor
    }
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cometchat-modal': CometChatModal
  }
}