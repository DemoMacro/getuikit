import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "uk-slider",
  shadow: true,
})
export class UkSlider {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
