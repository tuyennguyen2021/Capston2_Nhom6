import { baseService } from "./baseService";
import { MAGRPHIM } from "../utils/Settings/config";

export class QuanLyPhimService extends baseService {
  constructor() {
    super();
  }
  layDanhSachBanner = () => {
    return this.get(`api/QuanLyPhim/LayDanhSachBanner`);
  };
  layDanhSachPhim = () => {
    return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${MAGRPHIM}`);
  };
  layDanhSachPhimKeyWord = (keyword) => {
    return this.get(
      `api/QuanLyPhim/LayDanhSachPhim?maNhom=${MAGRPHIM}&tenPhim=${keyword}`
    );
  };

  layThongTinPhim = (maPhim) => {
    return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  };
  themMoiPhim = (formData) => {
    return this.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData);
  };
  xoaPhim = (maPhim) => {
    return this.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  };
  capNhatPhimUpload = (formData) => {
    return this.post(`/api/QuanLyPhim/CapNhatPhimUpload`, formData);
  };
}

export const quanLyPhimService = new QuanLyPhimService();
