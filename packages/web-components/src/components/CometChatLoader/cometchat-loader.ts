import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
@customElement('cometchat-loader')
export class CometChatLoader extends LitElement{
    @property() name:string="spinner";
    @property() iconURL:string= `src/components/assets/spinner.svg`;
    @property({type:Object}) style: any = {
    height:"24px",
    width:"24px",
    border:"",
    borderRadius:"",
    background:"",
   iconTint:"grey" 
  } 
  public iconStyle:any={
    height:"24px",
    width: "24px",
    iconTint:"grey"

  }
  constructor(){
    super()
    this.iconStyle.iconTint = this.style?.iconTint;
  }
  static styles = [
    
    css`
    .loader{
      display: flex;
      align-items: center;
      justify-content: center;
    }

    `
  ];

  render() {
      if(this.iconURL){
        return html` <div class="loader" style=${styleMap(this.inputStyle())}><cometchat-icon .URL=${this.iconURL} .name=${this.name} .style=${this.iconStyle}></cometchat-icon></div>`;
      }
  }
  inputStyle =() =>{
    return {
      height:this.style?.height,
      width:this.style?.width,
      border:this.style?.border,
      borderRadius:this.style?.borderRadius,
      background:this.style?.background,
    }
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'cometchat-loader': CometChatLoader
  }
}