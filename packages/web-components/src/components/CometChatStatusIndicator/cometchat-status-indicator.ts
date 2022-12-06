import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import {styleMap} from 'lit/directives/style-map.js';
export interface  lalal{
  
}
@customElement('cometchat-status-indicator')
export class CometChatStatusIndicator  extends LitElement{
 @property() backgroundColor: string = "orange"; 
 @property() backgroundImage: string | null = ""; 
 @property({type:Object}) style: any = {
      height:"10px",
      width:"10px",
      border:"",
      borderRadius:"16px",
 }; //Custom styling
 public background:string = "";
 static styles = [
  
  css`
  .status__indictor{
    display: block;
    overflow:overlay;
    position: absolute;
    bottom: 0;
    right: 0;
}
  `
];

  render() {

    return html`<span style= ${styleMap(this.getStyle())} class="status__indictor"> </span>`;
  }
  getStyle = () => {
    this.background = "";
    if (this.backgroundImage) {
      this.background = `${this.backgroundColor} url(${this.backgroundImage}) no-repeat  center`;
    }
    else if(this.backgroundColor && !this.backgroundImage){
      this.background = this.backgroundColor
    }
    return {
      border:this.style?.border,
      borderRadius: this.style?.borderRadius,
      height: this.style?.height,
      width: this.style?.width,
      background:this.background
    };
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cometchat-status-indicator': CometChatStatusIndicator
  }
}