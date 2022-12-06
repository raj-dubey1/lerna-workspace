import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('cometchat-receipt')
export class CometChatReceipt extends LitElement {
    @property() waitIcon: string = `../../assets/wait.svg`; 
    @property() sentIcon: string = `../../assets/message-sent.svg`; 
    @property() deliveredIcon: string = `../../assets/message-delivered.svg`; 
    @property() readIcon: string = `../../assets/message-read.svg`; 
    @property() errorIcon: string = `../../assets/warning-small.svg`; 
    @property() receipt:receipts= receipts.wait;
    static styles = [
      
      css`
      i {
        display: flex;
        justify-content: center;
      }
      `
    ];
    public icon: any= '';
  connectedCallback() {
      if(this.receipt == receipts.error){
          this.icon = this.errorIcon ;
      }
      else if(this.receipt == receipts.sent){
        this.icon = this.sentIcon ;
      }
      else if(this.receipt == receipts.delivered){
        this.icon = this.deliveredIcon ;
      }
      else if(this.receipt == receipts.read){
        this.icon = this.readIcon ;
      }
      else if(this.receipt == receipts.wait){
          this.icon = this.waitIcon ;
      }
      super.connectedCallback()
  }
  render() {
    if(this.icon){
     return html`<cometchat-icon iconURL=${this.icon}></cometchat-icon>`;
    }
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cometchat-receipt': CometChatReceipt
  }
}
export enum receipts {
  wait,
  sent,
  delivered,
  read,
  error
}