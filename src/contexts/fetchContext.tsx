import React, { useState, createContext, ReactNode } from "react";

import { TemperatureMocks } from "../mocks/Temperature";
import { IProps } from "../types/temperature";

import { FetchAPI } from "../services/api";

interface FetchContextProps {
  children: ReactNode;
}

interface IFetchContext {
  fetchData: (search: string) => void;
  data: IProps;
  loading: boolean;
  error: boolean;
}

const initialState = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  fetchData: () => {},
  data: TemperatureMocks,
  loading: true,
  error: false,
};

export const FetchContext = createContext<IFetchContext>(initialState);

export const FetchProvider = ({ children }: FetchContextProps) => {
  const [data, setData] = useState<IProps>(initialState.data);
  const [loading, setLoading] = useState(initialState.loading);
  const [error, setError] = useState(false);

  const fetchData = async (search: string): Promise<void> => {
    try {
      setLoading(true);

      const response = await FetchAPI.get(`${search}&days=1&aqi=no&alerts=no`);

      const responseData = await response.data;

      setData(responseData);

      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FetchContext.Provider
      value={{
        fetchData,
        data,
        loading,
        error,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
};
