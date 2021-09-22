import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <h3 type="text">Email: Naeem.shah1500@gmail.com</h3>
          <h3 type="text">Github : <a href="https://github.com/NaeemShah1">NaeemShah1</a> </h3>
          <h3 type="text">Linkdin:- <a href="https://www.linkedin.com/in/naeem-shah-b724181aa">https://www.linkedin.com/in/naeem-shah-b724181aa</a>  </h3> 
        </form>
      </div>
    </div>
  );
}
