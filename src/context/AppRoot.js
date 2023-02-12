import {
  createContext,
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

  const setData = (valueObject) => setAppData(prev => ({...prev, ...valueObject}));

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
