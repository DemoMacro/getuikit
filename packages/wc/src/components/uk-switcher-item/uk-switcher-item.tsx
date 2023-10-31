import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "uk-switcher-item",
  shadow: true,
})
export class UkSwitcherItem {
  @Prop({ reflect: true }) active = false;
  @Prop({ reflect: true }) disabled = false;

  render() {
    return <Host>{this.active ? <slot /> : null}</Host>;
  }
}
