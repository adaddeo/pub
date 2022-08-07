import { keymap } from "prosemirror-keymap";
import { history } from "prosemirror-history";
import { baseKeymap } from "prosemirror-commands";
import { Schema } from "prosemirror-model";
import { buildInputRules } from "./inputRules";
import { buildKeymap } from "./keymap";

import { Plugin } from "prosemirror-state";
import { Decoration, DecorationSet, EditorView } from "prosemirror-view";

let purplePlugin = new Plugin({
  props: {
    decorations(state) {
      if (state.doc.firstChild?.textContent) {
        return DecorationSet.create(state.doc, [
          Decoration.inline(0, state.doc.content.size, {
            "data-placholder": "Title",
            style: "color: purple",
          }),
        ]);
      }
    },
  },
});

export function buildPlugins(options: { schema: Schema }) {
  return [
    buildInputRules(options.schema),
    keymap(buildKeymap(options.schema)),
    keymap(baseKeymap),
    history(),
    purplePlugin,
  ];
}
