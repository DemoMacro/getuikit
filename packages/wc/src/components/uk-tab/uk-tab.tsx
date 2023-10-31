import { Component, Element, Host, Listen, Prop, h } from "@stencil/core";

@Component({
  tag: "uk-tab",
  styleUrl: "uk-tab.scss",
  scoped: true,
})
export class UkTab {
  @Prop({ reflect: true, mutable: true }) active = 0;
  @Prop({ reflect: true }) name = "";

  @Element() el!: HTMLElement;

  @Listen("click", {})
  onClick(e: MouseEvent) {
    const target = e.target as HTMLUkTabItemElement;

    if (target.tagName === "UK-TAB-ITEM" && !target.disabled) {
      const items = this.el.querySelectorAll("uk-tab-item");

      this.active = Array.from(items).indexOf(target);
    }
  }

  componentWillRender() {
    const items = this.el.querySelectorAll("uk-tab-item");

    for (let i = 0; i < items.length; i++) {
      if (i === this.active) {
        items[i].setAttribute("active", "");
      } else {
        items[i].removeAttribute("active");
      }
    }

    // Update switcher
    const switcher = document.querySelector(
      `uk-switcher[connect="${this.name}"]`,
    ) as HTMLUkSwitcherElement;

    if (switcher) {
      switcher.active = this.active;
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
