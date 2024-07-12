import { IoIosSend } from "react-icons/io";

function Email() {
  return (
    <div className="Email">
      {/*<div className="input-email">
        <IoIosSend
          style={{
            position: "absolute",
            top: "15px",
            left: "340px",
          }}
        />
      </div>*/}
      <input type="email" placeholder="Your Email"></input>
      <input type="submit" value="Sign Up"></input>
    </div>
  );
}

export default Email;
