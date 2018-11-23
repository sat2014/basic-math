import { useEffect } from 'react'

const useLocalStorage = (key, value, flag)  => {
  useEffect(function persistResult() {
    if (flag && value !== 0)
      localStorage.setItem(key, JSON.stringify(value))
  })
}

export default useLocalStorage