import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
@customElement('cometchat-image-bubble')
export class CometChatImageBubble extends LitElement {
  @property() src: string = "https://picsum.photos/id/237/200/300";
  @property() placeholderImage: string = "";
  @property() caption: string = "";
  @property({ attribute: false }) clickCallback: Function = () => { };
  @property({ type: Object }) style: any = {
    height: "200px",
    width: "200px",
    border: "",
    borderRadius: "",
    background: "",
    captionTextFont: "",
    captionTextColor: ""
  }
  static styles = [
    css`
.cc__image__bubble {
  padding: 0;
  background: transparent;
  height: 300px;
  width: 300px;
}
.cc__image {
  margin: 0;
  height: inherit;
  width: inherit;
  border-radius: inherit;
}
    `
  ];
  render() {
    return html`
  <div style=${styleMap(this.imageBubbleStyle())} class="cc__image__bubble" @click=${() => { this.clickCallback ? this.clickCallback(this.src) : null }}>
  <img class="cc__image" src=${this.src || this.placeholderImage}  />
</div>
      `
  }
  imageBubbleStyle = () => {
    return {
      height: !this.src ? "200px" : this.style.height,
      width: !this.src ? "230px" : this.style.width,
      border: this.style.border,
      borderRadius: this.style.borderRadius,
      background: this.style.background,
    }
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cometchat-image-bubble': CometChatImageBubble
  }
}
