import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "uk-accordion",
  shadow: true,
})
export class UkAccordion {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
