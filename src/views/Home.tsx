import { Modal } from 'antd'
import { useTokenContext } from '../hooks/useTokenContext'

const Home = () => {
  const { expired, closeModal } = useTokenContext()

  return (
    <div>
      <h1>hey hdp</h1>
      <Modal
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
