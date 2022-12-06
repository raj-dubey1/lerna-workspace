import { LitElement } from 'lit';
export declare class CometChatModal extends LitElement {
    title: string;
    closeIconURL: string;
    onClose: any;
    closeOnBackdropClick: boolean;
    style: any;
    iconStyle: any;
    constructor();
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
    modalView: () => void;
    modalWrapperStyle: () => {
        height: any;
        width: any;
        background: any;
        border: any;
        borderRadius: any;
        boxShadow: any;
    };
    titleStyle: () => {
        font: any;
        color: any;
    };
}
declare global {
    interface HTMLElementTagNameMap {
        'cometchat-modal': CometChatModal;
    }
}
//# sourceMappingURL=cometchat-modal.d.ts.map