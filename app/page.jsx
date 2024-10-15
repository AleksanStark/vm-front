"use client";
import scss from "./page.module.scss";
import clsx from "clsx";
import { useState } from "react";
import Modal from "./components/Header/Modal/Modal";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClick = (event) => {
    if (event.target.matches("li")) {
      setIsOpen(true);
    }
  };

  return (
    <div className={scss.grid_box}>
      <Modal isOpen={isOpen} onClose={handleClose} />
      <div className={scss.profile}>
        <div className={scss.profile_item}></div>
        <div className={scss.profile_item_info}>
          <div className={scss.item_info_box}>
            <div className={scss.item_info_avatar}></div>
            <p className={scss.item_info_text}>맛집탐방매냐 (알밤정회원)</p>
            <div className={scss.item_info_btn_box}>
              <button className={clsx(scss.box_btn, scss.btn_shop)}></button>
              <button className={clsx(scss.box_btn, scss.btn_chat)}></button>
            </div>
            <div className={scss.item_info_send_box}></div>

            <ul onClick={handleClick} className={scss.grid_box_list}>
              <li className={clsx(scss.list_item, scss.item_1)}></li>
              <li className={clsx(scss.list_item, scss.item_2)}></li>
              <li className={clsx(scss.list_item, scss.item_3)}></li>
              <li className={clsx(scss.list_item, scss.item_4)}></li>
              <li className={clsx(scss.list_item, scss.item_5)}></li>
              <li className={clsx(scss.list_item, scss.item_6)}></li>
              <li className={clsx(scss.list_item, scss.item_7)}></li>
              <li className={clsx(scss.list_item, scss.item_8)}></li>
              <li className={clsx(scss.list_item, scss.item_9)}></li>
              <li className={clsx(scss.list_item, scss.item_10)}></li>
              <li className={clsx(scss.list_item, scss.item_11)}></li>
              <li className={clsx(scss.list_item, scss.item_12)}></li>
              <li className={clsx(scss.list_item, scss.item_13)}></li>
              <li className={clsx(scss.list_item, scss.item_14)}></li>
              <li className={clsx(scss.list_item, scss.item_15)}></li>
              <li className={clsx(scss.list_item, scss.item_16)}></li>
            </ul>
            <div className={scss.item_info_block}></div>
          </div>
        </div>
        <div className={scss.item_info_block_box}>
          <div className={clsx(scss.item_info_block_2, scss.block_1)}></div>
          <div className={clsx(scss.item_info_block_2, scss.block_2)}></div>
        </div>
        <div className={scss.block_box_2}></div>
        <div className={scss.block_box_3}></div>

        <div className={scss.block_box_4}>
          <div className={scss.block_box_4_item}></div>
          <div className={scss.block_box_4_item}></div>
          <div className={scss.block_box_4_item}></div>
          <div className={scss.block_box_4_item}></div>
          <div className={scss.block_box_4_item}></div>
          <div className={scss.block_box_4_item}></div>
        </div>
      </div>

      <div className={scss.banners_box}>
        <div className={scss.banners}></div>
        <div className={scss.banners}></div>
        <div className={scss.banners}></div>
        <div className={scss.banners}></div>
        <div className={scss.banners_info}>
          <div className={clsx(scss.info_item, scss.info_item_1)}></div>
          <div className={clsx(scss.info_item, scss.info_item_2)}></div>
          <div className={clsx(scss.info_item, scss.info_item_3)}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
