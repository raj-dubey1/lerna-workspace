var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
let CometChatListItem = class CometChatListItem extends LitElement {
    constructor() {
        super(...arguments);
        this.id = "";
        this.avatarURL = "";
        this.avatarName = "";
        this.statusIndicatorColor = "";
        this.statusIndicatorIcon = "";
        this.avatarStyle = {
            borderRadius: "16px",
            width: "28px",
            height: "28px",
            border: "none",
            backgroundColor: "white",
            textColor: "rgb(20,20,20)",
            backgroundSize: "cover",
            textFont: "500 16px Inter",
            outerView: "",
            outerViewSpacing: "",
        };
        this.statusIndicatorStyle = {
            borderRadius: "16px",
            width: "10px",
            height: "10px",
            border: "none",
        };
        this.title = "raj dubey";
        this.isActive = false;
        this.clickCallback = () => { };
        this.dir = "ltr";
        this.style = {
            background: "white",
            titleColor: "",
            titleFont: "500 16px Inter",
            width: "",
            height: "50px",
            border: "1px solid grey",
            borderRadius: "2px",
            borderBottom: "1px solid grey",
            seperatorColor: "1px solid rgb(222 222 222 / 46%)",
            activeBackground: "#eeeeee",
            hoverBackground: "#eeeeee"
        }; //consists of all styling properties
        this.isHovering = false;
        this.hideShowTail = () => {
            this.isHovering = !this.isHovering;
            this.requestUpdate("isHovering", !this.isHovering);
        };
        this.setActiveItem = (e) => {
            if (this.clickCallback) {
                this.clickCallback(this.id);
            }
            this.requestUpdate("isActive");
        };
        this.dividerStyles = {
            height: "1px",
            width: "100%",
            background: "grey"
        };
        this.listItemStyles = {
            listItemStyle: () => {
                var _a, _b, _c, _d, _e;
                return {
                    height: (_a = this.style) === null || _a === void 0 ? void 0 : _a.height,
                    width: (_b = this.style) === null || _b === void 0 ? void 0 : _b.width,
                    // border:this.style?.border,
                    borderRadius: (_c = this.style) === null || _c === void 0 ? void 0 : _c.borderRadius,
                    background: this.isHovering || this.isActive ? (_d = this.style) === null || _d === void 0 ? void 0 : _d.activeBackground : (_e = this.style) === null || _e === void 0 ? void 0 : _e.background
                };
            },
            itemDetailStyle: (style) => {
                const padding = { paddingLeft: "8px" };
                return {
                    width: "70%",
                    flexGrow: "1",
                    ...padding,
                };
            },
            titleStyle: (style) => {
                return {
                    font: style.titleFont,
                    color: style.titleColor,
                };
            },
            dividerStyle: () => {
                var _a;
                return {
                    marginLeft: ((_a = this.avatarStyle) === null || _a === void 0 ? void 0 : _a.height) || "36px",
                    marginRight: "8px"
                };
            }
        };
    }
    requestUpdate(name, oldValue, options) {
        super.requestUpdate();
    }
    render() {
        this.dividerStyles.background = this.style.seperatorColor || "grey";
        return html ` 
    <div class="list__item" 
style=" ${styleMap(this.listItemStyles.listItemStyle())}" data-id="id" @mouseenter=${this.hideShowTail} @mouseleave=${this.hideShowTail} @click=${this.setActiveItem}>
<div class="item__thumbnail">
<cometchat-avatar  .image="${this.avatarURL}" .name="${this.avatarName}" .style=${this.avatarStyle} >
</cometchat-avatar> 
  
<cometchat-status-indicator
  .backgroundColor="${this.statusIndicatorColor}" .backgroundImage="${this.statusIndicatorIcon}" .style=${this.statusIndicatorStyle}
>
</cometchat-status-indicator>
</div>
<div class="item__details">

<div class="item__title" style="${styleMap(this.listItemStyles.itemDetailStyle(this.style))}">
  <div class="item__innerTitle" style="${styleMap(this.listItemStyles.titleStyle(this.style))}">
  ${this.title}
  </div>
  <div> <slot name="subtitleView"></slot> </div>

</div>

<div class="tail__view">
${!this.isHovering ? html `<slot name="tailView"> </slot>` : ""}
</div>

<div class="menu__view">
${this.isHovering ? html `<slot name="menuView"> </slot>` : ""}

</div>
</div>

</div>
${!this.hideSeparator ? html `<div class-"divider__style" style=${styleMap(this.listItemStyles.dividerStyle())}> <cometchat-divider .style=${this.dividerStyles}></cometchat-divider> </div>` : nothing}

    `;
    }
};
CometChatListItem.styles = [
    css `
    *{box-sizing:border-box;}
    .item__details{
    display: flex;
    justify-content: space-between;
    width:100%;
    }
    .tail__view{
      display: flex;
    justify-content: center;
    align-items: center;
    }
    .menu__view{
      display: flex;
    justify-content: center;
    align-items: center;
    }
    .list__item{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
      position: relative;
      padding: 0 8px;
      
  
    }
    .item__thumbnail {
      display: flex;
      flex-direction: column;
      width: fit-content;
      height: auto;
      flex-shrink: 0;
      position: relative;
    }
    `
];
__decorate([
    property()
], CometChatListItem.prototype, "id", void 0);
__decorate([
    property()
], CometChatListItem.prototype, "avatarURL", void 0);
__decorate([
    property()
], CometChatListItem.prototype, "avatarName", void 0);
__decorate([
    property()
], CometChatListItem.prototype, "statusIndicatorColor", void 0);
__decorate([
    property()
], CometChatListItem.prototype, "statusIndicatorIcon", void 0);
__decorate([
    property({ type: Object })
], CometChatListItem.prototype, "avatarStyle", void 0);
__decorate([
    property({ type: Object })
], CometChatListItem.prototype, "statusIndicatorStyle", void 0);
__decorate([
    property()
], CometChatListItem.prototype, "title", void 0);
__decorate([
    property()
], CometChatListItem.prototype, "options", void 0);
__decorate([
    property()
], CometChatListItem.prototype, "tail", void 0);
__decorate([
    property()
], CometChatListItem.prototype, "hideSeparator", void 0);
__decorate([
    property()
], CometChatListItem.prototype, "isActive", void 0);
__decorate([
    property({ type: Function })
], CometChatListItem.prototype, "clickCallback", void 0);
__decorate([
    property()
], CometChatListItem.prototype, "dir", void 0);
__decorate([
    property({ type: Object })
], CometChatListItem.prototype, "style", void 0);
CometChatListItem = __decorate([
    customElement('cometchat-list-item')
], CometChatListItem);
export { CometChatListItem };
//# sourceMappingURL=cometchat-list-item.js.map