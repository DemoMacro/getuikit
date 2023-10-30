import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "uk-dropbar",
  shadow: true,
})
export class UkDropbar {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
