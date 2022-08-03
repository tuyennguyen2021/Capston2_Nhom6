import React, { useEffect, useState } from "react";
import { Tabs, Input, Button } from "antd";
import Booking from "../../../components/BookingHistory/Booking";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import "./Modal.css";
import { MAGRPHIM, USER_LOGIN } from "../../../utils/Settings/config";
import { Navigate, useNavigate } from "react-router-dom";
import {
  capNhatNguoiDungActionForUser,
  layThongTinNguoiDungAction,
} from "../../../redux/actions/QuanLyNguoiDungAction";

const { TabPane } = Tabs;
const onChange = (key) => {
  console.log(key);
};
export default function Profile(props) {
  if (!localStorage.getItem(USER_LOGIN))
    return <Navigate replace to="/login" />;
  return (
    <div className="p-5">
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Thông tin tài khoản" key="1">
          <Information {...props} />
        </TabPane>
        <TabPane tab="Lịch sử đặt vé" key="2">
          <Booking />
        </TabPane>
      </Tabs>
    </div>
  );
}

function Information(props) {
  const { thongTinNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const action = layThongTinNguoiDungAction();
    dispatch(action);
  }, []);
  console.log(thongTinNguoiDung, "thongTinNguoiDung123");

  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-0 mx-auto">
        <div className="flex flex-col text-center w-full mb-0">
          <h1 className="sm:text-3xl text-xl font-medium title-font mb-4 text-gray-900">
            Thông tin cơ bản
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto my-5">
          <div className="border-gray-200 border py-5 px-10 rounded-lg">
            <div className="text-base">
              <p>
                <span>Tài Khoản: {thongTinNguoiDung.taiKhoan}</span>
              </p>
              <p>
                <span>Họ Tên: {thongTinNguoiDung.hoTen}</span>
              </p>
              <p>
                <span>Email: {thongTinNguoiDung.email}</span>
              </p>
              <p>
                <span>Số Điện Thoại: {thongTinNguoiDung.soDT}</span>
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setOpenModal(true);
            }}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white mr-2 mt-4 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Thay Đổi Thông Tin
          </button>
          {openModal && <Modal {...props} closeModal={setOpenModal} />}
        </div>
      </div>
    </section>
  );
}

function Modal({ closeModal }) {
  const navigate = useNavigate();
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { thongTinNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  const dispatch = useDispatch();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: thongTinNguoiDung.taiKhoan,
      matKhau: thongTinNguoiDung.matKhau,
      email: thongTinNguoiDung.email,
      soDT: thongTinNguoiDung.soDT,
      maNhom: MAGRPHIM,
      maLoaiNguoiDung: thongTinNguoiDung.maLoaiNguoiDung,
      hoTen: thongTinNguoiDung.hoTen,
    },
    onSubmit: (values) => {
      const action = capNhatNguoiDungActionForUser(values, navigate);
      dispatch(action);
      console.log(values, "values");
    },
  });

  console.log(formik.initialValues, "values12");

  return (
    <div className="modalBackground w-full lg:w-2/4">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="tilte text-xl">Cập Nhật Thông Tin</div>
        <hr className="mt-3" />
        <div className="mt-4">
          <form onSubmit={formik.handleSubmit}>
            <div className="space-y-2 my-2">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                Họ Tên
              </label>
              <input
                value={formik.values.hoTen}
                name="hoTen"
                onChange={formik.handleChange}
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              />
            </div>
            <div className="space-y-2 my-2">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                Email
              </label>
              <input
                value={formik.values.email}
                name="email"
                onChange={formik.handleChange}
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              />
            </div>
            <div className="space-y-2 my-2">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                Số Điện Thoại
              </label>
              <input
                value={formik.values.soDT}
                name="soDT"
                onChange={formik.handleChange}
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              />
            </div>
            <div className="footer flex mt-8">
              <Button className="primary" htmlType="submit">
                Xác nhận
              </Button>
              <Button id="cancelBtn" onClick={() => closeModal(false)}>
                Thoát
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
