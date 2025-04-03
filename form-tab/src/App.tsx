import { FormContextProvider } from "./context/formContext";
import "./App.css";
import MultiStepForm from "./MultiStepForm";

function App() {
  return (
    <FormContextProvider>
      <MultiStepForm />
    </FormContextProvider>
  );
}

export default App;
