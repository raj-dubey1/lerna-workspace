import { LitElement, html, css, PropertyValueMap } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import {styleMap} from 'lit/directives/style-map.js';

@customElement('cometchat-menu-list')
export class CometChatMenuList extends LitElement{
  @property() data: any = null;
  @property() list!: {}[];
  @property() moreIconURL: string = `../../../assets/read.svg`; //Image URL for more icon
  @property() mainMenuLimit: number = 2;
  @property() style: any = {
    width:"",
    height:"",
    border:"",
    borderRadius:"",
    background:"transparent",
    moreIconTint:"",
    textFont:"",
    textColor:"",
    iconTint:"",
    iconBackground:"",
    iconBorder:"",
    iconBorderRadius:"",
  } //CSS properties
  @property() subMenuStyle: any = {
    width:"100%",
    height:"100%",
    border:"none",
    borderRadius:"12px",
    background:"rgb(20, 20, 20)",
    textFont:"",
    textColor:"",
    iconTint:"",
    iconBackground:"",
    iconBorder:"",
    iconBorderRadius:"",
  }
  @property() isOpen: boolean = true;
  mainMenuList: any[] = [];
  subMenuList: any[] = [];

  isShown: boolean = false; // hidden by defaul
  static styles = [
    
    css`
    .list__menu__item {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin: 0;
      padding-left: 0px;
      border-radius: inherit;
  
  }
  .menu__options {
      display: flex;
      align-items: center;
  }
  .more__icon{
      border-radius: inherit;
  }
  .moremenu__class{
      border-radius: inherit;
  }
  .submenu_class {
      display: flex;
      flex-direction: column;
      position: absolute;
      height: max-content;
      padding: 5px;
      width: max-content;
      max-height: 192px;
      z-index: 10;
      border-radius: 8px;
      overflow: visible;
      margin-top: 2px;
      right: 0;
  }
  .list__item__style{
      border-radius: inherit;
  }
    `
  ];
  connectedCallback(): void {
    
    this.mainMenuList = this.mainMenuItems();
    this.subMenuList = this.subMenuItems();
    super.connectedCallback()
  }
  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (!this.isOpen) {
      this.isShown = false
    }
    super.updated(_changedProperties)
  }
  onMenuItemClick(item: any, e: any) {
    this.isOpen = false
    this.isShown = false
    if (e && e.stopPropagation) {
      e.stopPropagation()
    }
    if (this.data) {
      item.callBack(this.data, e)
    }
    else {
      item.callBack()
    }
  }
  /**
   * hide show submenu on click of more icon
   * @param  {any} e
   */
  toggleShow(e: any) {
    debugger
    if (e && e.stopPropagation) {
      e.stopPropagation()
    }
    this.isShown = !this.isShown;

  }
  // filtering main menu options from list 
  mainMenuItems() {
    const defaultNumber = this.mainMenuLimit - 1;
    return this.list?.filter((item: any, i: any) => {
      return i <= defaultNumber
    })
  }
  // filtering submenu options from list
  subMenuItems() {
    const defaultNumber = this.mainMenuLimit - 1;
    return this.list?.filter((item: any, i: any) => {
      return i > defaultNumber
    })
  }

  render() {
      return html`<div class="menu__options" style=${styleMap(this.mainMenuStyles())}">
      ${this.isOpen ? html`   <ul class="list__menu__item" >
      ${this.mainMenuList.map((item) =>
        html` <cometchat-button .onHoverText=${item.title} .iconURL=${item.iconURL}
        class="list__item__style" ></cometchat-button>`
      )}
  
  </ul>` : "" }
   
      <div class="more__icon">
       ${this.list && this.list.length > this.mainMenuLimit +1 && this.isOpen ? html`   <div class="moremenu__class"
       @click=${(e:any)=>{this.toggleShow(e)}}>
       <cometchat-button
       class="list__item__style"
       .iconURL=${this.moreIconURL}
       style="menuStyle"
       ></cometchat-button>
   </div>` : ""}
         
      </div>
  </div>
  
${this.isShown ? html`  <div >
<ul class="list__menu__item submenu_class"  style=${styleMap(this.subMenuStyles())}>
${this.subMenuList.map((menu) =>
  html` <cometchat-button  .onHoverText=${menu.title}  style="menuStyle" class="list__item__style"
  .iconURL=${menu.iconURL}  .title=${menu.title} >
</cometchat-button>`
)}
   
</ul>
</div>` : ""}`;
  }
  
   // submenu style
   subMenuStyles() {
    return {
      ...this.subMenuStyle,
    }
  }
  // mainmenu style
  mainMenuStyles() {
    return {
      background:this.style?.background,
     borderRadius:this.style?.borderRadius,
     border:this.style?.border
    }
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cometchat-menu-list': CometChatMenuList
  }
}