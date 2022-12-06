import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import {styleMap} from 'lit/directives/style-map.js';
@customElement('cometchat-backdrop')
export class CometChatBackdrop extends LitElement{
  @property() isOpen: boolean = true; //If `true`, the component is shown
  @property() onClick!: any; //Callback function when clicked 
  @property({type:Object}) style: any = {
    background:"black"
 
  } //Styles applied to the backdrop element
 list = [
  {
    id: "delete",
    title: "delete",
    //inside style
    iconURL: `../../../assets/search.svg`,
    callBack: null,
    },
    {
      id: "edit",
      title: "edit",
      //inside style
      iconURL: `../../../assets/search.svg`,
      callBack: null,
      },
      {
        id: "delete",
        title: "delete",
        //inside style
        iconURL: `../../../assets/search.svg`,
        callBack: null,
        },
        {
          id: "edit",
          title: "edit",
          //inside style
          iconURL: `../../../assets/search.svg`,
          callBack: null,
          },
          {
            id: "delete",
            title: "delete",
            //inside style
            iconURL: `../../../assets/search.svg`,
            callBack: null,
            },
            {
              id: "edit",
              title: "edit",
              //inside style
              iconURL: `../../../assets/search.svg`,
              callBack: null,
              }

 ]
  static styles = [
    
    css`
    .backdrop__Style {
      opacity: .3;
      position: fixed;
      width: 100%;
      height: 100%;
      transition: .3s ease-out 0;
      top: 0;
      left: 0;
      z-index: 5;
    }
    .modal__dialog {
      opacity: 100;
    }
    
    `
  ];
  render() {
    // return html`<cometchat-menu-list .list=${this.list}></cometchat-menu-list>`
 
     if(this.isOpen){
      return html`<div class="backdrop__Style" style= ${styleMap(this.backDropStyle())}  @click= ${this.clickHandler}>
    <div class="modal__dialog">
       <slot></slot>
       
    </div>
</div>`;
    }
   
  }
  clickHandler = ()=>{
    if(this.onClick){
      this.onClick()
    }

  }
  backDropStyle() {
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
    'cometchat-backdrop': CometChatBackdrop
  }
}