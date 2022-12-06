var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
let CometChatSearch = class CometChatSearch extends LitElement {
    constructor() {
        var _a, _b, _c, _d, _e;
        super();
        this.name = "";
        this.searchText = "";
        this.placeholderText = "Start typing...";
        this.searchCallback = () => { };
        this.searchIconURL = `src/components/assets/search.svg`;
        this.style = {
            height: "fit-content",
            width: "fit-content",
            border: "1px solid #dedede",
            searchTextFont: "400 14px Inter",
            searchTextColor: "grey",
            placeholderTextFont: "500 13px Inter",
            placeholderTextColor: "#bcbcbc",
            borderRadius: "6px",
            background: "",
            searchIconTint: "grey"
        };
        this.inputStyle = {
            height: "100%",
            width: "100%",
            border: "none",
            borderRadius: "inherit",
            background: "transparent"
        };
        this.iconStyle = {
            height: "24px",
            width: "24px",
            iconTint: "grey"
        };
        this.keyDownEvent = (str) => {
            if (this.searchCallback) {
                this.searchCallback(str);
            }
        };
        this.inputStyle.placeholderTextFont = (_a = this.style) === null || _a === void 0 ? void 0 : _a.placeholderTextFont;
        this.inputStyle.placeholderTextColor = (_b = this.style) === null || _b === void 0 ? void 0 : _b.placeholderTextColor;
        this.inputStyle.textFont = (_c = this.style) === null || _c === void 0 ? void 0 : _c.searchTextFont;
        this.inputStyle.textColor = (_d = this.style) === null || _d === void 0 ? void 0 : _d.searchTextColor;
        this.iconStyle.iconTint = (_e = this.style) === null || _e === void 0 ? void 0 : _e.searchIconTint;
    }
    render() {
        return html `<div class="search__Style" style= ${styleMap(this.searchStyle())} >
          <cometchat-icon class="icon__style"  .URL=${this.searchIconURL} .style=${this.iconStyle}></cometchat-icon>
          <cometchat-input class="input__style" .searchCallback=${this.keyDownEvent}  placeholderText=${this.placeholderText} value=${this.searchText} .style=${this.inputStyle}></cometchat-input>
</div>`;
    }
    searchStyle() {
        var _a, _b, _c, _d, _e, _f;
        return {
            height: (_a = this.style) === null || _a === void 0 ? void 0 : _a.height,
            width: (_b = this.style) === null || _b === void 0 ? void 0 : _b.width,
            border: (_c = this.style) === null || _c === void 0 ? void 0 : _c.border,
            borderRadius: (_d = this.style) === null || _d === void 0 ? void 0 : _d.borderRadius,
            background: (_e = this.style) === null || _e === void 0 ? void 0 : _e.background,
            boxShadow: (_f = this.style) === null || _f === void 0 ? void 0 : _f.boxShadow
        };
    }
};
CometChatSearch.styles = [
    css `
    .search__Style{
      display: flex;
      align-items: center;

    }
    .input__style{
      display: flex;
      align-items: center;
      padding:2px 0px;
      width:100%;
    }
    .icon__style{margin-top:3px;}


    `
];
__decorate([
    property()
], CometChatSearch.prototype, "name", void 0);
__decorate([
    property()
], CometChatSearch.prototype, "searchText", void 0);
__decorate([
    property()
], CometChatSearch.prototype, "placeholderText", void 0);
__decorate([
    property({ type: Function })
], CometChatSearch.prototype, "searchCallback", void 0);
__decorate([
    property()
], CometChatSearch.prototype, "searchIconURL", void 0);
__decorate([
    property()
], CometChatSearch.prototype, "style", void 0);
CometChatSearch = __decorate([
    customElement('cometchat-search')
], CometChatSearch);
export { CometChatSearch };
//# sourceMappingURL=cometchat-search.js.map