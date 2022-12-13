import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
@customElement('cometchat-text-bubble')
export class CometChatTextBubble extends LitElement {
  @property() text: string = "hello friends!";
  @property({ type: Object }) style: any = {
    height: "",
    width: "",
    border: "",
    borderRadius: "",
    background: "",
    textFont: "",
    textColor: "",
  }
  static styles = [
    css`
    .cc__text__bubble {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px;
  align-self: flex-end;
  width: auto;
  max-width: 500px;
}
.cc__text {
  margin: 0;
  line-height: 20px;
  white-space: pre-wrap;
  word-break: break-word;
  text-align: left;
  vertical-align: middle;
  width: auto;
}
    `
  ];
  render() {
    return html`
        <div style=${styleMap(this.messageKitBlockStyle())} class="cc__text__bubble">
  <p style=${styleMap(this.textStyle())}
    class="cc__text">
    ${this.text}
  </p>
</div>`
  }
  textStyle() {
    return {
      color: this.style?.textColor,
      font: this.style?.textFont,
    }
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
}
declare global {
  interface HTMLElementTagNameMap {
    'cometchat-text-bubble': CometChatTextBubble
  }
}