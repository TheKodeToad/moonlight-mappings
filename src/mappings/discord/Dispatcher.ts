import register from "../../registry";
import type { Dispatcher } from "./packages/flux/Dispatcher";

type Exports = {
  default: Dispatcher<any>;
};
export default Exports;

register((moonmap) => {
  const name = "discord/Dispatcher";
  moonmap.register({
    name,
    find: '.Early=0]="Early",',
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
