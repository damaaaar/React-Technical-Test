import { useEffect, useState } from 'react'

export function useGenerateImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  const CAT_FACT_PREFIX = 'https://cataas.com'

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 1).join()
    const CAT_ENDPOINT_RANDOM_IMG = `https://cataas.com/cat/says/${firstWord}?height=600&json=true`

    fetch(CAT_ENDPOINT_RANDOM_IMG)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl: `${CAT_FACT_PREFIX}${imageUrl}` }
}
