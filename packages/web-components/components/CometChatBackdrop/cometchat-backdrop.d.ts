import { LitElement } from 'lit';
export declare class CometChatBackdrop extends LitElement {
    isOpen: boolean;
    onClick: any;
    style: any;
    list: {
        id: string;
        title: string;
        iconURL: string;
        callBack: null;
    }[];
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1> | undefined;
    clickHandler: () => void;
    backDropStyle(): {
        height: any;
        width: any;
        border: any;
        borderRadius: any;
        background: any;
    };
}
declare global {
    interface HTMLElementTagNameMap {
        'cometchat-backdrop': CometChatBackdrop;
    }
}
//# sourceMappingURL=cometchat-backdrop.d.ts.map