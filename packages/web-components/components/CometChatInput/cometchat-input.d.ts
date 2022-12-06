import { LitElement } from 'lit';
export declare class CometChatInput extends LitElement {
    disabled: boolean;
    value: string;
    type: string;
    checked: boolean;
    placeholderText: string;
    hidden: boolean;
    multiple: boolean;
    accept: string;
    searchCallback: Function;
    dir: string;
    style: any;
    static styles: import("lit").CSSResult[];
    keyDownCallback: (e: any) => void;
    render(): import("lit-html").TemplateResult<1>;
    inputStyle: () => {
        font: any;
        color: any;
        height: any;
        width: any;
        border: any;
        borderRadius: any;
        background: any;
        boxShadow: any;
    };
    placeholderStyle: () => {
        font: any;
        color: any;
        background: any;
    };
}
declare global {
    interface HTMLElementTagNameMap {
        'cometchat-input': CometChatInput;
    }
}
//# sourceMappingURL=cometchat-input.d.ts.map