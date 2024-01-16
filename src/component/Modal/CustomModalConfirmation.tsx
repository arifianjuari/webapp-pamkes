import React from "react";
import { Modal, Row, Button } from "react-bootstrap"; // Import necessary Bootstrap components

interface ApproveModalProps {
  show: boolean;
  message: string;
  handleClose: () => void;
  handleCloseApprove: () => void;
  onSubmitApprove: () => void;
}

const ApproveModal: React.FC<ApproveModalProps> = ({
  show,
  message,
  handleClose,
  handleCloseApprove,
  onSubmitApprove,
}) => {
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="text-center">
        {message}
        <Row className="mt-3 justify-content-center">
          <Button
            variant="secondary"
            className="mr-2 font-weight-bold text-white bg-secondary"
            onClick={handleCloseApprove}
          >
            Batalkan
          </Button>
          <Button
            type="button"
            variant="danger"
            onClick={onSubmitApprove}
            className="font-weight-bold bg-danger"
          >
            Hapus
          </Button>
          {""}
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ApproveModal;
