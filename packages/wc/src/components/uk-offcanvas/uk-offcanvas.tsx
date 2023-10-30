import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "uk-offcanvas",
  shadow: true,
})
export class UkOffcanvas {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
