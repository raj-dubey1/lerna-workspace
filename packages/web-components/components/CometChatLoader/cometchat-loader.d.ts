import { LitElement } from 'lit';
export declare class CometChatLoader extends LitElement {
    name: string;
    iconURL: string;
    style: any;
    iconStyle: any;
    constructor();
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1> | undefined;
    inputStyle: () => {
        height: any;
        width: any;
        border: any;
        borderRadius: any;
        background: any;
    };
}
declare global {
    interface HTMLElementTagNameMap {
        'cometchat-loader': CometChatLoader;
    }
}
//# sourceMappingURL=cometchat-loader.d.ts.map