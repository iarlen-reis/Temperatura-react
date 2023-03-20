import React, { useState, createContext, ReactNode } from "react";

import axios from "axios";
import { TemperatureMocks } from "../mocks/Temperature";
import { IProps } from "../types/temperature";

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

  const fetchData = (search: string): void => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${
          import.meta.env.VITE_KEY
        }&q=${search}&days=1&aqi=no&alerts=no`,
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
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
