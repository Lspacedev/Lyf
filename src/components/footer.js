import { IoMdArrowForward } from "react-icons/io";
function Footer() {
  return (
    <div className="Footer">
      <div className="terms-customer">
        <div>Terms Policy</div>
        <div className="circle"></div>
        <div>Customer Story</div>
      </div>
      <div className="footer-arrow">
        <IoMdArrowForward style={{ fontSize: "1.6rem" }} />
      </div>
    </div>
  );
}

export default Footer;
