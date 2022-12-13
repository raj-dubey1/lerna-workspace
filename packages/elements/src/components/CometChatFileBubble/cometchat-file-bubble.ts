import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
@customElement('cometchat-file-bubble')
export class CometChatFileBubble extends LitElement {
  @property() fileURL: string = "";
  @property() downloadIconURL: string = "src/components/assets/download.svg";
  @property() title: string = "";
  @property() subtitle: string = "";
  @property({ type: Object }) style: any = {
    width: "fit-content",
    height: "fit-content",
    border: "none",
    background: "transparent",
    borderRadius: "none",
    titleFont: "600 15px Inter, sans-serif",
    titleColor: "rgb(20, 20, 20)",
    subtitleFont: "400 13px Inter, sans-serif",
    subtitleColor: "rgba(20, 20, 20, 0.58)",
    iconTint: "rgb(51, 153, 255)",
  }
  static styles = [
    css`
.cc__file__bubble {
  padding: 8px 4px;
  background: transparent;
  display: flex;
  max-width: 350px;
  justify-content: flex-start;
}
.message__block {
  word-wrap: break-word;
  text-align: left;
  margin: 0 8px 0 0;
}
.cc__file__title {
  margin-top: 4px;
  margin-left: 8px;
}
.cc__file__title__link {
  all: unset;
}
.cc__file__subtitle {
  margin-left: 8px;
  margin-top: 4px;
}
.cc__file__icon {
  width: 24px;
  margin: 8px 0;
  margin-left: 10px;
}
i{
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 4px;
}
    `
  ];
  downloadFile(): any {
    if (!this.fileURL) {
      throw new Error("Resource URL not provided! You need to provide one");
    }
    fetch(this.fileURL)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = blobURL;
        if (this.title && this.title.length) a.download = this.title;
        document.body.appendChild(a);
        a.click();
      })
      .catch((error: any) => console.log("error"));
  };
  render() {
    return html`
<div style=${styleMap(this.messageKitBlockStyle())} class="cc__file__bubble">
  <div class="message__block">
    <div class="cc__file__title">
      <a href=${this.fileURL} target="_blank" style=${styleMap(this.messageTitleStyle())}  class="cc__file__title__link"> ${this.title} </a>
    </div>
    <div style=${styleMap(this.messageSubTitleStyle())} class="cc__file__subtitle"> ${this.subtitle} </div>
  </div>
  <div class="cc__file__icon">
    <i style=${styleMap(this.messageFileIconStyle())} @click=${() => { this.downloadFile() }}></i>
  </div>
  &nbsp;
</div>
      `
  }
  messageKitBlockStyle = () => {
    return {
      width: this.style.width,
      height: this.style.height,
      border: this.style.border,
      borderRadius: this.style.borderRadius,
      background: this.style.background,
    }
  }
  messageTitleStyle = () => {
    return {
      font: this.style?.titleFont,
      color: this.style?.titleColor,
    }
  }
  messageSubTitleStyle = () => {
    return {
      font: this.style?.subtitleFont,
      color: this.style?.subtitleColor,
    }
  }
  messageFileIconStyle = () => {
    return {
      WebkitMask: `url(${this.downloadIconURL}) `,
      background: this.style.iconTint,
    }
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cometchat-file-bubble': CometChatFileBubble
  }
}
