import React, { useState } from "react";
import FaskesData from "../../interface/fasker_interface";
import InputText from "../../component/Input/inputText";
import ErrorText from "../../component/Typography/ErrorText";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import showToast from "../../component/Toast/toast";
import { Button, ModalBody } from "react-bootstrap";

interface AddModalProps {
  show: boolean;
  onHide: () => void;
  faskedData?: FaskesData;
}

function AddModal(props: AddModalProps) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<FaskesData>({
    id: "",
    alamat_faskes: "",
    created_at: 0,
    deskripsi_faskes: "",
    foto_faskes: "",
    kategori_faskes: "",
    latitude: 0,
    longitude: 0,
    nama_faskes: "",
    nama_petugas: "",
    nomor_whatsapp_faskes: "",
  });

  const submitForm = async () => {
    setErrorMessage("");
    if (formData.nama_faskes?.trim() === "")
      return setErrorMessage("Nama Fasilitas is required");
    if (formData.kategori_faskes?.trim() === "")
      return setErrorMessage("kategori Fasilitas is required");
    if (formData.alamat_faskes?.trim() === "") {
      return setErrorMessage("alamat Fasilitas is required");
    }
    if (formData.nomor_whatsapp_faskes?.trim() === "") {
      return setErrorMessage("nomor Fasilitas is required");
    } else {
      try {
        setLoading(true);
        const faskesDocRef = collection(db, "faskes");
        await addDoc(faskesDocRef, {
          alamat_faskes: formData.alamat_faskes,
          kategori_faskes: formData.kategori_faskes,
          nama_faskes: formData.nama_faskes,
          nomor_whatsapp_faskes: formData.nomor_whatsapp_faskes,
          created_at: serverTimestamp(),
          deskripsi_faskes: "",
          foto_faskes: "",
          latitude: 0,
          longitude: 0,
          nama_petugas: "",
        });
        showToast("Data Berhasil Ditambahkan");
        setLoading(false);
        props.onHide();
      } catch (error) {
        showToast("terjadi Kesalahan!");
        setLoading(false);
        props.onHide();
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
    <ModalBody>
      <form>
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

        <div className="d-flex justify-content-center mt-2">
          <button className="btn btn-danger mr-2" onClick={props.onHide}>
            Batal
          </button>
          <Button className="bg-success" variant="success" onClick={submitForm}>
            Simpan
          </Button>
        </div>
      </form>
    </ModalBody>
  );
}

export default AddModal;
