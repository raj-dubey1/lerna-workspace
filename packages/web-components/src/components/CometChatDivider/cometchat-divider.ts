import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import {styleMap} from 'lit/directives/style-map.js';

@customElement('cometchat-divider')
export class CometChatDivider extends LitElement {
  @property({type:Object}) style: any = {
    height:"1px",
    width:"100%",
    background:"grey"
  } //Styles applied to the backdrop element
  static styles = [
    
    css`
   .divider__Style{
     margin:2px 0;
   }
    `
  ];
  render() {
      return html`<div class="divider__Style" style= ${styleMap(this.dividerStyle())}>
</div>`;
  }
  dividerStyle() {
    
    return {
     height:this.style?.height,
     width:this.style?.width,
     background:this.style?.background,
    }
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cometchat-divider': CometChatDivider
  }
}