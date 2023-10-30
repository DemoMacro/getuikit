import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "uk-slideshow",
  shadow: true,
})
export class UkSlideshow {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
