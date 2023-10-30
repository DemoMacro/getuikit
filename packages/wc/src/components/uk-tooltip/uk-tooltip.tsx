import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "uk-tooltip",
  shadow: true,
})
export class UkTooltip {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
