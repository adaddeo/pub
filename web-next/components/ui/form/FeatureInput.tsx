import { EditorState } from "prosemirror-state";
import { ProseViewChangeEvent, useProseView } from "~lib/prosemirror/hooks";
import { textSchema } from "~lib/prosemirror/schema";
import { buildPlugins } from "../../../lib/prosemirror";

const editorState = EditorState.create({
  doc: textSchema.node("doc", null, [
    textSchema.node("title", null),
    textSchema.node("paragraph", null),
  ]),
  plugins: buildPlugins({ schema: textSchema }),
});

type BodyInputProps = {
  onChange?: (event: ProseViewChangeEvent) => void;
};

export function BodyInput({ onChange }: BodyInputProps) {
  const ref = useProseView({ editorState, onChange });
  return <div ref={ref} className="whitespace-pre" />;
}
