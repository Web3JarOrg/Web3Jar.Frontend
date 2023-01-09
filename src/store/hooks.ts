import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "./store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useJars = () => useAppSelector((store) => store.jars.jarsData);

export const useJarData = (address: string) => {
  return useAppSelector((store) => {
    return store.jars.jarsData.find(
      (j) => j.address.toLowerCase() === address.toLowerCase()
    );
  });
};

export const useLoader = () => useAppSelector((store) => store.loader);
