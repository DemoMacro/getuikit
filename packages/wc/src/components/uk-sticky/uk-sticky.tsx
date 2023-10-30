import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "uk-sticky",
  shadow: true,
})
export class UkSticky {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
