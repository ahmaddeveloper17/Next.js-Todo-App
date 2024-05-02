import axios from "axios";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useChangePassword = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");

  const sessionData = async () => {
    const session = await getSession();
    const email = session?.user?.email || "";
    setEmail(email);
  };
  useEffect(() => {
    sessionData();
  }, []);

  const handleChangePassword = async () => {
    try {
      const response = await axios.put(
        "http://localhost:3000/api/changePassword",
        {
          email: email,
          newPassword: newPassword,
        }
      );
      toast.success("successfully changed password");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    visible,
    setVisible,
    setNewPassword,
    newPassword,
    handleChangePassword,
  };
};

export default useChangePassword;
