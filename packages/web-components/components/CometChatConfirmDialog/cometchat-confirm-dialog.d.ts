import { LitElement } from 'lit';
export declare class CometChatConfirmDialog extends LitElement {
    title: string;
    messageText: string;
    cancelButtonText: string;
    confirmButtonText: string;
    cancelButtonIconURL: string;
    confirmButtonIconURL: string;
    onConfirm: any;
    onCancel: any;
    style: any;
    loadingIconURL: string;
    static styles: import("lit").CSSResult[];
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
   * loading icon wrapper style
   * @param  {string} state
   */
    dialogWrapperStyle: () => {
        height: any;
        width: any;
        background: any;
        border: any;
        borderRadius: any;
    };
    dialogFormStyle: () => {
        display: string;
    };
    dialogTitleStyle(): {
        font: any;
        color: any;
    };
    dialogMessageStyle: () => {
        textAlign: string;
        lineHeight: string;
        font: any;
        letterSpacing: string;
        color: any;
    };
    buttonConfirmStyle: () => {
        font: any;
        background: any;
        color: any;
    };
    buttonCancelStyle: () => {
        color: any;
        font: any;
        background: any;
    };
}
declare global {
    interface HTMLElementTagNameMap {
        'cometchat-confirm-dialog': CometChatConfirmDialog;
    }
}
//# sourceMappingURL=cometchat-confirm-dialog.d.ts.map