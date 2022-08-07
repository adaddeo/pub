import { useState, useEffect, useRef, useTransition, useCallback } from "react";
import { EditorState, Plugin } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema } from "prosemirror-model";

export type ProseViewChangeEvent = {
  state: EditorState;
};

type UseProseViewOptions = {
  editorState: EditorState;
  onChange?: (event: ProseViewChangeEvent) => unknown;
};

function useProseView({ editorState, onChange }: UseProseViewOptions) {
  const [_isPending, startTransition] = useTransition();

  const view = useRef<EditorView>();

  const domRef = useCallback(
    (node: HTMLDivElement) => {
      startTransition(() => {
        if (node !== null && !view.current) {
          view.current = new EditorView(node, {
            state: editorState,
            dispatchTransaction(tr) {
              view.current?.updateState(this.state.apply(tr));
              onChange &&
                onChange({
                  state: this.state,
                });
            },
          });
        }
      });
    },
    [editorState, onChange]
  );

  // useEffect(() => {
  //   if (view && editorState) {
  //     if (view.state !== editorState) {
  //       view.updateState(editorState);
  //     }
  //   }
  // }, [editorState]);

  return domRef;
}

export { useProseView };
