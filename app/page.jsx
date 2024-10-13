import scss from "./page.module.scss";
import clsx from "clsx";

const Home = () => {
  return (
    <div className={scss.grid_box}>
      <div className={scss.profile}>
        <div className={scss.profile_item}></div>
        <div className={scss.profile_item_info}>
          <div className={scss.item_info_box}>
            <div className={scss.item_info_avatar}></div>
            <p className={scss.item_info_text}>맛집탐방매냐 (알밤정회원)</p>
            <div className={scss.item_info_btn_box}>
              <button className={scss.box_shop}></button>
              <button className={scss.box_chat}></button>
            </div>
          </div>
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
