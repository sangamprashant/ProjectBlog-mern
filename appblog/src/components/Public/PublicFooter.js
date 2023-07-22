import React from "react";
import { Link } from "react-router-dom";

function PublicFooter() {
  const socialMediaLinks = [
    { icon: "fa fa-facebook", link: "https://www.facebook.com" },
    { icon: "fa fa-github", link: "https://github.com" },
    { icon: "fa fa-instagram", link: "https://www.instagram.com" },
    { icon: "fa fa-twitter", link: "https://twitter.com" },
    { icon: "fa fa-pinterest-p", link: "https://www.pinterest.com" },
    { icon: "fa fa-tumblr", link: "https://www.tumblr.com" },
    { icon: "fa fa-codepen", link: "https://codepen.io/xichen/" },
  ];

  return (
    <div>
      <div className="my-3">
        <hr />

        <footer className="text-black text-center text-lg-start">
          <div className="container p-4">
            <div
              className="row"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">Footer Content</h5>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                  atque ea quis molestias. Fugiat pariatur maxime quis culpa
                  corporis vitae repudiandae aliquam voluptatem veniam, est
                  atque cumque eum delectus sint!
                </p>
              </div>
            </div>
          </div>

          <div className="follow">
            <div className="box">
              {socialMediaLinks.map((item, index) => (
                <a key={index} href={item.link}>
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <Link className="text-black" to="/admin/signin">
              Prashant Srivastav
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default PublicFooter;