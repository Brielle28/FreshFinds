import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";

const PersonalInfo = () => {
  const { handleNext } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Personal Info</h2>
      <button onClick={handleNext} className="mt-4 btn btn-primary">
        Next
      </button>
    </div>
  );
};

export default PersonalInfo;
