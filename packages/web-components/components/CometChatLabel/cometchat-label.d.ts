import { LitElement } from 'lit';
export declare class CometChatLabel extends LitElement {
    text: string;
    dir: string;
    style: any;
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
    labelStyle(): {
        color: any;
        font: any;
        height: any;
        width: any;
        border: any;
        borderRadius: any;
        background: any;
    };
}
declare global {
    interface HTMLElementTagNameMap {
        'cometchat-label': CometChatLabel;
    }
}
//# sourceMappingURL=cometchat-label.d.ts.map