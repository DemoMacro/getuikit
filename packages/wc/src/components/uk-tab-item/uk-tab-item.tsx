import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "uk-tab-item",
  shadow: true,
  styles: "@unocss-placeholder",
})
export class UkTabItem {
  @Prop({ reflect: true }) active = false;
  @Prop({ reflect: true }) disabled = false;

  componentWillRender() {
    if (this.disabled) {
      this.active = false;
    }
  }

  render() {
    return (
      <Host
        class={`uk-flex uk-flex-items-center uk-case-upper uk-transition uk-p-xs uk-z-1 uk-text-3 uk-border-1 
        ${
          this.active
            ? "uk-border-blue-900 uk-text-blue-900"
            : "uk-border-transparent uk-text-dark-50"
        } 
        ${this.disabled ? "uk-cursor-default" : "uk-cursor-pointer"}
        ${!this.active && !this.disabled ? "hover:uk-text-dark-900" : ""}`}
      >
        <slot />
      </Host>
    );
  }
}
