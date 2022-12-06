import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('text-component')
export class TestComponent extends LitElement {
    id: string = "";
    avatarURL: string = "";
    avatarName: string = "TC";
    statusIndicatorColor: string="pink";
    statusIndicatorIcon: string="";
    constructor(){
      super()
      setTimeout(() => {
        this.statusIndicatorColor = "red"
        
      }, 5000);
    }
    avatarStyle:any = {
      borderRadius:"16px",
      width : "28px",
      height : "28px",
      border : "1px solid black",
      backgroundColor : "white",
      textColor : "rgb(20,20,20)",
      backgroundSize : "cover",
      textFont : "500 16px Inter",
      outerView : "",
      outerViewSpacing : "",
    }
    statusIndicatorStyle:any = {
      borderRadius:"16px",
      width : "10px",
      height : "10px",
      border : "none",
    }
    title: string = "test comp";
    subtitle: any = ()=>{return html`<div>lalalalal</div>`};
    options: any;
    styleds: any = {
      height:"1px",
      width:"100%",
      background:"grey"
    } //Styles applied to the backdrop element
    static styles = [
      
      css`
   .text__component{
     height:100vh;
     width:100vw;
     display:flex;
     justify-content:center;
     align-items:center;
   }
      `
    ];

  render() {
   
    //  return html`<cometchat-list-item .avatarName=${this.avatarName} .statusIndicatorIcon=${"src/components/assets/search.svg"} .statusIndicatorColor=${this.statusIndicatorColor} .title=${this.title} .statusIndicatorStyle=${this.statusIndicatorStyle} .avatarStyle=${this.avatarStyle}>
    //  <div slot="tailView"> dawdwd aw d awd  dtail</div>
    //  <div slot="menuView"> I am  menu</div>
    //  </cometchat-list-item>`;
    return html`<div class="text__component"><cometchat-pop-over >
    <cometchat-confirm-dialog slot="content"></cometchat-confirm-dialog>
    <button slot="children"> clickme</button>
    </cometchat-pop-over></div>`;

    
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'text-component': TestComponent
  }
}
