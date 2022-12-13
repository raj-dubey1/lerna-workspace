import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
@customElement('cometchat-audio-bubble')
export class CometChatAudioBubble extends LitElement {
  @property() src: string = "";
  @property({ type: Boolean }) autoPlay: boolean = false;
  @property({ type: Boolean }) loop: boolean = false;
  @property({ type: Boolean }) muted: boolean = false;
  @property({ type: Object }) style: any = {
    height: "",
    width: "",
    border: "",
    borderRadius: "",
    background: "",
  }
  static styles = [
    css`
.cc__audio__bubble {
  border: 0 none;
  display: flex;
  max-width: max-content;
  background: transparent;
}
    `
  ];
  render() {
    return html`
      <div class="cc__audio__bubble" style=${styleMap(this.audioBubbleStyle())}>
    <audio controls .loop=${this.loop} .muted=${this.muted} .autoplay=${this.autoPlay}>
      <source src=${this.src} />
    </audio>
</div>
      `
  }
  audioBubbleStyle = () => {
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
    'cometchat-audio-bubble': CometChatAudioBubble
  }
}