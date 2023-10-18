import React, { useState } from "react";
import ImgCover from "../../assets/img/back.png";
import ImageCartLogo from "../../assets/img/Dribbble-Light-Preview.png";

const MainImage = () => {
  const [checkUser, setCheckUser] = useState(false);
  return (
    <>
      <section class="main-visual">
        <div class="main-catch">
        </div>
        <img src={ImgCover} alt="" />
        {checkUser && (
          <p class="img">
            <Link to="/cart">
              <img src={ImageCartLogo} alt="" />
            </Link>
          </p>
        )}
      </section>
    </>
  );
};

export default MainImage;
