import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux/configStore";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
