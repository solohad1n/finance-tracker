import { signOut } from "firebase/auth";
import { useState } from "react"
import { auth } from "../firebase/config";

export const useLoginout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false)

  const logout = () => {
    setError(null)
    setIsPending(true)
    try {
      await signOut(auth)
      setIsPending(false)
      setError(null)
    } catch (err) {
      console.log(err.message)
      setError(err.message)
      setIsPending(false)
    }
  }
  return { logout, error, isPending }
}