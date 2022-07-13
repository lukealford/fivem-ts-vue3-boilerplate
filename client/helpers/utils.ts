/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-types
type CallbackFn<T> = (data: T, cb: Function) => void;

/**
 * A wrapper for handling NUI Callbacks
 *  @param event - The event name to listen for
 *  @param callback - The callback function
 */
export const RegisterNuiCB = <T = any>(event: string, callback: CallbackFn<T>) => {
  RegisterNuiCallbackType(event);
  on(`__cfx_nui:${event}`, callback);
};
