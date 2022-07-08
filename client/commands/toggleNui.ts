interface Show {
  focus: boolean;
  cursor: boolean;
}

const focusState = {
  focus: true,
  cursor: true,
};

export const toggleNui = (show: Show) => {
  SetNuiFocus(show.focus, show.cursor);
  SendNUIMessage({
    action: "toggleNui",
    key: "visible",
    params: show.focus,
  });
  focusState.focus = !focusState.focus;
  focusState.cursor = !focusState.cursor;
};

RegisterCommand(
  "showNui", //Chnage this command name to match your resource
  async (source: number, args: string[]) => {
    toggleNui(focusState);
    console.log("Show NUI frame", source, args);
  },
  false
);

// eslint-disable-next-line @typescript-eslint/ban-types
on("closeNui", function (data: Show, cb: Function) {
  toggleNui(focusState);
  console.log("Hide NUI frame", focusState.cursor, focusState.focus);
  cb(focusState);
});
