/* eslint-disable @typescript-eslint/no-unused-vars */
import {RegisterNuiCB} from '../helpers/utils'

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
  },
  false
);

RegisterNuiCB('closeNui', () => {
  toggleNui(focusState);
});

