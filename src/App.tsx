import Home from './views/Home'

import { TokenProvider } from './context/TokenContext'

const App = () => (
  <TokenProvider>
    <Home />
  </TokenProvider>
)

export default App
