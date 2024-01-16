interface UserData {
    id: string,
    alamat: string;
    created_at: {
        seconds: number;
        nanoseconds: number;
    };
    foto_diri: string;
    foto_kartu_identitas: string;
    institusi: string;
    is_online: boolean;
    jabatan: string;
    jenis_kelamin: string;
    kabupaten: string;
    kecamatan: string;
    last_active: {
        seconds: number;
        nanoseconds: number;
    };
    nama_lengkap: string;
    nomor_bpjs: string;
    nomor_identifikasi: string;
    nomor_telepon: string;
    peran: string;
    provinsi: string;
    status_aktivasi: string;
    status_skrining: boolean;
    tanggal_lahir: string;
    token: string;
}

export default UserData;