import { LitElement, PropertyDeclaration } from 'lit';
export declare enum Placement {
    top = 0,
    right = 1,
    bottom = 2,
    left = 3
}
export declare class CometChatPopOver extends LitElement {
    style: any;
    hasToolTip: boolean;
    placement: Placement;
    deg: any;
    x: any;
    y: any;
    tipPositionMapping: any;
    static styles: import("lit").CSSResult[];
    onclick: (e: any) => void;
    requestUpdate(name?: PropertyKey, oldValue?: unknown, options?: PropertyDeclaration<unknown, unknown>): void;
    render(): import("lit-html").TemplateResult<1>;
    toolTipWrapperStyle: any;
    toolTipContentStyle: any;
    toolTipStyles: any;
}
declare global {
    interface HTMLElementTagNameMap {
        'cometchat-pop-over': CometChatPopOver;
    }
}
//# sourceMappingURL=cometchat-pop-over.d.ts.map