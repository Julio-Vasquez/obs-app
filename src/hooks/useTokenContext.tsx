import { useContext } from 'react'

import { TokenContext } from '../context/TokenContext'

export const useTokenContext = () => {
  const context = useContext(TokenContext)

  if (!context) {
    throw new Error(`TokenContext must be used within a provider`)
  }

  return { ...context }
}
