import { useEffect } from 'react'

const useScroll = (event, callback) => {
  useEffect(() => {
    window.addEventListener(event, callback)

    return () => window.removeEventListener(event, callback)
  }, [event, callback])
}

export default useScroll
