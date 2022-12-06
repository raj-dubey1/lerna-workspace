import { LitElement, html, css, PropertyValueMap } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js'; 
@customElement('cometchat-input')
export class CometChatInput extends LitElement {
  @property({type: Boolean}) disabled:boolean = false;
  @property() value:string = "";
  @property() type:string = "text";
  @property({type: Boolean}) checked:boolean=true;
  @property() placeholderText:string = "Start typing...";
  @property({type: Boolean}) hidden:boolean= false;
  @property({type: Boolean}) multiple:boolean = false;
  @property() accept:string = "";
  @property({type: Function}) searchCallback:Function = ()=>{};
  @property() dir:string = "ltr"; //default = "ltr" //auto default for dynamic data
  @property({type:Object}) style:any={
    height: "24px",
    width: "fit-content",
    border: "none",
    textFont: "400 14px Inter",
    textColor: "grey",
    placeholderTextFont: "500 13px Inter",
    placeholderTextColor: "#bcbcbc",
    borderRadius: "12px",
    boxShadow: "",
    background: "transparent"
}
  static styles = [
    css`
    .input__style{
      border:none;
      padding:1px 3px;
      outline:none;
      width:100%;
    }
    .label__style{position:absolute;
      padding: 5px 4px; pointer-events:none;}
    `
  ];
  keyDownCallback = (e:any)=>{
    this.value = e?.target?.value;
    if(this.searchCallback){
      this.searchCallback(this.value)
    }
  }
  render() {
      return html`  ${!this.value && this.type != "checkbox" ? html` <cometchat-label .dir=${this.dir}  class="label__style"  text="${this.placeholderText}" style=${styleMap(this.placeholderStyle())} ></cometchat-label>`: ""} 
      <input dir=${this.dir}  @input="${(e:any)=>{this.keyDownCallback(e)}}" class="input__style" id="input" type="${this.type}" ?hidden=${this.hidden}  accept=${this.accept} ?multiple=${this.multiple }   value=${this.value}  style=${styleMap(this.inputStyle())}   />`;
  }
  inputStyle =() =>{
    return {
      font: this.style?.textFont,
      color: this.style?.textColor,
      height:this.style?.height,
      width:this.style?.width,
      border:this.style?.border,
      borderRadius:this.style?.borderRadius,
      background:this.style?.background,
      boxShadow:this.style?.boxShadow
    }
  }
  placeholderStyle = ()=>{
    return{
      font:this.style?.placeholderTextFont,
      color:this.style?.placeholderTextColor,
      background:this.style?.background,
    }
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cometchat-input': CometChatInput
  }
}