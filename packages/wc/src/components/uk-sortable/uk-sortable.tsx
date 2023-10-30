import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "uk-sortable",
  shadow: true,
})
export class UkSortable {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
