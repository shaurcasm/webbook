import { useState } from 'react';
import { Button, Modal } from 'antd';


// Modal with Button
export default function AddContact() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  // Action to Add contact

  return (
    <>
      <Button type='primary' onClick={toggleModal}>
        Add Contact
      </Button>
      <Modal title='Add Contact' visible={modal} onOk={() => setModal(true)} onCancel={() => setModal(false)}>
        
      </Modal>
    </>
  ) 
}