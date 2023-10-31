import { Component, Element, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "uk-switcher",
  shadow: true,
})
export class UkSwitcher {
  @Prop({ reflect: true, mutable: true }) active = 0;
  @Prop({ reflect: true }) connect = "";

  @Element() el!: HTMLElement;

  componentWillRender() {
    const items = this.el.querySelectorAll("uk-switcher-item");

    for (let i = 0; i < items.length; i++) {
      if (i === this.active) {
        items[i].setAttribute("active", "");
      } else {
        items[i].removeAttribute("active");
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
