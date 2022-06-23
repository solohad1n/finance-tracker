import { addDoc, collection } from "firebase/firestore";
import { useEffect, useReducer, useState } from "react";
import { firestore } from "../Firebase/config";

const initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING': {
      return { ...state, isPending: action.payload }
    }
    default:
      return state;
  }
}

export const useCollection = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [response, dispatch] = useReducer(firestoreReducer, initialState)

  const collectionRef = collection(firestore, 'transactions')

  const addDocument = async (newDocument) => {
    dispatch({ type: 'IS_PENDING', payload: true })
    try {
      await addDoc(collectionRef, newDocument)
      dispatch({ type: 'IS_PENDING', payload: false })
    } catch (err) {
      console.log(err.message)
      dispatch({ type: 'IS_PENDING', payload: false })
    }
  }

  const deleteDocument = () => {

  };

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { addDocument, deleteDocument, isCancelled }
}