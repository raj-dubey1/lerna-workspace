import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
@customElement('cometchat-date')
export class CometChatDate extends LitElement{
    @property({type:Object}) style:any = {
      timeStampFont: "",
      timeStampColor: "",
      backgroundColor: "",
      height: "",
      width: "",
      border: "",
      borderRadius: "",
      background: "" 
    };
    @property({type:Number}) timestamp: number=0;
    @property() pattern: Function = ()=>{};
    static styles = [
      css`
      `
    ];
  connectedCallback() {
      super.connectedCallback()
  }
  render() {
    return html`<span style=${styleMap(this.DateStyles())}>${this.pattern()}</span>`;
  }
//   styles
DateStyles = () => {
    return {
        font: this.style?.timeStampFont,
        color: this.style?.timeStampColor,
        backgroundColor: this.style?.backgroundColor,
        height:this.style?.height,
        width:this.style?.width,
        border:this.style?.border,
        borderRadius:this.style?.borderRadius,
        textAlign: 'center',
    }
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cometchat-date': CometChatDate
  }
}