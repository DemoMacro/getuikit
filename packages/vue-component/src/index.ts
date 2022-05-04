import { App } from "vue";
import Button from "./button";

const components = [Button];
// Global Registration
const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

// Partial Registration
export { Button, install };

export default {
  install,
};
