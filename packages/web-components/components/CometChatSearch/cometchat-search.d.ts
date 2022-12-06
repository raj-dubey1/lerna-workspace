import { LitElement } from 'lit';
export declare class CometChatSearch extends LitElement {
    name: string;
    searchText: string;
    placeholderText: string;
    searchCallback: Function;
    searchIconURL: string;
    style: any;
    inputStyle: any;
    iconStyle: any;
    keyDownEvent: (str: string) => void;
    constructor();
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
    searchStyle(): {
        height: any;
        width: any;
        border: any;
        borderRadius: any;
        background: any;
        boxShadow: any;
    };
}
declare global {
    interface HTMLElementTagNameMap {
        'cometchat-search': CometChatSearch;
    }
}
//# sourceMappingURL=cometchat-search.d.ts.map