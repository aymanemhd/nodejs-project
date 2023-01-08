import React from "react";
import "../Styles/aboutus.css";

const Aboutus = () => {
  return (
    <div className="About_container">
      <h5 className="about_header">Aboutus</h5>
      <div className="about_child">
        <div className="img_container">
          <img
            src="images/res2.jpg"
            className="image_res1"
            alt="image-people"
          />
        </div>
        <div className="img_detail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe
          porro distinctio accusamus quia omnis ex iure, ad odit eligendi volup
          Cupiditate, repudiandae architecto aspernatur molestiae doloremque ea
          nulla voluptatibus amet incidunt atque corrupti voluptate in aut dicta
          libero! Eveniet labore fugit cupiditate.
        </div>
      </div>
      <div className="about_child">
        <div className="img_detail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe
          porro distinctio accusamus quia omnis ex iure, ad odit eligendi
          voluptatibus nesciunt neque perferendis voluptate velit minima unde?
          Quibusdam, minus?Lorem, ipsum dolor sit amet consectetur adipisicing
          elit.
        </div>
        <div className="img_container">
          <img src="images/res1.jpg" className="image_res1" alt="image desk" />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
