import {
  createContext,
  useCallback,
  useContext,
  useReducer,
  useState
} from "react";

const AppRootContext = createContext({});

const useAppRootContext = () => useContext(AppRootContext);

const AppRoot = ({ children }) => {

  const [appData, setAppData] = useState({
    categories: [],
  });

  const setData = useCallback((valueObject) => setAppData(prev => ({...prev, ...valueObject})), [setAppData]);

  const value = {
    appData,
    setData
  };

  return (
    <AppRootContext.Provider value={value}>
      {children}
    </AppRootContext.Provider>
  );
};

export {
  AppRoot,
  useAppRootContext,
}
