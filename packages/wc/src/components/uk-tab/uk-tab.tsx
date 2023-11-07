import { Component, Element, Host, Listen, Prop, h } from "@stencil/core";

@Component({
  tag: "uk-tab",
  shadow: true,
  styles: "@unocss-placeholder",
})
export class UkTab {
  @Prop({ reflect: true, mutable: true }) active = 0;
  @Prop({ reflect: true }) name = "";
  @Prop({ reflect: true }) variant: "top" | "bottom" | "left" | "right" = "top";

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
    const baseClass =
      "uk-flex uk-flex-wrap uk-relative before:uk-absolute before:uk-content-empty";
    const topClass =
      "before:uk-position-bottom-none before:uk-position-left-none before:uk-position-right-none before:uk-border-b-1 before:uk-border-b-solid before:uk-border-b-light-900 children:uk-border-b-solid children:uk-justify-center";
    const bottomClass =
      "before:uk-position-top-none before:uk-position-left-none before:uk-position-right-none before:uk-border-t-1 before:uk-border-t-solid before:uk-border-t-light-900 children:uk-border-t-solid children:uk-justify-center";
    const leftClass =
      "uk-flex-col children:uk-justify-left before:uk-position-top-none before:uk-position-bottom-none before:uk-position-left-none before:uk-border-l-1 before:uk-border-l-solid before:uk-border-l-light-900 children:uk-border-l-solid";
    const rightClass =
      "uk-flex-col children:uk-justify-left before:uk-position-top-none before:uk-position-bottom-none before:uk-position-right-none before:uk-border-r-1 before:uk-border-r-solid before:uk-border-r-light-900 children:uk-border-r-solid";

    const hostClass = {
      top: topClass,
      bottom: bottomClass,
      left: leftClass,
      right: rightClass,
    };

    return (
      <Host class={`${baseClass} ${hostClass[this.variant]}`}>
        <slot />
      </Host>
    );
  }
}
