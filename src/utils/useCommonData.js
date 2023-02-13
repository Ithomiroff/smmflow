import { useAppRootContext } from "@/context/AppRoot";
import { useEffect } from "react";

const useCommonData = (data) => {
  const { setData } = useAppRootContext();

  useEffect(() => {
    setData({ ...data })
  }, [setData, data]);
};

export {
  useCommonData
};
