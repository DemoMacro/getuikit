import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "uk-modal",
  shadow: true,
})
export class UkModal {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
