import React, { Fragment, useState } from "react";
import { Img } from "../../assets/images/Images";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import _ from "lodash";
import { TOKEN, USER_LOGIN } from "../../utils/Settings/config";
import { NavLink } from "react-router-dom";
import { Dropdown, Space, Menu, Select } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
const { Option } = Select;

export default function Header() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const { t, i18n } = useTranslation();

  const handleChange = (value) => {
    i18n.changeLanguage(`${value}`);
    console.log(`selected ${value}`);
  };

  console.log(userLogin, "taokhoan");
  const menu =
    userLogin.maLoaiNguoiDung === "QuanTri" ? (
      <Menu
        items={[
          {
            label: <NavLink to="profile">Thông tin tài khoản</NavLink>,
            key: "0",
          },

          {
            label: <NavLink to="/admin">Quản Trị</NavLink>,
            key: "1",
          },
          {
            label: (
              <NavLink
                to="/"
                onClick={() => {
                  localStorage.removeItem(USER_LOGIN);
                  localStorage.removeItem(TOKEN);
                  window.location.reload();
                }}
              >
                Đăng Xuất
              </NavLink>
            ),
            key: "2",
          },
        ]}
      />
    ) : (
      <Menu
        items={[
          {
            label: <NavLink to="profile">Thông tin tài khoản</NavLink>,
            key: "0",
          },

          {
            label: (
              <NavLink
                to="/"
                onClick={() => {
                  localStorage.removeItem(USER_LOGIN);
                  localStorage.removeItem(TOKEN);
                  window.location.reload();
                }}
              >
                Đăng Xuất
              </NavLink>
            ),
            key: "1",
          },
        ]}
      />
    );

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-black p-2">
        <div className="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer">
          <img src={Img[0]} width="70" />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={handleNav}
            className="flex items-center px-3 py-2 text-xl text-white"
          >
            {nav ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
        <div className="w-full flex-grow hidden lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow text-white">
            <NavLink
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
            >
              {t("Trang Chủ")}
            </NavLink>
            <NavLink
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
            >
              {t("Tin Tức")}
            </NavLink>
            <NavLink
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
            >
              Cụm Rạp
            </NavLink>
          </div>
          {_.isEmpty(userLogin) ? (
            <Fragment>
              <div>
                <NavLink
                  to="/register"
                  className="block text-sm px-4 py-2 leading-none !text-gray-50 lg:mt-0"
                >
                  Đăng Ký
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/login"
                  className="inline-block text-sm px-4 py-2 leading-none border rounded !text-purple-500 border-purple-500 hover:border-transparent hover:!text-black hover:bg-purple-500 mt-4 lg:mt-0"
                >
                  Đăng Nhập
                </NavLink>
              </div>
            </Fragment>
          ) : (
            <Dropdown overlay={menu} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()} className="mr-6 ">
                <Space className="text-white">Hello!{userLogin.taiKhoan}</Space>
              </a>
            </Dropdown>
          )}

          <Select
            defaultValue="vi"
            style={{ width: 80 }}
            onChange={handleChange}
            className="py-6"
            bordered={false}
          >
            <Option value="en">
              <img src={Img[3]} width="40" />
            </Option>
            <Option value="vi">
              <img src={Img[2]} width="40" />
            </Option>
          </Select>
        </div>
        <div
          className={
            nav
              ? "w-full block flex-grow lg:hidden lg:flex lg:items-center lg:w-auto"
              : "  w-full block flex-grow lg:hidden lg:flex lg:items-center lg:w-auto hidden "
          }
        >
          <div className="text-sm lg:flex-grow text-white">
            <NavLink
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
            >
              Trang Chủ
            </NavLink>
            <NavLink
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
            >
              Tin Tức
            </NavLink>
            <NavLink
              to="/"
              className="block my-4 lg:inline-block lg:mt-0 text-white"
            >
              Cụm Rạp
            </NavLink>
          </div>
          {_.isEmpty(userLogin) ? (
            <Fragment>
              <div>
                <a
                  href="#"
                  className="inline-block text-sm py-2 leading-none text-white  hover:text-white  lg:mt-0"
                >
                  {t("Đăng Ký")}
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-block text-sm mt-4 px-4 py-2 leading-none border rounded text-purple-500 border-purple-500 hover:border-transparent hover:text-white hover:bg-purple-500 lg:mt-0"
                >
                  {t("Đăng Nhập")}
                </a>
              </div>
            </Fragment>
          ) : (
            <Dropdown overlay={menu} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space className="text-white">Hello!{userLogin.taiKhoan}</Space>
              </a>
            </Dropdown>
          )}
        </div>
      </nav>
    </div>
  );
}
