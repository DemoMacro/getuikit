import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "uk-countdown",
  shadow: true,
})
export class UkCountdown {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
