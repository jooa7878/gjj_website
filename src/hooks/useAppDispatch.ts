import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/configStore";

export const useAppDispatch = () => useDispatch<AppDispatch>();
