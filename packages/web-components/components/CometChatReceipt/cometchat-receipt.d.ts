import { LitElement } from 'lit';
export declare class CometChatReceipt extends LitElement {
    waitIcon: string;
    sentIcon: string;
    deliveredIcon: string;
    readIcon: string;
    errorIcon: string;
    receipt: receipts;
    static styles: import("lit").CSSResult[];
    icon: any;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1> | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'cometchat-receipt': CometChatReceipt;
    }
}
export declare enum receipts {
    wait = 0,
    sent = 1,
    delivered = 2,
    read = 3,
    error = 4
}
//# sourceMappingURL=cometchat-receipt.d.ts.map