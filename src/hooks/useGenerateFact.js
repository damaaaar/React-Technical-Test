import { useState, useEffect } from 'react'
import { generateRandomFact } from '../services/fact'

export function useGenerateFact () {
  const [fact, setFact] = useState()

  const newFact = () => {
    generateRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(() => {
    newFact()
  }, [])

  return { fact, newFact }
}
