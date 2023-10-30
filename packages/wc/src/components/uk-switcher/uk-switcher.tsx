import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "uk-switcher",
  shadow: true,
})
export class UkSwitcher {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
