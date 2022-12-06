import { LitElement, html, css, PropertyValueMap, PropertyDeclaration, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import {styleMap} from 'lit/directives/style-map.js';

@customElement('cometchat-list-item')
export class CometChatListItem extends LitElement{
    @property() id: string = "";
    @property() avatarURL: string = "";
    @property() avatarName: string = "";
    @property() statusIndicatorColor: string="";
    @property() statusIndicatorIcon: string="";
    @property({type:Object}) avatarStyle:any = {
      borderRadius:"16px",
      width : "28px",
      height : "28px",
      border : "none",
      backgroundColor : "white",
      textColor : "rgb(20,20,20)",
      backgroundSize : "cover",
      textFont : "500 16px Inter",
      outerView : "",
      outerViewSpacing : "",
    }
    @property({type:Object}) statusIndicatorStyle:any = {
      borderRadius:"16px",
      width : "10px",
      height : "10px",
      border : "none",
    }
    @property() title: string = "raj dubey";
    @property() options: any;
    @property() tail: any;
    @property() hideSeparator: any;
    @property() isActive:boolean = false;
    @property({type: Function}) clickCallback:Function = ()=>{};
    @property() dir:string = "ltr";
    @property({type:Object}) style: any = {
      background: "white",
      titleColor: "",
      titleFont: "500 16px Inter",
      width: "",
      height: "50px",
      border: "1px solid grey",
      borderRadius: "2px",
      borderBottom: "1px solid grey",
      seperatorColor: "1px solid rgb(222 222 222 / 46%)",
      activeBackground:"#eeeeee",
      hoverBackground:"#eeeeee"
    }; //consists of all styling properties
    isHovering:boolean=false;
    hideShowTail = ()=>{
      this.isHovering = !this.isHovering;
      this.requestUpdate("isHovering", !this.isHovering);

    }
    setActiveItem =(e:any)=>{
      if(this.clickCallback){
        this.clickCallback(this.id)
      }
      this.requestUpdate("isActive")
    }


    
    requestUpdate(name?: PropertyKey, oldValue?: unknown, options?: PropertyDeclaration<unknown, unknown>): void {
        super.requestUpdate()
    }

 dividerStyles = {
  height:"1px",
  width:"100%",
  background:"grey"
 }
  static styles = [
    
    css`
    *{box-sizing:border-box;}
    .item__details{
    display: flex;
    justify-content: space-between;
    width:100%;
    }
    .tail__view{
      display: flex;
    justify-content: center;
    align-items: center;
    }
    .menu__view{
      display: flex;
    justify-content: center;
    align-items: center;
    }
    .list__item{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
      position: relative;
      padding: 0 8px;
      
  
    }
    .item__thumbnail {
      display: flex;
      flex-direction: column;
      width: fit-content;
      height: auto;
      flex-shrink: 0;
      position: relative;
    }
    `
  ];

  render() {
    this.dividerStyles.background = this.style.seperatorColor || "grey"

    return html` 
    <div class="list__item" 
style=" ${styleMap(this.listItemStyles.listItemStyle())}" data-id="id" @mouseenter=${this.hideShowTail} @mouseleave=${this.hideShowTail} @click=${this.setActiveItem}>
<div class="item__thumbnail">
<cometchat-avatar  .image="${this.avatarURL}" .name="${this.avatarName}" .style=${this.avatarStyle} >
</cometchat-avatar> 
  
<cometchat-status-indicator
  .backgroundColor="${this.statusIndicatorColor}" .backgroundImage="${this.statusIndicatorIcon}" .style=${this.statusIndicatorStyle}
>
</cometchat-status-indicator>
</div>
<div class="item__details">

<div class="item__title" style="${styleMap(this.listItemStyles.itemDetailStyle(this.style))}">
  <div class="item__innerTitle" style="${styleMap(this.listItemStyles.titleStyle(this.style))}">
  ${this.title}
  </div>
  <div> <slot name="subtitleView"></slot> </div>

</div>

<div class="tail__view">
${!this.isHovering ? html`<slot name="tailView"> </slot>`:""}
</div>

<div class="menu__view">
${this.isHovering ? html`<slot name="menuView"> </slot>`:""}

</div>
</div>

</div>
${!this.hideSeparator ? html`<div class-"divider__style" style=${styleMap(this.listItemStyles.dividerStyle())}> <cometchat-divider .style=${this.dividerStyles}></cometchat-divider> </div>`: nothing }

    `;
   
  }
  listItemStyles = {
    listItemStyle:()=>{
      return{
        height:this.style?.height,
        width:this.style?.width,
        // border:this.style?.border,
        borderRadius:this.style?.borderRadius,
        background: this.isHovering || this.isActive ? this.style?.activeBackground  : this.style?.background 
      }
    },
    itemDetailStyle: (style: any) => {
      const padding = { paddingLeft: "8px" };
      return {
        width: "70%",
        flexGrow: "1",
        ...padding,
      };
    },
    titleStyle: (style: any) => {
      return {
        font: style.titleFont ,
        color: style.titleColor ,
      };
    },
    dividerStyle:()=>{
      return{
        marginLeft: this.avatarStyle?.height || "36px",
        marginRight:"8px"
        
      }
    }
  }

}
declare global {
  interface HTMLElementTagNameMap {
    'cometchat-list-item': CometChatListItem
  }
}