import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
@customElement('cometchat-confirm-dialog')
export class CometChatConfirmDialog extends LitElement {
  @property() title: string = "Delerte Conversation?";
  @property() messageText: string = "Would you like to delete this conversation?  This conversation will be deleted from all of your devices.";
  @property() cancelButtonText: string = "Cancel";
  @property() confirmButtonText: string = "Delete";
  @property() cancelButtonIconURL:string = "";
  @property() confirmButtonIconURL:string = "";
  @property() onConfirm!: any; 
  @property() onCancel!: any; 
  @property({type:Object}) style: any = {
    titleFont:"",
    titleColor:"",
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
  } //styling style
   public loadingIconURL: string = "assets/resources/Spinner.svg";
   static styles = [
    css`
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
  connectedCallback() {
  super.connectedCallback()
  }
  render() {
        return html`<div class="confirm__dialog" style=${styleMap(this.dialogWrapperStyle())} >
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
</div>`
  }
    /**
   * loading icon wrapper style
   * @param  {string} state
   */
      dialogWrapperStyle = () => {
        return {
          height:this.style?.height,
          width:this.style?.width,
          background: this.style?.background,
          border: this.style?.border,
          borderRadius: this.style?.borderRadius,
        };
      };
      dialogFormStyle = () => {
        const display =  { display: "flex" } ;
        return {
          ...display,
        }
      }
      // title message style
      dialogTitleStyle() {
        return {
          font: this.style?.titleFont,
          color: this.style?.titleColor,
        }
      }
      // subtitle styles
      dialogMessageStyle = () => {
        return {
          textAlign: "center",
          lineHeight: "1.6",
          font: this.style?.messageTextFont,
          letterSpacing: "-0.1",
          color: this.style?.messageTextColor,
        };
      };
      buttonConfirmStyle = () => {
        return {
          font: this.style?.confirmButtonTextFont,
          background: this.style?.confirmButtonBackground,
          color: this.style?.confirmButtonTextColor,
        };
      };
      buttonCancelStyle = () => {
        return {
          color: this.style?.cancelButtonTextColor,
          font: this.style?.cancelButtonTextFont,
          background: this.style?.cancelButtonBackground,
        };
      }
}
declare global {
  interface HTMLElementTagNameMap {
    'cometchat-confirm-dialog': CometChatConfirmDialog
  }
}