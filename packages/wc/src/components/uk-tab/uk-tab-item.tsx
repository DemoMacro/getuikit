import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "uk-tab-item",
  shadow: true,
})
export class UkTabItem {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
