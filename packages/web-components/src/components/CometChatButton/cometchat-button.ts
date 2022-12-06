import { LitElement, html, css, PropertyPart, PropertyValueMap } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import {styleMap} from 'lit/directives/style-map.js';

@customElement('cometchat-button')
export class CometChatButton extends LitElement{
    @property({type: Boolean}) disabled:boolean=false;
    @property() text:string="";
    @property() iconURL:string="";
    @property() hoverText:string = ""
    @property({type:Function}) onClick:any = ()=>{

    };
   @property({type:Object}) style: any = {
    height:"fit-content",
    width:"fit-content",
   buttonTextFont:"",
   buttonTextColor:"",
   borderRadius:"8px",
   border:"1px solid #eeeeee",
   buttonIconTint:"",
   background:""
  } 
  public iconStyle:any={
    height:"24px",
    width: "24px",
    iconTint:"grey"

  }
  constructor(){
    super()
  
    
  }
  static styles = [
    
    css`
    button{
      display:flex;
      flex-direction:row
      justify-content: center;
      align-items: center;
      padding:2px 6px;
      cursor:pointer;
    }
    `
  ];
  // connectedCallback() {
  //   super.connectedCallback()
  //   this.render()

  // }
  render() {
    this.iconStyle.iconTint = this.style?.buttonIconTint || "grey";
      return html`<button class="button__Style" title=${this.hoverText} @click=${()=>{this.onClick ? this.onClick() : null}} style= ${styleMap(this.buttonStyle())}  ?disabled=${this.disabled} >${html`<cometchat-icon  .URL=${this.iconURL} .style=${this.iconStyle}></cometchat-icon>`} ${this.text}</button>`;
  }
  buttonStyle() {
    return {
      font:this.style?.buttonTextFont,
      color:this.style?.buttonTextColor,
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
    'cometchat-button': CometChatButton
  }
}