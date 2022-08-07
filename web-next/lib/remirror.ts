import { BoldExtension, ItalicExtension } from "remirror/extensions";
import { useRemirror } from "@remirror/react";

const { manager } = useRemirror({
  extensions: () => [new BoldExtension(), new ItalicExtension()],
});
