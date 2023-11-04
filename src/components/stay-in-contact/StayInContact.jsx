import React, { useState } from "react";
import "./stayInContact.css";
import Title from "../title/Title";
import phone from "./../../assets/images/phone.webp";
import location from "./../../assets/images/location.webp";
import linked from "./../../assets/images/sociallinked.webp";
import face from "./../../assets/images/socialface.webp";
import insta from "./../../assets/images/socialinsta.webp";
import azzrk from "./../../assets/images/azzrk.webp";
import tele from "./../../assets/images/telegram.webp";
import authService from "../../services/auth-services";
import Swal from "sweetalert2";

const StayInContact = () => {
  const [firstName, setFirstName] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [loadingLogin, setLoadingLogin] = useState(false);

  function handleInputChange(event) {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setIsValid(validateEmail(inputEmail));
  }

  function handleBlur() {
    setIsValid(validateEmail(email));
  }

  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  const handleSubmit = async () => {
    // e.preventDefault();
    if (firstName && nickName && email && msg) {
      try {
        setLoadingLogin(true);
        await authService.contactMsg(firstName, nickName, email, msg).then(
          (response) => {
            setLoadingLogin(false);
            setFirstName("");
            setNickName("");
            setEmail("");
            setMsg("");
            Swal.fire({
              position: "center",
              icon: "success",
              title: "تم ارسال الرسالة بنجاح",
              showConfirmButton: false,
              timer: 1500,
            });
          },
          (error) => {
          }
        );
      } catch (err) {
      }
    }
  };

  return (
    <div className="stayInContact pb-5" id="contact-us">
      <div className="container">
        <Title color="var(--primaryColor)" text="ابقي علي تواصل" />
        <div className="row">
          <div className="col-4 right ">
            <div className="image">
              <img src={azzrk} alt="" />
            </div>
            <h1>معلومات التواصل</h1>
            <div className="items">
              <div className="item">
                <div className="icon">
                  <img src={location} alt="" />
                </div>
                <span>عنوان المقر </span>
              </div>
              <div className="item">
                <div className="icon">
                  <img src={email} alt="" />
                </div>
                <span>mennashafik737@gmail.com</span>
              </div>
              <div className="item">
                <div className="icon">
                  <img src={phone} alt="" />
                </div>
                <span>01068382215</span>
              </div>
            </div>
            <div className="social">
              <div>
                <img src={face} alt="" />
              </div>
              <div>
                <img src={insta} alt="" />
              </div>
              <div>
                <img src={linked} alt="" />
              </div>
            </div>
          </div>
          <div className="col-8 left p-5">
            <div className="image">
              <img
                src={tele}
                alt=""
                onClick={() => {
                  handleSubmit();
                }}
              />
            </div>
            <div className="row input-parent">
              <div className="col">
                <input
                  type="text"
                  placeholder="الاسم الاول"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  placeholder="اللقب"
                  value={nickName}
                  onChange={(e) => setNickName(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  placeholder="البريد الالكتروني"
                  value={email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                />
                {!isValid && (
                  <span className=" spanhint">يجب أن يكون بريد إلكترونى</span>
                )}{" "}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <textarea
                  placeholder="اكتب رسالتك"
                  rows="7"
                  value={msg}
                  onChange={(e) => {
                    setMsg(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayInContact;
