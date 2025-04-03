import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ThemesType, StepsType } from "../types";

type FormData = {
  name: string;
  email: string;
  phone: string;
  interests: string[];
  theme: ThemesType;
};

type FormContextType = {
  step: StepsType;
  changeStep: (step: StepsType) => void;
  formData: FormData;
  updateFormData: (name: string, value: string | string[]) => void;
};

const formContext = createContext<FormContextType | undefined>(undefined);

const FormContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState<StepsType>("profile");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    theme: "dark",
    interests: [],
  });

  const changeStep = useCallback((newStep: StepsType) => {
    setStep(newStep);
  }, []);

  const updateFormData = useCallback(
    (name: string, value: string | string[]) => {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const value = useMemo(
    () => ({
      step,
      changeStep,
      formData,
      updateFormData,
    }),
    [step, changeStep, formData, updateFormData]
  );

  return <formContext.Provider value={value}>{children}</formContext.Provider>;
};

const useForm = () => {
  const context = useContext(formContext);
  if (!context) {
    throw new Error("useForm must be used inside FormContextProvider");
  }

  return context;
};

export { FormContextProvider, useForm };
