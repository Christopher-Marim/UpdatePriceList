import React, { createContext, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";

interface CurrentCompany {
  id: string;
  nome: string;
  cnpj_cpf: string;
  logocliente: string;
}
interface StateContextData {
  currentCompany: CurrentCompany | null;
  loading: boolean;
  setCompany(company:CurrentCompany): void;
}

const StateContext = createContext<StateContextData>({} as StateContextData);

const StateProvider: React.FC = ({ children }) => {
  const [currentCompany, setCurrentCompany] = useState<CurrentCompany | null>(null);
  const [loading, setLoading] = useState(false);

  function setCompany(company:CurrentCompany){
    setCurrentCompany(company);
  }

  return (
    <StateContext.Provider
      value={{ currentCompany, loading, setCompany }}
    >
      {children}
    </StateContext.Provider>
  );
};

function useCurrent() {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("useCurrent must be used within an AuthProvider.");
  }

  return context;
}

export { StateProvider, useCurrent };
