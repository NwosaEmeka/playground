import { useForm } from "../../context/formContext";

const Profile = () => {
  const { formData, updateFormData } = useForm();

  return (
    <form>
      <div>
        <label>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => updateFormData("name", e.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => updateFormData("email", e.target.value)}
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={(e) => updateFormData("phone", e.target.value)}
        />
      </div>
    </form>
  );
};

export default Profile;
