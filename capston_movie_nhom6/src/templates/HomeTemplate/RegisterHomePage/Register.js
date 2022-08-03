import React from "react";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import {
  dangKy,
  dangNhapAction,
} from "../../../redux/actions/QuanLyNguoiDungAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Img } from "../../../assets/images/Images";
import * as Yup from "yup";
import { MAGRPHIM } from "../../../utils/Settings/config";
const contentStyle = {
  backgroundPosition: "top",
  backgroundsize: "cover",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
};

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  console.log(userLogin, "userLogin");
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      maNhom: MAGRPHIM,
      hoTen: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string()
        .required("tài khoản không được để trống!!")
        .min(3, "tài khoản có ít nhất 3 ký tự trở lên"),
      hoTen: Yup.string().required("Họ và tên không được để trống!!"),
      email: Yup.string()
        .required("Email không được để trống!!")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Vui lòng nhập email đúng đính dạng"
        ),
      matKhau: Yup.string()
        .required("Password không được để trống!!")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "mật khẩu có ít nhất 8 ký tự, chứa số, chứa chữ và ký tự đặc biệt"
        ),
      soDT: Yup.string()
        .required("SDT không được để trống!!")
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          "vui lòng nhập SDT đúng"
        ),
    }),
    onSubmit: (values) => {
      const action = dangKy(values, navigate);
      dispatch(action);
      console.log("value", values);
    },
  });
  console.log(formik.errors.email);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        style={{
          ...contentStyle,
          backgroundImage:
            "url(https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/movie-details-bg.jpg)",
        }}
      >
        <NavLink
          to="/"
          className="py-4 w-full bg-transparent lg:bg-transparent flex justify-center lg:justify-start lg:px-12 absolute "
        >
          <div className="cursor-pointer items-center hidden lg:block">
            <img src={Img[0]} width={100} />
          </div>
        </NavLink>

        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
          <div className="flex justify-center self-center z-10">
            <div className="p-10 bg-white mx-auto rounded-2xl w-full">
              <div className="mb-2">
                <h3 className="font-semibold text-2xl text-gray-800">
                  ĐĂNG KÝ{" "}
                </h3>
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Tài Khoản
                  </label>
                  <input
                    name="taiKhoan"
                    onChange={formik.handleChange}
                    className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    placeholder="Nhập tài khoản"
                  />
                  {formik.errors.taiKhoan && (
                    <p className="text-red-600">{formik.errors.taiKhoan}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Mật khẩu
                  </label>
                  <input
                    name="matKhau"
                    type="password"
                    onChange={formik.handleChange}
                    className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    placeholder="Nhập mật khẩu"
                  />
                  {formik.errors.matKhau && (
                    <p className="text-red-600">{formik.errors.matKhau}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    placeholder="Nhập email"
                  />
                </div>
                {formik.errors.email && (
                  <p className="text-red-600">{formik.errors.email}</p>
                )}
                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Số Điện Thoại
                  </label>
                  <input
                    name="soDT"
                    type="text"
                    onChange={formik.handleChange}
                    className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    placeholder="Nhập số điện thoại"
                  />
                  {formik.errors.soDT && (
                    <p className="text-red-600">{formik.errors.soDT}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Họ Tên
                  </label>
                  <input
                    name="hoTen"
                    type="text"
                    onChange={formik.handleChange}
                    className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    placeholder="Nhập họ tên"
                  />
                  {formik.errors.hoTen && (
                    <p className="text-red-600">{formik.errors.hoTen}</p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Đăng Ký
                  </button>
                </div>
                <div className="bg-white mx-auto rounded-2xl w-100">
                  Ban đã có tài khoản?
                  <NavLink
                    to="/login"
                    className="ml-1 cursor-pointer text-green-400 hover:text-green-600"
                  >
                    Đăng Nhập
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
