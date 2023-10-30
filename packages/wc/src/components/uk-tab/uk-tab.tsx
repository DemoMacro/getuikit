import { Component, Element, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "uk-tab",
  shadow: true,
})
export class UkTab {
  @Prop({ reflect: true }) active = 0;
  @Prop({ reflect: true }) disabled: boolean | number = false;

  @Element() el!: HTMLElement;

  componentWillRender() {
    const items = this.el.querySelectorAll("uk-tab-item");

    for (let i = 0; i < items.length; i++) {
      if (i === this.active) {
        items[i].setAttribute("active", "");
      } else {
        items[i].removeAttribute("active");
      }
    }

    if (this.disabled) {
      const items = this.el.querySelectorAll("uk-tab-item");

      if (this.disabled === true) {
        for (let i = 0; i < items.length; i++) {
          items[i].setAttribute("disabled", "");
        }
      } else if (typeof this.disabled === "number") {
        for (let i = 0; i < items.length; i++) {
          if (i === this.disabled) {
            items[i].setAttribute("disabled", "");
          } else {
            items[i].removeAttribute("disabled");
          }
        }
      }
    }
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
