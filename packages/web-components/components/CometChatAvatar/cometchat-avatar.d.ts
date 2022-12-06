import { LitElement } from 'lit';
export declare class CometChatAvatar extends LitElement {
    image: string;
    name: string;
    style: any;
    static styles: import("lit").CSSResult[];
    constructor();
    update(changedProperties: Map<string, unknown>): void;
    updateAvatar(): void;
    avatar: string;
    generateAvatar: (data: string) => string;
    getCanvasFontSize(font: string): string;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    getImageStyle: () => {
        backgroundSize: any;
        backgroundImage: string;
        border: string;
        borderRadius: any;
    };
    getContainerStyle: () => {
        height: any;
        width: any;
        borderRadius: any;
    };
    getOuterViewStyle: () => {
        height: any;
        width: any;
        borderRadius: any;
        outline: any;
        outlineOffset: any;
    };
}
declare global {
    interface HTMLElementTagNameMap {
        'cometchat-avatar': CometChatAvatar;
    }
}
//# sourceMappingURL=cometchat-avatar.d.ts.map