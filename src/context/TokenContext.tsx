import { createContext, PropsWithChildren, useEffect, useState } from 'react'

import token from '../mock/token'

type Context = {
  expired: boolean
  closeModal: () => void
}

export const TokenContext = createContext<Context | null>(null)

export const TokenProvider = ({ children }: PropsWithChildren) => {
  const [expired, setExpired] = useState<boolean>(false)
  const timer = token.exp - token.iat

  const handleClosed = () => setExpired(false)

  useEffect(() => {
    const interval = setInterval(() => setExpired(true), timer)

    return () => clearInterval(interval)
  }, [])

  return (
    <TokenContext.Provider value={{ expired, closeModal: handleClosed }}>
      {children}
    </TokenContext.Provider>
  )
}
