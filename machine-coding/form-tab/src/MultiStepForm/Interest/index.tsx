import { useEffect, useState } from "react";
import { useForm } from "../../context/formContext";

const Interest = () => {
  const { formData, updateFormData } = useForm();
  const [interests, setInterests] = useState<string[]>(
    formData.interests || []
  );

  const handleChange = (checked: boolean, name: string) => {
    setInterests((prev) =>
      checked ? [...prev, name] : interests.filter((n) => n !== name)
    );
  };

  useEffect(() => {
    updateFormData("interests", interests);
  }, [interests, updateFormData]);

  return (
    <form>
      <div>
        <label>Football</label>
        <input
          type="checkbox"
          name="football"
          id="football"
          value="football"
          checked={formData.interests.includes("football")}
          onChange={(e) => handleChange(e.target.checked, e.target.name)}
        />
      </div>
      <div>
        <label>Music</label>
        <input
          type="checkbox"
          name="music"
          id="music"
          value="music"
          checked={formData.interests.includes("music")}
          onChange={(e) => handleChange(e.target.checked, e.target.name)}
        />
      </div>
      <div>
        <label>Reading</label>
        <input
          type="checkbox"
          name="reading"
          id="reading"
          value="reading"
          checked={formData.interests.includes("reading")}
          onChange={(e) => handleChange(e.target.checked, e.target.name)}
        />
      </div>
    </form>
  );
};

export default Interest;
