import FooterStyle from "../Layouts/LayoutsStyle/Footer.module.css";
import { FaFacebook, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div className={FooterStyle.container}>
      <ul className={FooterStyle.owner}>
        <li>By Nadir Satori</li>
      </ul>
      <ul className={FooterStyle.Legal}>
        <li>
          &copy; 2024 — <span>Ur Note</span> by All Web Service
        </li>
        <li>All rights reserved</li>
        <li>Legal</li>
        <li>Notice</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Contact</li>
      </ul>
      <ul className={FooterStyle.icons}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <AiFillInstagram />
        </li>
        <li>
          <FaTwitterSquare />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
    </div>
  );
}
