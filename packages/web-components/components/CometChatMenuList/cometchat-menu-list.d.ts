import { LitElement, PropertyValueMap } from 'lit';
export declare class CometChatMenuList extends LitElement {
    data: any;
    list: {}[];
    moreIconURL: string;
    mainMenuLimit: number;
    style: any;
    subMenuStyle: any;
    isOpen: boolean;
    mainMenuList: any[];
    subMenuList: any[];
    isShown: boolean;
    static styles: import("lit").CSSResult[];
    connectedCallback(): void;
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    onMenuItemClick(item: any, e: any): void;
    /**
     * hide show submenu on click of more icon
     * @param  {any} e
     */
    toggleShow(e: any): void;
    mainMenuItems(): {}[];
    subMenuItems(): {}[];
    render(): import("lit-html").TemplateResult<1>;
    subMenuStyles(): any;
    mainMenuStyles(): {
        background: any;
        borderRadius: any;
        border: any;
    };
}
declare global {
    interface HTMLElementTagNameMap {
        'cometchat-menu-list': CometChatMenuList;
    }
}
//# sourceMappingURL=cometchat-menu-list.d.ts.map