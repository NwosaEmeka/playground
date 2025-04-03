import { STEPS } from "../constants";
import { useForm } from "../context/formContext";
import Interest from "./Interest";
import Profile from "./Profile";
import Settings from "./Settings";

const MultiStepForm = () => {
  const { step, changeStep } = useForm();

  const renderForm = () => {
    switch (step) {
      case STEPS.profile:
        return <Profile />;
      case STEPS.interests:
        return <Interest />;
      case STEPS.settings:
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => changeStep(STEPS.profile)}>Profile</button>
        <button onClick={() => changeStep(STEPS.interests)}>Interest</button>
        <button onClick={() => changeStep(STEPS.settings)}>Settings</button>
      </div>
      <div>{renderForm()}</div>
    </div>
  );
};

export default MultiStepForm;
