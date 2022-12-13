import { LitElement, html, css, PropertyDeclaration } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
@customElement('cometchat-radio-button')
export class CometChatRadioButton extends LitElement {
    @property({ type: Boolean }) checked: boolean = false;
    @property() name: string = "";
    @property({ attribute: false }) dir: "ltr" | "rtl" | "auto" = "auto";
    @property() labelText: string = "";
    @property({ type: Boolean }) disabled: boolean = false;
    @property() style: any = {
        height: "16px",
        width: "16px",
        border: "none",
        labelTextFont: "400 14px Inter",
        labelTextColor: "grey",
        borderRadius: "4px",
        background: "",
    };
    constructor() {
        super()
    }
    static styles = [
        css`
    .cc__radio__button__label{
        display: flex;
    align-items: center;
    }
/* checkbox style */
    `
    ];
    render() {
        return html`<label dir=${this.dir}  style=${styleMap(this.labelStyle())} class="cc__radio__button__label"> ${this.labelText}
    <input type="radio" @change=${this.updateChechbox} ?disabled=${this.disabled}  ?checked=${this.checked} style=${styleMap(this.checkboxStyle())}>
  </label>`;
    }
    requestUpdate(name?: PropertyKey, oldValue?: unknown, options?: PropertyDeclaration<unknown, unknown>): void {
        super.requestUpdate(name, oldValue)
    }
    updateChechbox: any = (event: any) => {
        this.checked = event.target?.checked
        this.dispatchEvent(new CustomEvent('cc-change', {
            bubbles: true,
            composed: true,
            detail: event.target?.checked
        }));
    }
    labelStyle: any = () => {
        return {
            font: this.style?.labelTextFont,
            color: this.style?.labelTextColor
        }
    }
    checkboxStyle: any = () => {
        return {
            height: this.style?.height,
            width: this.style?.width,
            border: this.style?.border,
            borderRadius: this.style?.borderRadius,
            background: this.style?.background,
        }
    }
}
declare global {
    interface HTMLElementTagNameMap {
        'cometchat-radio-button': CometChatRadioButton
    }
}
