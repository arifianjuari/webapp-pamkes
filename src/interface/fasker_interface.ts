interface FaskesData {
    id: string
    alamat_faskes: string;
    created_at: number; // Assuming Unix timestamp in seconds
    deskripsi_faskes: string;
    foto_faskes: string;
    kategori_faskes: string;
    latitude: number;
    longitude: number;
    nama_faskes: string;
    nama_petugas: string;
    nomor_whatsapp_faskes: string;
}

export default FaskesData;
