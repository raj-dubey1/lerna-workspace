import { LitElement, html, css, PropertyValueMap } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styleMap } from 'lit/directives/style-map.js';

import {ifDefined} from 'lit/directives/if-defined.js';
@customElement('cometchat-search')
export class CometChatSearch extends LitElement {

  @property() name: string = "";
  @property() searchText: string = "";
  @property() placeholderText: string = "Start typing...";
  @property({type: Function}) searchCallback:Function = ()=>{};
  @property() searchIconURL: string = `src/components/assets/search.svg`;
 
  @property() style: any = {
    height: "fit-content",
    width: "fit-content",
    border: "1px solid #dedede",
    searchTextFont: "400 14px Inter",
    searchTextColor: "grey",
    placeholderTextFont: "500 13px Inter",
    placeholderTextColor: "#bcbcbc",
    borderRadius: "6px",
    background: "",
    searchIconTint: "grey"
  };
  public inputStyle:any={
    height:"100%",
    width: "100%",
    border:"none",
    borderRadius:"inherit",
    background:"transparent"

  }
  public iconStyle:any={
    height:"24px",
    width: "24px",
    iconTint:"grey"

  }
  keyDownEvent = (str: string) => {
    if(this.searchCallback){
      this.searchCallback(str)

    }
  }

  
  constructor() {
    super()
    this.inputStyle.placeholderTextFont = this.style?.placeholderTextFont;
    this.inputStyle.placeholderTextColor = this.style?.placeholderTextColor;
    this.inputStyle.textFont = this.style?.searchTextFont;
    this.inputStyle.textColor = this.style?.searchTextColor;
    this.iconStyle.iconTint = this.style?.searchIconTint;



  }

  static styles = [

    css`
    .search__Style{
      display: flex;
      align-items: center;

    }
    .input__style{
      display: flex;
      align-items: center;
      padding:2px 0px;
      width:100%;
    }
    .icon__style{margin-top:3px;}


    `
  ];
  render() {
    return html`<div class="search__Style" style= ${styleMap(this.searchStyle())} >
          <cometchat-icon class="icon__style"  .URL=${this.searchIconURL} .style=${this.iconStyle}></cometchat-icon>
          <cometchat-input class="input__style" .searchCallback=${this.keyDownEvent}  placeholderText=${this.placeholderText} value=${this.searchText} .style=${this.inputStyle}></cometchat-input>
</div>`;
  }
  searchStyle() {
    return {
      height:this.style?.height,
      width:this.style?.width,
      border:this.style?.border,
      borderRadius:this.style?.borderRadius,
      background:this.style?.background,
      boxShadow:this.style?.boxShadow
    }
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cometchat-search': CometChatSearch
  }
}