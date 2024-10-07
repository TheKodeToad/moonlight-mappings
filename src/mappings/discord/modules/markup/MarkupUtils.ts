import register from "../../../../registry";
import { ReactElement } from "react";

// This isn't everything, but it's most of it
export type MarkupConfig = {
  hideSimpleEmbedContent?: boolean;
  formatInline?: boolean;
  noStyleAndInteraction?: boolean;
  isInteracting?: boolean;
  allowHeading?: boolean;
  allowList?: boolean;
  allowSubtext?: boolean;
  allowDevLinks?: boolean;
  previewLinkTarget?: boolean;
  shouldFilterKeywords?: boolean;
  viewingChannelId?: boolean;
};

export type MarkupUtils = {
  parse: (
    text: string,
    inline?: boolean,
    config?: MarkupConfig
    // also a fourth argument here but I don't know what it is
  ) => ReactElement;
};

register((moonmap) => {
  const name = "discord/modules/markup/MarkupUtils";
  moonmap.register({
    name,
    find: "parseEmbedTitle:",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});

export default MarkupUtils;
