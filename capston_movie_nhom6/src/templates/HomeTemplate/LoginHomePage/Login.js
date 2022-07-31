import React from "react";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import { dangNhapAction } from "../../../redux/actions/QuanLyNguoiDungAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Img } from "../../../assets/images/Images";
const contentStyle = {
  backgroundPosition: "top",
  backgroundsize: "cover",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
};

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  console.log(userLogin, "userLogin");
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      const action = dangNhapAction(values, navigate);
      dispatch(action);
      console.log("value", values);
    },
  });
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
          <div className="cursor-pointer flex items-center">
            <img src={Img[0]} width={100} />
          </div>
        </NavLink>

        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
          <div className="flex justify-center self-center  z-10">
            <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-gray-800">
                  ĐĂNG NHẬP{" "}
                </h3>
                <p className="text-gray-500">Hãy đăng nhập tài khoản của bạn</p>
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
                    placeholder="Nhập vào tài khoản"
                  />
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
                    placeholder="Nhập vào mật khẩu"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember_me"
                      className="ml-2 block text-sm text-gray-800"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="text-green-400 hover:text-green-500">
                      Quên mật khẩu
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Đăng Nhập
                  </button>
                </div>
                <div className="p-6 bg-white mx-auto rounded-2xl w-100">
                  Ban chưa có tài khoản?
                  <NavLink
                    to="/register"
                    className="cursor-pointer text-green-400 hover:text-green-600 ml-1"
                  >
                    Đăng Ký
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
