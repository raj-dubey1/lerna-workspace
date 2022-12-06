import { LitElement, html, css, PropertyPart, PropertyValueMap } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import {styleMap} from 'lit/directives/style-map.js';

@customElement('cometchat-button-group')
export class CometChatButtonGroup extends LitElement{
    @property({type:Array}) data:any[]=[]
   @property({type:Object}) style: any = {
    height:"100%",
    width:"100%",
    border:"1px solid #ededed",
    borderRadius:"12px",
    background:"",
    iconTint:"grey",
    buttonTextFont:"400 11px Inter",
    buttonTextColor:"black",
    buttonBorder:"none",
    buttonBorderRadius:"12px",
    buttonBackground:"white",
  }    
  public btnStyle:any={  }

  static styles = [
    
    css`
    .button__group{
      display:flex;
      flex-direction:row
      justify-content: center;
      align-items: center;
      padding:2px 6px;
    }
    li{ list-style: none;}
    `
  ];
  connectedCallback() {
    super.connectedCallback()
    this.btnStyle = {
      buttonTextFont:this.style?.buttonTextFont,
      buttonTextColor: this.style?.buttonTextColor,
      buttonIconTint:this.style?.iconTint,
      border:this.style?.buttonBorder,
      borderRadius:this.style?.buttonBorderRadius,
      background:this.style?.buttonBackground
    }
    
  }
  render() {
if(this.data.length >=1){
    return html`<ul class="button__group" role="group" aria-label="menu" style=${styleMap(this.buttonStyle())}>         
    ${this.data.map((button:any) =>
     html`<li><cometchat-button .style=${this.btnStyle} .text=${button.buttonText} .hoverText=${button.hoverText}  .iconURL=${button.iconURL} .onClick=${()=>{button.onClick(button?.id)}}></cometchat-button></li>`
   )}
</ul>`;
}
else{
    return null;
}
  }
  buttonStyle() {
    return {
      height:this.style?.height,
      width:this.style?.width,
      border:this.style?.border,
      borderRadius:this.style?.borderRadius,
      background:this.style?.background,
      ...this.style

    }
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cometchat-button-group': CometChatButtonGroup
  }
}