import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "uk-leader",
  shadow: true,
})
export class UkLeader {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
