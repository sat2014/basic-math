import { useEffect } from 'react'

const useLocalStorage = (key, value)  => {
  useEffect(function persistResult() {
    if (value !== 0)
      localStorage.setItem(key, JSON.stringify(value))
  })
}

export default useLocalStorage