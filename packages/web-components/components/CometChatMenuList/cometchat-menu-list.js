var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
let CometChatMenuList = class CometChatMenuList extends LitElement {
    constructor() {
        super(...arguments);
        this.data = null;
        this.moreIconURL = `../../../assets/read.svg`; //Image URL for more icon
        this.mainMenuLimit = 2;
        this.style = {
            width: "",
            height: "",
            border: "",
            borderRadius: "",
            background: "transparent",
            moreIconTint: "",
            textFont: "",
            textColor: "",
            iconTint: "",
            iconBackground: "",
            iconBorder: "",
            iconBorderRadius: "",
        }; //CSS properties
        this.subMenuStyle = {
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "12px",
            background: "rgb(20, 20, 20)",
            textFont: "",
            textColor: "",
            iconTint: "",
            iconBackground: "",
            iconBorder: "",
            iconBorderRadius: "",
        };
        this.isOpen = true;
        this.mainMenuList = [];
        this.subMenuList = [];
        this.isShown = false; // hidden by defaul
    }
    connectedCallback() {
        this.mainMenuList = this.mainMenuItems();
        this.subMenuList = this.subMenuItems();
        super.connectedCallback();
    }
    updated(_changedProperties) {
        if (!this.isOpen) {
            this.isShown = false;
        }
        super.updated(_changedProperties);
    }
    onMenuItemClick(item, e) {
        this.isOpen = false;
        this.isShown = false;
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
        if (this.data) {
            item.callBack(this.data, e);
        }
        else {
            item.callBack();
        }
    }
    /**
     * hide show submenu on click of more icon
     * @param  {any} e
     */
    toggleShow(e) {
        debugger;
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
        this.isShown = !this.isShown;
    }
    // filtering main menu options from list 
    mainMenuItems() {
        var _a;
        const defaultNumber = this.mainMenuLimit - 1;
        return (_a = this.list) === null || _a === void 0 ? void 0 : _a.filter((item, i) => {
            return i <= defaultNumber;
        });
    }
    // filtering submenu options from list
    subMenuItems() {
        var _a;
        const defaultNumber = this.mainMenuLimit - 1;
        return (_a = this.list) === null || _a === void 0 ? void 0 : _a.filter((item, i) => {
            return i > defaultNumber;
        });
    }
    render() {
        return html `<div class="menu__options" style=${styleMap(this.mainMenuStyles())}">
      ${this.isOpen ? html `   <ul class="list__menu__item" >
      ${this.mainMenuList.map((item) => html ` <cometchat-button .onHoverText=${item.title} .iconURL=${item.iconURL}
        class="list__item__style" ></cometchat-button>`)}
  
  </ul>` : ""}
   
      <div class="more__icon">
       ${this.list && this.list.length > this.mainMenuLimit + 1 && this.isOpen ? html `   <div class="moremenu__class"
       @click=${(e) => { this.toggleShow(e); }}>
       <cometchat-button
       class="list__item__style"
       .iconURL=${this.moreIconURL}
       style="menuStyle"
       ></cometchat-button>
   </div>` : ""}
         
      </div>
  </div>
  
${this.isShown ? html `  <div >
<ul class="list__menu__item submenu_class"  style=${styleMap(this.subMenuStyles())}>
${this.subMenuList.map((menu) => html ` <cometchat-button  .onHoverText=${menu.title}  style="menuStyle" class="list__item__style"
  .iconURL=${menu.iconURL}  .title=${menu.title} >
</cometchat-button>`)}
   
</ul>
</div>` : ""}`;
    }
    // submenu style
    subMenuStyles() {
        return {
            ...this.subMenuStyle,
        };
    }
    // mainmenu style
    mainMenuStyles() {
        var _a, _b, _c;
        return {
            background: (_a = this.style) === null || _a === void 0 ? void 0 : _a.background,
            borderRadius: (_b = this.style) === null || _b === void 0 ? void 0 : _b.borderRadius,
            border: (_c = this.style) === null || _c === void 0 ? void 0 : _c.border
        };
    }
};
CometChatMenuList.styles = [
    css `
    .list__menu__item {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin: 0;
      padding-left: 0px;
      border-radius: inherit;
  
  }
  .menu__options {
      display: flex;
      align-items: center;
  }
  .more__icon{
      border-radius: inherit;
  }
  .moremenu__class{
      border-radius: inherit;
  }
  .submenu_class {
      display: flex;
      flex-direction: column;
      position: absolute;
      height: max-content;
      padding: 5px;
      width: max-content;
      max-height: 192px;
      z-index: 10;
      border-radius: 8px;
      overflow: visible;
      margin-top: 2px;
      right: 0;
  }
  .list__item__style{
      border-radius: inherit;
  }
    `
];
__decorate([
    property()
], CometChatMenuList.prototype, "data", void 0);
__decorate([
    property()
], CometChatMenuList.prototype, "list", void 0);
__decorate([
    property()
], CometChatMenuList.prototype, "moreIconURL", void 0);
__decorate([
    property()
], CometChatMenuList.prototype, "mainMenuLimit", void 0);
__decorate([
    property()
], CometChatMenuList.prototype, "style", void 0);
__decorate([
    property()
], CometChatMenuList.prototype, "subMenuStyle", void 0);
__decorate([
    property()
], CometChatMenuList.prototype, "isOpen", void 0);
CometChatMenuList = __decorate([
    customElement('cometchat-menu-list')
], CometChatMenuList);
export { CometChatMenuList };
//# sourceMappingURL=cometchat-menu-list.js.map