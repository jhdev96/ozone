import React, { useState } from 'react';
import {Button} from '@jhdev96/ozone';
import {ButtonRow} from '@jhdev96/ozone';
import {Modal} from '@jhdev96/ozone';


export default function ModalExample(): JSX.Element 
{
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Button 
        variation="primary" 
        onClick={() => setModalVisible(true)}  
        flat
      >
        Show modal
      </Button>
      <Modal 
        theme="light"
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <Modal.Header>
          <Modal.Title>Example Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is a modal</Modal.Body>
        <Modal.Footer>
          <ButtonRow placement="right">
            <Button 
              className="margin-x"
              variation="secondary" 
              onClick={() => setModalVisible(false)}
              outline
            >
              Cancel
            </Button>
            <Button variation="primary" flat>Continue</Button>
          </ButtonRow>
        </Modal.Footer>
      </Modal>
    </>
  )
}