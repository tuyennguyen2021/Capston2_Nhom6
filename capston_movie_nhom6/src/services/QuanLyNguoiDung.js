import { MAGRPHIM } from "../utils/Settings/config";
import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super();
  }
  dangNhap = (thongTinDangNhap) => {
    // thong tin dang nhap tai khoan, mat khuan
    return this.post(`api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };
  dangKy = (thongTinDangKy) => {
    return this.post(`api/QuanLyNguoiDung/DangKy`, thongTinDangKy);
  };

  layThongTinNguoiDung = () => {
    return this.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`);
  };
  capNhatNguoiDungAdmin = (user) => {
    return this.post(`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, user);
  };
  capNhatNguoiDungUser = (user) => {
    return this.put(`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, user);
  };
  layDanhSachNguoiDung = () => {
    return this.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${MAGRPHIM}`
    );
  };
  timKiemNguoiDung = (keyWord) => {
    return this.get(
      `api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${MAGRPHIM}&tuKhoa=${keyWord}`
    );
  };
  layDanhSachLoaiNguoiDung = () => {
    return this.get("api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung");
  };
  themNguoiDung = (user) => {
    return this.post("api/QuanLyNguoiDung/ThemNguoiDung", user);
  };
  xoaNguoiDung = (taiKhoan) => {
    return this.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
  };
  capNhatNguoiDung = (user) => {
    return this.post("api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", user);
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
