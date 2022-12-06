import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import {styleMap} from 'lit/directives/style-map.js';

@customElement('cometchat-badge')
export class CometChatBadge extends LitElement {
  @property({type:Number}) count: number | string = 0;
  @property({type:Object}) style:any = {
      height:"28px",
      width:"28px",
      borderRadius:"16px",
      background:"",
      border:"",
      textFont:"",
      textColor:""
  };
  static styles = [
    
    css`
    .unread__count{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2px;
    }
    `
  ];
  connectedCallback() {
        if(this.count > 999){
          this.count = "999+";
        }
        super.connectedCallback()
  }
  render() {
 
    if(this.count > 0){
      return html`<div style=${styleMap(this.getStyle())} class="unread__count"> ${this.count} </div>`;
    }
  }
  getStyle = () => {
      
    return {
      border: `${this.style?.border}`,
      borderRadius: this.style?.borderRadius,
      background: this.style?.background,
      color: this.style?.textColor,
      font: this.style?.textFont,
      width: this.style?.width,
      height: this.style?.height,
    };
  }

}
declare global {
  interface HTMLElementTagNameMap {
    'cometchat-badge': CometChatBadge
  }
}