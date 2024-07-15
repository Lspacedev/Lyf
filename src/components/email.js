import { IoIosSend } from "react-icons/io";

function Email() {
  return (
    <div className="Email">
      <div className="input-email">
        <IoIosSend
          className="send-icon"
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            fontSize: "1.6rem",
            marginRight: "0px",
          }}
        />

        <input type="email" placeholder="Your Email"></input>
      </div>
      <input type="submit" value="Sign Up"></input>
    </div>
  );
}

export default Email;
