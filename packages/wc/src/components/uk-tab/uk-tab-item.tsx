import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "uk-tab-item",
  shadow: true,
})
export class UkTabItem {
  @Prop({ reflect: true }) header = "";
  @Prop({ reflect: true }) active = false;
  @Prop({ reflect: true }) disabled = false;

  render() {
    return (
      <Host>
        <slot name="header">{this.header}</slot>
        {this.active ? <slot /> : null}
      </Host>
    );
  }
}
