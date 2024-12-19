import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import "../footer/footer.css";
import img_m from "../footer/footer.png";

function Footer() {
  return (
    <div className="relative">
      <footer
        className="footer"
        style={{
          background: "#2D2B45",
          color: "white",
          padding: "40px 20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div className=" container mx-auto">
          {/* Top Section */}
          <div
            className="footer-container"
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: "20px",
              alignItems: "start",
            }}
          >
            {/* Logo and Address */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <div
                  className="logo-circle"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="bg-[#2D2B45] rounded-full">
                    <img src={img_m} alt="" />
                  </div>
                </div>
                <div>
                  <h4 style={{ margin: 0, fontWeight: "bold" }}>TEPLODOM</h4>
                  <p style={{ margin: 0, fontSize: "14px" }}>
                    Интернет магазин строй материалов
                  </p>
                </div>
              </div>
              <div
                className="address"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                }}
              >
                <CiLocationOn size={24} />
                <div>
                  <p style={{ margin: 0 }}>ул. Уста Ширин, рынок</p>
                  <p style={{ margin: 0 }}>Джамий, дом 134</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>
                Быстрые ссылки
              </h4>
              <ul style={{ listStyle: "none", padding: 0, fontSize: "14px" }}>
                <li>Мастерам</li>
                <li>Оформление заказа</li>
                <li>Пользовательское соглашение</li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>
                Полезное
              </h4>
              <ul style={{ listStyle: "none", padding: 0, fontSize: "14px" }}>
                <li>О нас</li>
                <li>Поставщикам</li>
                <li>Возврат товара</li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>
                Контакты
              </h4>
              <div
                className="contacts"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  fontSize: "14px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <BsTelephone /> +998 97 761 62 51
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <BsTelephone /> +998 93 556 91 31
                </div>
                <div
                  className="social-icons"
                  style={{
                    display: "flex",
                    gap: "15px",
                    marginTop: "10px",
                    fontSize: "20px",
                  }}
                >
                  <FaTelegram />
                  <FaInstagram />
                  <FaFacebook />
                  <IoIosGlobe />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div
            className="footer-bottom"
            style={{
              textAlign: "center",
              borderTop: "1px solid rgba(255, 255, 255, 0.2)",
              marginTop: "20px",
              paddingTop: "10px",
              fontSize: "14px",
            }}
          >
            <p style={{ margin: 0 }}>© 2021 Teplodom. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
