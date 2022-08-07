import { DOMOutputSpec, MarkSpec, NodeSpec, Schema } from "prosemirror-model";

const pDOM: DOMOutputSpec = ["p", 0],
  brDOM: DOMOutputSpec = ["br"],
  h1DOM: DOMOutputSpec = ["h1", 0];

const nodes = {
  doc: {
    content: "title block+",
  } as NodeSpec,

  title: {
    content: "inline*",
    parseDOM: [{ tag: "h1" }],
    toDOM() {
      return h1DOM;
    },
  } as NodeSpec,

  paragraph: {
    content: "inline*",
    group: "block",
    parseDOM: [{ tag: "p" }],
    toDOM() {
      return pDOM;
    },
  } as NodeSpec,

  text: {
    group: "inline",
  } as NodeSpec,

  hard_break: {
    inline: true,
    group: "inline",
    selectable: false,
    parseDOM: [{ tag: "br" }],
    toDOM() {
      return brDOM;
    },
  } as NodeSpec,
};

const emDOM: DOMOutputSpec = ["em", 0],
  strongDOM: DOMOutputSpec = ["strong", 0];

export const marks = {
  em: {
    parseDOM: [{ tag: "i" }, { tag: "em" }, { style: "font-style=italic" }],
    toDOM() {
      return emDOM;
    },
  } as MarkSpec,

  strong: {
    parseDOM: [
      { tag: "strong" },
      // This works around a Google Docs misbehavior where
      // pasted content will be inexplicably wrapped in `<b>`
      // tags with a font-weight normal.
      {
        tag: "b",
        getAttrs: (node: HTMLElement) =>
          node.style.fontWeight != "normal" && null,
      },
      {
        style: "font-weight",
        getAttrs: (value: string) =>
          /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null,
      },
    ],
    toDOM() {
      return strongDOM;
    },
  } as MarkSpec,
};

export const textSchema = new Schema({ nodes, marks });
