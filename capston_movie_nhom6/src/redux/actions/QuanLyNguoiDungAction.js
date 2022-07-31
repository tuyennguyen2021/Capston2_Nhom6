import Swal from "sweetalert2";
import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDung";
import {
  DANG_NHAP,
  LAY_DANH_SACH_LOAI_NGUOI_DUNG,
  LAY_DANH_SACH_NGUOI_DUNG,
  LAY_DANH_SACH_NGUOI_DUNG_KEYWORD,
  SET_THONG_TIN_NGUOUI_DUNG,
} from "../constants";

export const dangNhapAction = (thongTinDangNhap, navigate) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
      if (result.data.statusCode === 200) {
        console.log("result", result);
        dispatch({
          type: DANG_NHAP,
          thongTinDangNhap: result.data.content,
        });
        // chuyen huong dang nhap
        navigate(-1, { replace: true });
      }
    } catch (errors) {
      console.log(errors, "errors");
    }
  };
};

export const layThongTinNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinNguoiDung();
      if (result.data.statusCode === 200) {
        console.log("resultnew", result);
        dispatch({
          type: SET_THONG_TIN_NGUOUI_DUNG,
          thongTinNguoiDung: result.data.content,
        });
      }
    } catch (errors) {
      console.log(errors, "errors");
    }
  };
};

export const capNhatNguoiDungActionForUser = (user, navigate) => {
  console.log(user, "admin");
  return async () => {
    let result = null;
    if (user.maLoaiNguoiDung === "QuanTri") {
      result = await quanLyNguoiDungService.capNhatNguoiDungAdmin(user);
    } else {
      result = await quanLyNguoiDungService.capNhatNguoiDungUser(user);
    }

    try {
      if (result.data.statusCode === 200) {
        await Swal.fire({
          title: "cập nhật thành công!!",
          text: "đăng nhập lại để xem thay đổi",
          icon: "success",
          confirmButtonText: "OK",
        });
        console.log("result123", result);

        navigate("/login", { replace: true });
      }
    } catch (errors) {
      Swal.fire({
        title: "có lỗi xảy ra!!!",
        text: errors.response.data.content,
        icon: "error",
        confirmButtonText: "đã hiểu",
      });
      console.log(errors.response.data.content, "errors");
    }
  };
};

export const dangKy = (thongTinDangKy, navigate) => {
  return async () => {
    try {
      const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);
      if (result.data.statusCode === 200) {
        Swal.fire({
          title: "Đăng Ký thành công!!",
          icon: "success",
          confirmButtonText: "đăng nhập ngay",
        });
        navigate("/login", { replace: true });
      }
    } catch (error) {
      Swal.fire({
        title: "có lỗi xảy ra!!!",
        text: error.response.data.content,
        icon: "error",
        confirmButtonText: "đã hiểu",
      });
    }
  };
};

export const layDanhSachNguoiDungAction = () => {
  return async (dispatch) => {
    const result = await quanLyNguoiDungService.layDanhSachNguoiDung();
    try {
      if (result.data.statusCode === 200) {
        dispatch({
          type: LAY_DANH_SACH_NGUOI_DUNG,
          arrUser: result.data.content,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const timKiemNguoiDungAction = (keyWord) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.timKiemNguoiDung(keyWord);
      if (result.data.statusCode === 200) {
        dispatch({
          type: LAY_DANH_SACH_NGUOI_DUNG_KEYWORD,
          arrUserSearch: result.data.content,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const layDanhSachLoaiNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layDanhSachLoaiNguoiDung();
      if (result.data.statusCode === 200) {
        dispatch({
          type: LAY_DANH_SACH_LOAI_NGUOI_DUNG,
          arrTypeUser: result.data.content,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const themNguoiDung = (user, navigate) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.themNguoiDung(user);
      if (result.data.statusCode === 200) {
        await Swal.fire({
          title: "Thêm mới thành công!",
          icon: "success",
          confirmButtonText: "Ok",
        });
        await dispatch(layDanhSachNguoiDungAction());
        navigate("/admin/users", { replace: true });
      }
    } catch (errors) {
      Swal.fire({
        title: "Có lỗi xảy ra!",
        text: errors.response.data.content,
        icon: "error",
        confirmButtonText: "Thử lại",
      });
    }
  };
};

export const xoaNguoiDungAction = (taiKhoan) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.xoaNguoiDung(taiKhoan);
      if (result.data.statusCode === 200) {
        Swal.fire("Đã xoá", "Người dùng đã được xoá", "success");
        dispatch(layDanhSachNguoiDungAction());
      }
    } catch (errors) {
      Swal.fire({
        title: "Có lỗi xảy ra!",
        text: errors.response.data.content,
        icon: "error",
        confirmButtonText: "Đã hiểu!",
      });
    }
  };
};

export const capNhatNguoiDungAction = (user, navigate) => {
  return async (dispatch) => {
    const result = await quanLyNguoiDungService.capNhatNguoiDung(user);

    try {
      if (result.data.statusCode === 200) {
        await Swal.fire({
          title: "Cập nhật thành công!",
          icon: "success",
          confirmButtonText: "Ok",
        });
        await dispatch(layDanhSachNguoiDungAction());
        await navigate(-1);
      }
    } catch (errors) {
      Swal.fire({
        title: "Có lỗi xảy ra!",
        text: errors.response.data.content,
        icon: "error",
        confirmButtonText: "Đã hiểu!",
      });
    }
  };
};
