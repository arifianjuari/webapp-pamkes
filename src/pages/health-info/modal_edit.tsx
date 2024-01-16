import React, { useState, useEffect, FormEvent } from "react";
import { Button, Modal } from "react-bootstrap";
import FaskesData from "../../interface/fasker_interface";
import InputText from "../../component/Input/inputText";
import ErrorText from "../../component/Typography/ErrorText";
import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

interface EditModalProps {
  show: boolean;
  onHide: () => void;
  faskedData?: FaskesData;
}

const EditModal = ({ show, onHide, faskedData }: EditModalProps) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<FaskesData>({
    id: faskedData?.id || "",
    alamat_faskes: faskedData?.alamat_faskes || "",
    created_at: faskedData?.created_at || 0,
    deskripsi_faskes: faskedData?.deskripsi_faskes || "",
    foto_faskes: faskedData?.foto_faskes || "",
    kategori_faskes: faskedData?.kategori_faskes || "",
    latitude: faskedData?.latitude || 0,
    longitude: faskedData?.latitude || 0,
    nama_faskes: faskedData?.nama_faskes || "",
    nama_petugas: faskedData?.nama_petugas || "",
    nomor_whatsapp_faskes: faskedData?.nomor_whatsapp_faskes || "",
  });

  useEffect(() => {
    if (faskedData) {
      setFormData(faskedData);
    }
  }, [faskedData]);

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    if (formData.nama_faskes.trim() === "")
      return setErrorMessage("Nama Fasilitas is required");
    if (formData.kategori_faskes.trim() === "")
      return setErrorMessage("kategori Fasilitas is required");
    if (formData.alamat_faskes.trim() === "") {
      return setErrorMessage("alamat Fasilitas is required");
    }
    if (formData.nomor_whatsapp_faskes.trim() === "") {
      return setErrorMessage("nomor Fasilitas is required");
    } else {
      try {
        setLoading(true);
        const faskesDocRef = doc(db, "faskes", formData.id);
        await updateDoc(faskesDocRef, {
          alamat_faskes: formData.alamat_faskes,
          kategori_faskes: formData.kategori_faskes,
          nama_faskes: formData.nama_faskes,
          nomor_whatsapp_faskes: formData.nomor_whatsapp_faskes,
        });
        setLoading(false);
        onHide();
      } catch (error) {
        console.error("Error updating document: ", error);
        toast("react-toastify");
        setLoading(false);
      }
    }
  };
  const updateFormValue = ({
    updateType,
    value,
  }: {
    updateType: string;
    value: string;
  }) => {
    setErrorMessage("");
    setFormData({ ...formData, [updateType]: value });
  };
  return (
    <Modal.Body>
      <form onSubmit={(e) => submitForm(e)}>
        <InputText
          type="text"
          defaultValue={formData.nama_faskes}
          updateType="nama_faskes"
          containerStyle="mt-4"
          labelTitle="Nama Fasilitas Kesehatan"
          updateFormValue={updateFormValue}
        />

        <InputText
          defaultValue={formData.kategori_faskes}
          type="text"
          updateType="kategori_faskes"
          containerStyle="mt-4"
          labelTitle="Tipe Fasilitas Kesehatan"
          updateFormValue={updateFormValue}
        />

        <InputText
          defaultValue={formData.alamat_faskes}
          type="text"
          updateType="alamat_faskes"
          containerStyle="mt-4"
          labelTitle="Alamat"
          updateFormValue={updateFormValue}
        />
        <InputText
          defaultValue={formData.nomor_whatsapp_faskes}
          type="text"
          updateType="nomor_whatsapp_faskes"
          containerStyle="mt-4"
          labelTitle="Nomor Whatsapp"
          updateFormValue={updateFormValue}
        />
        <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
        <Modal.Footer>
          <Button variant="danger" onClick={onHide}>
            Delete
          </Button>
          <Button variant="outline-primary" type="submit">
            Update
          </Button>
        </Modal.Footer>
      </form>
    </Modal.Body>
  );
};
export default EditModal;
