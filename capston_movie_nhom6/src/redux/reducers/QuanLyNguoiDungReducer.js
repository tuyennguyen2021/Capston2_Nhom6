import {
  DANG_NHAP,
  LAY_DANH_SACH_LOAI_NGUOI_DUNG,
  LAY_DANH_SACH_NGUOI_DUNG,
  LAY_DANH_SACH_NGUOI_DUNG_KEYWORD,
  SET_THONG_TIN_NGUOUI_DUNG,
} from "../constants";
import { TOKEN, USER_LOGIN } from "../../utils/Settings/config";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: user,
  thongTinNguoiDung: user,
  arrUser: [],
  arrUserSearch: [],
  userInfo: {},
  arrTypeUser: [],
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP: {
      const { thongTinDangNhap } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
      return { ...state, userLogin: thongTinDangNhap };
    }
    case SET_THONG_TIN_NGUOUI_DUNG: {
      state.thongTinNguoiDung = action.thongTinNguoiDung;
      return { ...state };
    }
    case LAY_DANH_SACH_NGUOI_DUNG: {
      return { ...state, arrUser: action.arrUser };
    }
    case LAY_DANH_SACH_NGUOI_DUNG_KEYWORD: {
      state.arrUserSearch = action.arrUserSearch;
      state.arrUser = state.arrUserSearch;
      state.userInfo = state.arrUserSearch[0];
      return { ...state };
    }
    case LAY_DANH_SACH_LOAI_NGUOI_DUNG: {
      return { ...state, arrTypeUser: action.arrTypeUser };
    }
    default:
      return { ...state };
  }
};
