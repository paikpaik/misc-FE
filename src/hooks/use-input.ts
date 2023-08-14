import { Action } from "../shared/models/action.interface";
import { InputActionType } from "./models/InputAction";
import { InputState } from "./models/InputState.interface";

const initialInputState: InputState = {
  text: "",
  hasBeenTouched: false,
};

const inputReducer = (state: InputState, action: Action<InputActionType>) => {};
