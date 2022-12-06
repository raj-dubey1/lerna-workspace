import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
@customElement('cometchat-icon')
export class CometChatIcon extends LitElement{
    @property() name:string="";
    @property() URL:string= "";
    @property({type:Object}) style: any = {
    height:"24px",
    width:"24px",
   iconTint:"grey"
  } 
  static styles = [
    css`
    `
  ];
  render() {
      if(this.URL){
        return html` <div class="icon__style" style=${styleMap(this.iconStyle())} title=${this.name}></div>`;
      }
  }
  iconStyle() {
    return {
        WebkitMask: `url(${this.URL})`,
        background:this.style?.iconTint,
        height:this.style?.height,
        width:this.style?.width
    }
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cometchat-icon': CometChatIcon
  }
}