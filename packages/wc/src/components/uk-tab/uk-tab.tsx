import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "uk-tab",
  shadow: true,
})
export class UkTab {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
