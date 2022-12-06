import { LitElement } from 'lit';
export declare class CometChatButton extends LitElement {
    disabled: boolean;
    text: string;
    iconURL: string;
    hoverText: string;
    onClick: any;
    style: any;
    iconStyle: any;
    constructor();
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
    buttonStyle(): any;
}
declare global {
    interface HTMLElementTagNameMap {
        'cometchat-button': CometChatButton;
    }
}
//# sourceMappingURL=cometchat-button.d.ts.map