import React, { useState } from "react";
import { ModalBody } from "react-bootstrap";
import FaskesData from "../../interface/fasker_interface";
import InputText from "../../component/Input/inputText";

interface ShowModalProps {
  show: boolean;
  onHide: () => void;
  faskedData?: FaskesData;
}

const ShowModal: React.FC<ShowModalProps> = ({ show, onHide, faskedData }) => {
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

  const updateFormValue = ({
    updateType,
    value,
  }: {
    updateType: string;
    value: string;
  }) => {
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
          readonly={true}
          updateFormValue={updateFormValue}
        />

        <InputText
          defaultValue={formData.kategori_faskes}
          type="text"
          updateType="kategori_faskes"
          containerStyle="mt-4"
          labelTitle="Tipe Fasilitas Kesehatan"
          readonly={true}
          updateFormValue={updateFormValue}
        />

        <InputText
          defaultValue={formData.alamat_faskes}
          type="text"
          updateType="alamat_faskes"
          containerStyle="mt-4"
          labelTitle="Alamat"
          readonly={true}
          updateFormValue={updateFormValue}
        />
        <InputText
          defaultValue={formData.nomor_whatsapp_faskes}
          type="text"
          updateType="nomor_whatsapp_faskes"
          containerStyle="mt-4"
          labelTitle="Nomor Whatsapp"
          readonly={true}
          updateFormValue={updateFormValue}
        />
        <div className="d-flex justify-content-center mt-2">
          <button className={"btn btn-warning mr-2"} type="submit">
            Sunting
          </button>
          <button className="btn btn-danger" onClick={onHide}>
            Hapus
          </button>
        </div>
      </form>
    </ModalBody>
  );
};

export default ShowModal;
