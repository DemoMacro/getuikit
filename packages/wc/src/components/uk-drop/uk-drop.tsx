import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "uk-drop",
  shadow: true,
})
export class UkDrop {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
