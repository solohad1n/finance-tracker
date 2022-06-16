import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth, projectAuth } from '../Firebase/config'

export const useLogin = () => {
  const [isCancelled, setIsCanlled] = useState(false)
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false)

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      await signInWithEmailAndPassword(auth, email, password)

      if (!isCancelled) {
        setIsCanlled(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }
  useEffect(() => {
    return () => setIsCanlled(true)
  }, [])

  return { login, isPending, error }
}