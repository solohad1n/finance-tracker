import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { auth } from "../firebase/config";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false)

  const signup = async (email, password, name) => {
    setError(null);
    setIsPending(true);

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
    }
    catch (error) {
      console.log(error.message);
      setError(error.message)
      setIsPending(false)
    }
  }
  return { signup, error, isPending }
}