import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import {styleMap} from 'lit/directives/style-map.js';
@customElement('cometchat-label')
export class CometChatLabel extends LitElement{
    @property() text:string="";
    @property() dir:string="ltr";
    @property({type:Object}) style: any = {
      height: "",
      width: "",
      border: "",
      borderRadius: "",
      background: "",
      textFont: "",
      textColor: ""
    } 
  static styles = [
    
    css`
    `
  ];
  render() {
      return html` <label dir=${this.dir} style=${styleMap(this.labelStyle())}> ${this.text} </label>`;
  }
  labelStyle() {
    return {
      color:this.style?.textColor,
      font:this.style?.textFont,
      height:this.style?.height,
      width:this.style?.width,
      border:this.style?.border,
      borderRadius:this.style?.borderRadius,
      background:this.style?.background
    }
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cometchat-label': CometChatLabel
  }
}