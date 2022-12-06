import { LitElement } from 'lit';
export declare class CometChatBadge extends LitElement {
    count: number | string;
    style: any;
    static styles: import("lit").CSSResult[];
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1> | undefined;
    getStyle: () => {
        border: string;
        borderRadius: any;
        background: any;
        color: any;
        font: any;
        width: any;
        height: any;
    };
}
declare global {
    interface HTMLElementTagNameMap {
        'cometchat-badge': CometChatBadge;
    }
}
//# sourceMappingURL=cometchat-badge.d.ts.map