import { baseService } from "./baseService";
import { MAGRPHIM } from "../utils/Settings/config";

export class QuanLyRapService extends baseService {
  constructor() {
    super();
  }
  layDanhSachHeThongRap = () => {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${MAGRPHIM}`
    );
  };
}

export const quanLyPhimService = new QuanLyRapService();
