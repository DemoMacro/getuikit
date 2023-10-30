import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "uk-notification",
  shadow: true,
})
export class UkNotification {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
