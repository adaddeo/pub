import { keymap } from "prosemirror-keymap";
import { history } from "prosemirror-history";
import { baseKeymap } from "prosemirror-commands";
import { NodeType, Schema } from "prosemirror-model";
import { isEmpty } from "lodash";
import { buildInputRules } from "./inputRules";
import { buildKeymap } from "./keymap";

import { Plugin } from "prosemirror-state";
import { Decoration, DecorationSet, EditorView } from "prosemirror-view";

let purplePlugin = new Plugin({
  props: {
    decorations(state) {
      const decorations: Decoration[] = [];

      state.doc.descendants((node, pos) => {
        if (node.type.name == "title" && isEmpty(node.textContent)) {
          decorations.push(
            Decoration.node(pos, pos + node.nodeSize, {
              "data-placeholder": "Title",
            })
          );
        }

        if (node.type.name == "body" && isEmpty(node.textContent)) {
          decorations.push(
            Decoration.node(pos, pos + node.nodeSize, {
              "data-placeholder": "Body",
            })
          );
        }

        return false;
      });

      return DecorationSet.create(state.doc, decorations);
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
