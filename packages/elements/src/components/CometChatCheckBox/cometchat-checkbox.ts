import { LitElement, html, css, PropertyValueMap, PropertyPart, PropertyDeclaration } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
@customElement('cometchat-checkbox')
export class CometChatCheckbox extends LitElement {
  @property({ type: Boolean }) checked: boolean = false;
  @property() name: string = "";
  @property({ attribute: false }) dir: "ltr" | "rtl" | "auto" = "auto";
  @property() labelText: string = "";
  @property({ type: Boolean }) disabled: boolean = false;
  @property() style: any = {
    height: "24px",
    width: "24px",
    border: "none",
    labelTextFont: "400 14px Inter",
    labelTextColor: "grey",
    borderRadius: "4px",
    background: "",
    checkedBackgroundColor: "#2196F3",
    uncheckedBackgroundColor: "#ccc"
  };
  constructor() {
    super()
  }
  static styles = [
    css`
/* checkbox style */
.cc__checkbox__label {
    display: block;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  /* Hide the browser's default checkbox */
  .cc__checkbox__label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  /* Create a custom checkbox */
  .cc__checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    border-radius: 4px;
  }
  /* Create the cc__checkmark/indicator (hidden when not checked) */
  .cc__checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  /* Show the cc__checkmark when checked */
  .cc__checkbox__label input:checked ~ .cc__checkmark:after {
    display: block;
  }
  /* Style the cc__checkmark/indicator */
  .cc__checkbox__label .cc__checkmark:after {
    left: 8px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
    `
  ];
  render() {
    return html`<label dir=${this.dir}  style=${styleMap(this.labelStyle())} class="cc__checkbox__label"> ${this.labelText}
    <input type="checkbox" @change=${this.updateChechbox} ?disabled=${this.disabled}  ?checked=${this.checked}>
    <span class="cc__checkmark"  style=${styleMap(this.checkboxStyle())}></span>
  </label>`;
  }
  requestUpdate(name?: PropertyKey, oldValue?: unknown, options?: PropertyDeclaration<unknown, unknown>): void {
    super.requestUpdate(name, oldValue)
  }

  updateChechbox: any = (event: any) => {
    if (event && event.stopPropagation) {
      event.stopPropagation()
    }
    event?.preventDefault()
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
      background: this.checked ? this.style?.checkedBackgroundColor : this.style?.uncheckedBackgroundColor,
    }
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cometchat-checkbox': CometChatCheckbox
  }
}
