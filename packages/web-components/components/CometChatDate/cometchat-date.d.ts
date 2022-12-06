import { LitElement } from 'lit';
export declare class CometChatDate extends LitElement {
    style: any;
    timestamp: number;
    pattern: Function;
    static styles: import("lit").CSSResult[];
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    DateStyles: () => {
        font: any;
        color: any;
        backgroundColor: any;
        height: any;
        width: any;
        border: any;
        borderRadius: any;
        textAlign: string;
    };
}
declare global {
    interface HTMLElementTagNameMap {
        'cometchat-date': CometChatDate;
    }
}
//# sourceMappingURL=cometchat-date.d.ts.map