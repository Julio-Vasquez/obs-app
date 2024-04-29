import Home from './views/Home'
import { App as AppAntd } from 'antd'

import { TokenProvider } from './context/TokenContext'

const App = () => (
  <AppAntd>
    <TokenProvider>
      <Home />
    </TokenProvider>
  </AppAntd>
)

export default App
