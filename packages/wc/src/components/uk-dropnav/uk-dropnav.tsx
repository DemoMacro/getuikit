import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "uk-dropnav",
  shadow: true,
})
export class UkDropnav {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
