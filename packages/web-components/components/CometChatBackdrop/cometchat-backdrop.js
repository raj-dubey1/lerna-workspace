var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
let CometChatBackdrop = class CometChatBackdrop extends LitElement {
    constructor() {
        super(...arguments);
        this.isOpen = true; //If `true`, the component is shown
        this.style = {
            background: "black"
        }; //Styles applied to the backdrop element
        this.list = [
            {
                id: "delete",
                title: "delete",
                //inside style
                iconURL: `../../../assets/search.svg`,
                callBack: null,
            },
            {
                id: "edit",
                title: "edit",
                //inside style
                iconURL: `../../../assets/search.svg`,
                callBack: null,
            },
            {
                id: "delete",
                title: "delete",
                //inside style
                iconURL: `../../../assets/search.svg`,
                callBack: null,
            },
            {
                id: "edit",
                title: "edit",
                //inside style
                iconURL: `../../../assets/search.svg`,
                callBack: null,
            },
            {
                id: "delete",
                title: "delete",
                //inside style
                iconURL: `../../../assets/search.svg`,
                callBack: null,
            },
            {
                id: "edit",
                title: "edit",
                //inside style
                iconURL: `../../../assets/search.svg`,
                callBack: null,
            }
        ];
        this.clickHandler = () => {
            if (this.onClick) {
                this.onClick();
            }
        };
    }
    render() {
        // return html`<cometchat-menu-list .list=${this.list}></cometchat-menu-list>`
        if (this.isOpen) {
            return html `<div class="backdrop__Style" style= ${styleMap(this.backDropStyle())}  @click= ${this.clickHandler}>
    <div class="modal__dialog">
       <slot></slot>
       
    </div>
</div>`;
        }
    }
    backDropStyle() {
        var _a, _b, _c, _d, _e;
        return {
            height: (_a = this.style) === null || _a === void 0 ? void 0 : _a.height,
            width: (_b = this.style) === null || _b === void 0 ? void 0 : _b.width,
            border: (_c = this.style) === null || _c === void 0 ? void 0 : _c.border,
            borderRadius: (_d = this.style) === null || _d === void 0 ? void 0 : _d.borderRadius,
            background: (_e = this.style) === null || _e === void 0 ? void 0 : _e.background,
        };
    }
};
CometChatBackdrop.styles = [
    css `
    .backdrop__Style {
      opacity: .3;
      position: fixed;
      width: 100%;
      height: 100%;
      transition: .3s ease-out 0;
      top: 0;
      left: 0;
      z-index: 5;
    }
    .modal__dialog {
      opacity: 100;
    }
    
    `
];
__decorate([
    property()
], CometChatBackdrop.prototype, "isOpen", void 0);
__decorate([
    property()
], CometChatBackdrop.prototype, "onClick", void 0);
__decorate([
    property({ type: Object })
], CometChatBackdrop.prototype, "style", void 0);
CometChatBackdrop = __decorate([
    customElement('cometchat-backdrop')
], CometChatBackdrop);
export { CometChatBackdrop };
//# sourceMappingURL=cometchat-backdrop.js.map