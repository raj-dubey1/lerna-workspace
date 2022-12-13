import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
@customElement('cometchat-video-bubble')
export class CometChatVideoBubble extends LitElement {
    @property() src: string = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    @property({ type: Boolean }) autoPlay: boolean = false;
    @property({ type: Boolean }) loop: boolean = false;
    @property({ type: Boolean }) muted: boolean = false;
    @property() poster: string = "";
    @property({ type: Object }) style: any = {
        height: "400px",
        width: "400px",
        border: "",
        borderRadius: "",
        background: "",
    }
    static styles = [
        css`
    .cc__video{
  margin: 0;
  border-radius: inherit;
  max-height:100%;
  max-width:100%;
    }
.cc__video__bubble {
    margin: 0;
  border-radius: inherit;
  background: transparent;
  padding: 0;
}
    `
    ];
    render() {
        return html`
      <div class="cc__video__bubble" style=${styleMap(this.videoBubbleStyle())}>
    <video controls .loop=${this.loop} .muted=${this.muted} .autoplay=${this.autoPlay} class="cc__video" .poster=${this.poster}>
      <source src=${this.src} />
    </video>
</div>
      `
    }
    videoBubbleStyle = () => {
        return {
            background: this.style.background,
            width: this.style.width,
            height: this.style.height,
            border: this.style.border,
            borderRadius: this.style.borderRadius,
        }
    }
}
declare global {
    interface HTMLElementTagNameMap {
        'cometchat-video-bubble': CometChatVideoBubble
    }
}