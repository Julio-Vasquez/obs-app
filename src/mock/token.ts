interface BaseToken {
  iat: number
  exp: number
}

interface Token extends BaseToken {
  username: string
  rol: string
}

const getValues = (): BaseToken => {
  const now = new Date()
  const iat = now.getTime()
  now.setMinutes(now.getMinutes() + 1)
  const exp = now.getTime()

  return { iat, exp }
}

const generateToken = (): Token => {
  const { exp, iat } = getValues()
  return {
    username: 'DarKPhuRioN',
    rol: 'Admin',
    iat,
    exp,
  }
}

export default generateToken()
