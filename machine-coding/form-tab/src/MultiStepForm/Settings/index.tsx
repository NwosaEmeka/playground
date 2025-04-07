import { useForm } from "../../context/formContext";

const Settings = () => {
  const { formData, updateFormData } = useForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Dark</label>
        <input
          type="radio"
          name="theme"
          id="dark"
          value="dark"
          checked={formData.theme === "dark"}
          onChange={() => updateFormData("theme", "dark")}
        />
      </div>
      <div>
        <label>Light</label>
        <input
          type="radio"
          name="theme"
          id="light"
          value="light"
          checked={formData.theme === "light"}
          onChange={() => updateFormData("theme", "light")}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Settings;
