"use client";
import Link from "next/link";
import scss from "./Header.module.scss";

const Header = () => {
  return (
    <header className={scss.header}>
      <div className={scss.header_info}>
        <p className={scss.info_text}>
          아이러브밤은 미성년자 또는 불법 성매매 광고를 등록 시키지 않습니다.
          규정에 의하여 19세 미만의 청소년이 이용할수 없습니다.
        </p>
      </div>
      <nav className={scss.header_nav}>
        <ul className={scss.header_nav_list}>
          <li>
            <Link className={scss.list_link} href="">
              라인업/PR
            </Link>
          </li>
          <li>
            <Link className={scss.list_link} href="">
              실시간 출근부
            </Link>
          </li>
          <li>
            <Link className={scss.list_link} href="">
              차트 
            </Link>
          </li>
          <li>
            <Link className={scss.list_link} href="">
              매니저 정보
            </Link>
          </li>
          <li>
            <Link className={scss.list_link} href="">
              탐험기
            </Link>
          </li>
          <li>
            <Link className={scss.list_link} href="">
              커뮤니티
            </Link>
          </li>
          <li>
            <Link className={scss.list_link} href="">
              매거진
            </Link>
          </li>
          <li>
            <Link className={scss.list_link} href="">
              오락실 
            </Link>
          </li>
          <li>
            <Link className={scss.list_link} href="">
              회원센터마이페이지
            </Link>
          </li>
        </ul>
        <div className={scss.header_box}>
          <ul className={scss.header_box_list}>
            <li className={scss.box_list_item}></li>
            <li className={scss.box_list_item}></li>
            <li className={scss.box_list_item}></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
