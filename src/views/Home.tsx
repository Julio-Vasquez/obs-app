import { Modal } from 'antd'
import { useTokenContext } from '../hooks/useTokenContext'

const Home = () => {
  const { expired, closeModal } = useTokenContext()

  return (
    <div>
      <h1>Welcome to my App</h1>
      <Modal
        title="Token Expired"
        open={expired}
        onOk={closeModal}
        onCancel={closeModal}
        destroyOnClose
      >
        GG token
      </Modal>
    </div>
  )
}

export default Home
