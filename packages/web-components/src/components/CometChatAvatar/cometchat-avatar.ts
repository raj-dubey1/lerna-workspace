import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
@customElement('cometchat-avatar')
export class CometChatAvatar  extends LitElement{
  @property() image!: string;
  @property() name: string = "raj";
  @property({type:Object}) style:any = {
     borderRadius:"16px",
     width : "28px",
     height : "28px",
     border : "none",
     backgroundColor : "red",
     nameTextColor : "rgb(20,20,20)",
     backgroundSize : "cover",
     nameTextFont : "500 16px Inter",
     outerView : "",
     outerViewSpacing : "",
     outerViewBorderRadius:""
  };
  static styles = [

    css`
    :host {
      display: block;
    }
    .avatar__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
      background-color: #ffffff;
      box-sizing: content-box;
      cursor: inherit;
      outline: none;
      position: static;
      padding: 0;
    }
    .image__style{
      display: flex;
      width: 100%;
      height: 100%;
      flex: 1 1 100%;
      background-color: transparent;
      background-position: center;
    }
    `
  ];
  constructor(){
    super()
    this.updateAvatar()
}
override update(changedProperties: Map<string, unknown>) {
  this.updateAvatar()
  super.update(changedProperties)
  }
  updateAvatar(){
    if (this.image && this.image.trim().length) {
      this.avatar = this.image
    }
    else if (this.name && Object.keys(this.name).length) {
      let splitName = this.name.split(" ")
      const char = (splitName.length && splitName.length > 1 ) ? splitName[0].substring(0, 1).toUpperCase() + splitName[1].substring(0, 1).toUpperCase():   this.name.substring(0, 2).toUpperCase();
      this.avatar = this.generateAvatar(char);
    }
    this.render()
  }
  avatar = "";
  

  generateAvatar = (data: string) => {
    const canvas = document.createElement("canvas");
    const context: any = canvas.getContext("2d");
    canvas.width = 200;
    canvas.height = 200;
    //Draw background
    context.fillStyle = this.style?.backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
    //Draw text
    context.font = this.getCanvasFontSize(this.style?.nameTextFont);;
    context.fillStyle = this.style?.nameTextColor;
    context.strokeStyle = "rgba(20, 20, 20, 8%)";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(data, canvas.width / 2, canvas.height / 2);
    return canvas.toDataURL("image/svg");
  }
  getCanvasFontSize(font: string) {
    let fontStyle = font?.split(" ");
    let fontSize = Number(fontStyle[1]?.replace("px", ""));
    let fontInPixel = fontSize * 5.5 + "px"
    return `${fontStyle[0]} ${fontInPixel} ${fontStyle[2]}`
  }
  connectedCallback() {
    super.connectedCallback()
  }
  render() {
    return html`<div style=${styleMap(this.getOuterViewStyle())}>
      <span style=${styleMap(this.getContainerStyle())} class="avatar__container">
        <span style=${styleMap(this.getImageStyle())} class="image__style"></span>
      </span>
    </div>`;
  }
  // this object contains dynamic stylings for this component
    getImageStyle = () => {
      return {
        backgroundSize: this.style?.backgroundSize,
        backgroundImage: `url(${this.avatar})`,
        border: `${this.style?.border} `,
        borderRadius: this.style?.borderRadius,
      };
    }
    getContainerStyle = () => {
      return {
        height: this.style?.height,
        width: this.style?.width,
        borderRadius: this.style?.borderRadius,
      };
    }
    getOuterViewStyle = () => {
      return {
        height: this.style?.height,
        width: this.style?.width,
        borderRadius: this.style?.outerViewBorderRadius,
        outline: this.style?.outerView,
        outlineOffset: this.style?.outerViewSpacing
      };
    }
}
declare global {
  interface HTMLElementTagNameMap {
    'cometchat-avatar': CometChatAvatar
  }
}