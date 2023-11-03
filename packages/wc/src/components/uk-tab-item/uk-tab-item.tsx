import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "uk-tab-item",
  styleUrl: "uk-tab-item.css",
})
export class UkTabItem {
  @Prop({ reflect: true }) active = false;
  @Prop({ reflect: true }) disabled = false;

  componentWillRender() {
    if (this.disabled) {
      this.active = false;
    }
  }

  render() {
    return (
      <Host class="uk-tab-item">
        <slot />
      </Host>
    );
  }
}
