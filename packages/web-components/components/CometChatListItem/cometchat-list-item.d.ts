import { LitElement, PropertyDeclaration } from 'lit';
export declare class CometChatListItem extends LitElement {
    id: string;
    avatarURL: string;
    avatarName: string;
    statusIndicatorColor: string;
    statusIndicatorIcon: string;
    avatarStyle: any;
    statusIndicatorStyle: any;
    title: string;
    options: any;
    tail: any;
    hideSeparator: any;
    isActive: boolean;
    clickCallback: Function;
    dir: string;
    style: any;
    isHovering: boolean;
    hideShowTail: () => void;
    setActiveItem: (e: any) => void;
    requestUpdate(name?: PropertyKey, oldValue?: unknown, options?: PropertyDeclaration<unknown, unknown>): void;
    dividerStyles: {
        height: string;
        width: string;
        background: string;
    };
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
    listItemStyles: {
        listItemStyle: () => {
            height: any;
            width: any;
            borderRadius: any;
            background: any;
        };
        itemDetailStyle: (style: any) => {
            paddingLeft: string;
            width: string;
            flexGrow: string;
        };
        titleStyle: (style: any) => {
            font: any;
            color: any;
        };
        dividerStyle: () => {
            marginLeft: any;
            marginRight: string;
        };
    };
}
declare global {
    interface HTMLElementTagNameMap {
        'cometchat-list-item': CometChatListItem;
    }
}
//# sourceMappingURL=cometchat-list-item.d.ts.map