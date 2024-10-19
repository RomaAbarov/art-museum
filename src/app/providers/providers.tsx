import {
  defaultValues,
  schemaSearch,
  TSearch,
} from "@/pages/home/model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Provider } from "react-redux";
import { persistor, store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";

type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  const methods = useForm<TSearch>({
    mode: "onChange",
    resolver: zodResolver(schemaSearch),
    defaultValues,
  });

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <FormProvider {...methods}>{children}</FormProvider>
      </PersistGate>
    </Provider>
  );
}
