import React, { Fragment, useEffect, useState } from "react";
import "./profile-info-register.css";
import { getApiUrl } from "../../helpers";
import axios from "axios";

const ProfileInfoRegister = (props) => {
  const [name, setName] = useState(props.name);
  const [country, setCountry] = useState(props.country);
  const [governorate, setGovernorate] = useState(props.governorate);
  const [nationality, setNationality] = useState(props.nationality);
  const [bio, setBio] = useState(props.bio);
  const [address, setAddress] = useState(props.address);
  const [occupation, setOccupation] = useState(props.occupation);
  const [marital_status, setMarital_status] = useState(props.marital_status);
  const [specialization, setSpecialization] = useState(props.specialization);
  const [speaks, setSpeaks] = useState(props.speaks);
  const [face_appears, setFace_appears] = useState(props.face_appears);
  const [wears_headscarf, setWears_headscarf] = useState(props.wears_headscarf);
  const [accountPublic, setAccountPublic] = useState(props.accountPublic);
  const [categories, setCategories] = useState(props.categories);
  const [photo, setPhoto] = useState(props.photo);
  const [interestsOptions, setInterestsOptions] = useState([]);

  const [nameToogelHint, setNameToogelhint] = useState(false);
  const [focusName, setFocusName] = useState(false);
  const [countryToogelHint, setCountryToogelhint] = useState(false);
  const [focusCountry, setFocusCountry] = useState(false);
  const [governorateToogelHint, setGovernorateToogelhint] = useState(false);
  const [focusGovernorate, setFocusGovernorate] = useState(false);
  const [nationalityToogelHint, setNationalityToogelhint] = useState(false);
  const [focusNationality, setFocusNationality] = useState(false);
  const [bioToogelHint, setBioToogelhint] = useState(false);
  const [focusBio, setFocusBio] = useState(false);
  const [addressToogelHint, setAddressToogelhint] = useState(false);
  const [focusAddress, setFocusAddress] = useState(false);
  const [occupationToogelHint, setOccupationToogelhint] = useState(false);
  const [focusOccupation, setFocusOccupation] = useState(false);
  const [marital_statusToogelHint, setMarital_statusToogelhint] =
    useState(false);
  const [focusMarital_status, setFocusMarital_status] = useState(false);
  const [specializationToogelHint, setSpecializationToogelhint] =
    useState(false);
  const [focusSpecialization, setFocusSpecialization] = useState(false);
  const [photoToogelHint, setPhotoToogelhint] = useState(false);
  const [categoriesToogelHint, setCategoriesToogelhint] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  function handleOptions(optionId) {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
    } else {
      setSelectedOptions([...selectedOptions, optionId]);
    }
  }

  const optionClass = (optionId) => {
    return selectedOptions.includes(optionId) ? "selected" : "notSelected";
  };

  useEffect(() => {
    axios.get(getApiUrl("api/categories/")).then((response) => {
      setInterestsOptions(response.data);
    });
  }, []);

  useEffect(() => {
    //categories
    if (categories.length >= 0) {
      setCategoriesToogelhint(false);
    }
  }, [categories, selectedOptions]);
  //focus name
  const handelNameFocus = () => {
    setFocusName(true);
    setNameToogelhint(false);
  };
  //focus country
  const handelCountryFocus = () => {
    setFocusCountry(true);
    setCountryToogelhint(false);
  };
  //focus governorate
  const handelGovernorateFocus = () => {
    setFocusGovernorate(true);
    setGovernorateToogelhint(false);
  };
  //focus nationality
  const handelNationalityFocus = () => {
    setFocusNationality(true);
    setNationalityToogelhint(false);
  };
  //focus bio
  const handelBioFocus = () => {
    setFocusBio(true);
    setBioToogelhint(false);
  };
  //focus address
  const handelAddressFocus = () => {
    setFocusAddress(true);
    setAddressToogelhint(false);
  };
  //focus occupation
  const handelOccupationFocus = () => {
    setFocusOccupation(true);
    setOccupationToogelhint(false);
  };
  //focus marital_status
  const handelMaritalStatusFocus = () => {
    setFocusMarital_status(true);
    setMarital_statusToogelhint(false);
  };
  //focus specialization
  const handelSpecializationFocus = () => {
    setFocusSpecialization(true);
    setSpecializationToogelhint(false);
  };

  const handleFileInputChange = (event) => {
    const uploadedFile = event.target.files[0];
    setPhoto(uploadedFile);
  };

  const handleNext = () => {
    //usename
    if (!name) {
      setNameToogelhint(true);
      setFocusName(false);
    }
    //country
    if (!country) {
      setCountryToogelhint(true);
      setFocusCountry(false);
    }
    //governorate
    if (!governorate) {
      setGovernorateToogelhint(true);
      setFocusGovernorate(false);
    }
    //nationality
    if (!nationality) {
      setNationalityToogelhint(true);
      setFocusNationality(false);
    }
    //bio
    if (!bio) {
      setBioToogelhint(true);
      setFocusBio(false);
    }
    //address
    if (!address) {
      setAddressToogelhint(true);
      setFocusAddress(false);
    }
    //job
    if (!occupation) {
      setOccupationToogelhint(true);
      setFocusOccupation(false);
    }
    //status
    if (!marital_status) {
      setMarital_statusToogelhint(true);
      setFocusMarital_status(false);
    }
    //specialization
    if (!specialization) {
      setSpecializationToogelhint(true);
      setFocusSpecialization(false);
    }
    //photo
    if (!photo) {
      setPhotoToogelhint(true);
    }
    //categories
    if (categories.length <= 0) {
      setCategoriesToogelhint(true);
    }
    if (
      name &&
      country &&
      governorate &&
      nationality &&
      bio &&
      address &&
      occupation &&
      marital_status &&
      specialization &&
      photo &&
      selectedOptions
    ) {
      props.setToogleBtnProfile(false);
      props.setToogleBtnContact(true);
      props.setName(name);
      props.setCountry(country);
      props.setGovernorate(governorate);
      props.setNationality(nationality);
      props.setBio(bio);
      props.setAddress(address);
      props.setOccupation(occupation);
      props.setMarital_status(marital_status);
      props.setSpecialization(specialization);
      props.setSpeaks(speaks);
      props.setFace_appears(face_appears);
      props.setWears_headscarf(wears_headscarf);
      props.setAccountPublic(accountPublic);
      props.setCategories(selectedOptions);
      props.setPhoto(photo);
      props.setTitleClass1(true);
      props.setCircleClass1(true);
      props.setBorderCircle1(false);
      props.setBorderCircle2(true);
    }
  };

  var subdomain = window.location.origin;
  const DOMAINS = {
    AZZRK: "https://influencer.azzrk.com",
    ATHAR: "https://influencer.atherr.com",
    MARDOD: "https://influencer.marrdoud.com",
    WARAQA: "https://influencer.warrqa.com",
    DARB: "https://influencer.darbplatform.com",
    SMOUE: "https://influencer.sumoue.com",
  };

  var btnDarb;
  var labelSmoue;
  switch (subdomain) {
    case DOMAINS.AZZRK:
      btnDarb = false;
      labelSmoue = false;
      break;

    case DOMAINS.MARDOD:
      btnDarb = false;
      labelSmoue = false;
      break;

    case DOMAINS.SMOUE:
      labelSmoue = true;
      break;

    case DOMAINS.DARB:
      btnDarb = true;
      labelSmoue = false;
      break;

    case DOMAINS.WARAQA:
      btnDarb = false;
      labelSmoue = false;
      break;

    case DOMAINS.ATHAR:
      btnDarb = false;
      labelSmoue = false;
      break;

    default:
      btnDarb = false;
      labelSmoue = false;
      break;
  }

  return (
    <Fragment>
      <div className="profile-info-register">
        <form>
          <div className="influencer-form">
            <div className="influencer-form-right">
              <div className="form-sec">
                <label
                  style={
                    labelSmoue
                      ? {
                          color: "white",
                        }
                      : {}
                  }
                >
                  الاسم
                </label>
                <input
                  style={
                    labelSmoue
                      ? {
                          opacity: ".6",
                        }
                      : {}
                  }
                  type="text"
                  placeholder="قم بإدخال الاسم"
                  value={name}
                  onFocus={handelNameFocus}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                {nameToogelHint && <span className=" spanhint">مطلوب</span>}
                {focusName && !name && <span className=" spanhint">مطلوب</span>}
              </div>
              <div className="form-sec">
                <label
                  style={
                    labelSmoue
                      ? {
                          color: "white",
                        }
                      : {}
                  }
                >
                  المحافظة
                </label>
                <input
                  style={
                    labelSmoue
                      ? {
                          opacity: ".6",
                        }
                      : {}
                  }
                  type="text"
                  placeholder="قم بإدخال المحافظة "
                  value={governorate}
                  onFocus={handelGovernorateFocus}
                  onChange={(e) => {
                    setGovernorate(e.target.value);
                  }}
                />
                {governorateToogelHint && (
                  <span className=" spanhint">مطلوب</span>
                )}
                {focusGovernorate && !governorate && (
                  <span className=" spanhint">مطلوب</span>
                )}
              </div>
              <div className="form-sec">
                <label
                  style={
                    labelSmoue
                      ? {
                          color: "white",
                        }
                      : {}
                  }
                >
                  نبذة عنك
                </label>
                <textarea
                  style={
                    labelSmoue
                      ? {
                          opacity: ".6",
                        }
                      : {}
                  }
                  placeholder="نبذة مختصرة عنك"
                  value={bio}
                  onFocus={handelBioFocus}
                  onChange={(e) => {
                    setBio(e.target.value);
                  }}
                />
                {bioToogelHint && <span className=" spanhint">مطلوب</span>}
                {focusBio && !bio && <span className=" spanhint">مطلوب</span>}
              </div>
              <div className="form-sec">
                <label
                  style={
                    labelSmoue
                      ? {
                          color: "white",
                        }
                      : {}
                  }
                >
                  الحالة الإجتماعية
                </label>
                <select
                  style={
                    labelSmoue
                      ? {
                          opacity: ".6",
                        }
                      : {}
                  }
                  defaultValue={marital_status}
                  onChange={(e) => {
                    setMarital_status(e.target.value);
                  }}
                >
                  <option>أعزب</option>
                  <option> متزوج </option>
                  <option> مطلق </option>
                  <option> أرمل </option>
                </select>
                {marital_statusToogelHint && (
                  <span className=" spanhint">مطلوب</span>
                )}
                {focusMarital_status && !marital_status && (
                  <span className=" spanhint">مطلوب</span>
                )}
              </div>
              <div className="form-sec">
                <label
                  style={
                    labelSmoue
                      ? {
                          color: "white",
                        }
                      : {}
                  }
                >
                  متحدث
                </label>
                <select
                  style={
                    labelSmoue
                      ? {
                          opacity: ".6",
                        }
                      : {}
                  }
                  defaultValue={speaks}
                  onChange={(e) => {
                    if (e.target.value === "نعم") {
                      setSpeaks(true);
                    } else {
                      setSpeaks(false);
                    }
                  }}
                >
                  <option>نعم</option>
                  <option> لا </option>
                </select>
              </div>
              <div className="form-sec">
                <label
                  style={
                    labelSmoue
                      ? {
                          color: "white",
                        }
                      : {}
                  }
                >
                  ترتدى حجاب
                </label>
                <select
                  style={
                    labelSmoue
                      ? {
                          opacity: ".6",
                        }
                      : {}
                  }
                  defaultValue={wears_headscarf}
                  onChange={(e) => {
                    if (e.target.value === "نعم") {
                      setWears_headscarf(true);
                    } else {
                      setWears_headscarf(false);
                    }
                  }}
                >
                  <option>نعم</option>
                  <option> لا </option>
                </select>
              </div>
              <div className="form-sec">
                <label
                  style={
                    labelSmoue
                      ? {
                          color: "white",
                        }
                      : {}
                  }
                >
                  رفع صورة شخصية
                </label>
                <input
                  style={
                    labelSmoue
                      ? {
                          opacity: ".6",
                          backgroundColor: "#C6C6C6",
                        }
                      : {}
                  }
                  type="file"
                  accept="image/*"
                  onChange={handleFileInputChange}
                />
                {photoToogelHint && <span className=" spanhint">مطلوب</span>}
              </div>
            </div>
            <div className="influencer-form-left">
              <div className="form-sec">
                <label
                  style={
                    labelSmoue
                      ? {
                          color: "white",
                        }
                      : {}
                  }
                >
                  الدولة
                </label>
                <input
                  style={
                    labelSmoue
                      ? {
                          opacity: ".6",
                        }
                      : {}
                  }
                  type="text"
                  placeholder="قم بإدخال الدولة "
                  value={country}
                  onFocus={handelCountryFocus}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                />
                {countryToogelHint && <span className=" spanhint">مطلوب</span>}
                {focusCountry && !country && (
                  <span className=" spanhint">مطلوب</span>
                )}
              </div>

              <div className="form-sec">
                <label
                  style={
                    labelSmoue
                      ? {
                          color: "white",
                        }
                      : {}
                  }
                >
                  الجنسية
                </label>
                <input
                  style={
                    labelSmoue
                      ? {
                          opacity: ".6",
                        }
                      : {}
                  }
                  type="text"
                  placeholder="قم بإدخال الجنسية  "
                  value={nationality}
                  onFocus={handelNationalityFocus}
                  onChange={(e) => {
                    setNationality(e.target.value);
                  }}
                />
                {nationalityToogelHint && (
                  <span className=" spanhint">مطلوب</span>
                )}
                {focusNationality && !nationality && (
                  <span className=" spanhint">مطلوب</span>
                )}
              </div>

              <div className=" form-sec">
                <label
                  style={
                    labelSmoue
                      ? {
                          color: "white",
                        }
                      : {}
                  }
                >
                  العنوان
                </label>
                <input
                  style={
                    labelSmoue
                      ? {
                          opacity: ".6",
                        }
                      : {}
                  }
                  type="text"
                  placeholder="قم بإدخال العنوان "
                  value={address}
                  onFocus={handelAddressFocus}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
                {addressToogelHint && <span className=" spanhint">مطلوب</span>}
                {focusAddress && !address && (
                  <span className=" spanhint">مطلوب</span>
                )}
              </div>
              <div className="form-sec">
                <label
                  style={
                    labelSmoue
                      ? {
                          color: "white",
                        }
                      : {}
                  }
                >
                  المهنة
                </label>
                <input
                  style={
                    labelSmoue
                      ? {
                          opacity: ".6",
                        }
                      : {}
                  }
                  type="text"
                  placeholder="قم بإدخال المهنة  "
                  value={occupation}
                  onFocus={handelOccupationFocus}
                  onChange={(e) => {
                    setOccupation(e.target.value);
                  }}
                />
                {occupationToogelHint && (
                  <span className=" spanhint">مطلوب</span>
                )}
                {focusOccupation && !occupation && (
                  <span className=" spanhint">مطلوب</span>
                )}
              </div>

              <div className="form-sec">
                <label
                  style={
                    labelSmoue
                      ? {
                          color: "white",
                        }
                      : {}
                  }
                >
                  التخصص
                </label>
                <input
                  style={
                    labelSmoue
                      ? {
                          opacity: ".6",
                        }
                      : {}
                  }
                  type="text"
                  placeholder="قم بإدخال التخصص  "
                  value={specialization}
                  onFocus={handelSpecializationFocus}
                  onChange={(e) => {
                    setSpecialization(e.target.value);
                  }}
                />
                {specializationToogelHint && (
                  <span className=" spanhint">مطلوب</span>
                )}
                {focusSpecialization && !specialization && (
                  <span className=" spanhint">مطلوب</span>
                )}
              </div>

              <div className="form-sec">
                <label
                  style={
                    labelSmoue
                      ? {
                          color: "white",
                        }
                      : {}
                  }
                >
                  ظهور الوجه
                </label>
                <select
                  style={
                    labelSmoue
                      ? {
                          opacity: ".6",
                        }
                      : {}
                  }
                  defaultValue={face_appears}
                  onChange={(e) => {
                    if (e.target.value === "نعم") {
                      setFace_appears(true);
                    } else {
                      setFace_appears(false);
                    }
                  }}
                >
                  <option>نعم</option>
                  <option> لا </option>
                </select>
              </div>

              <div className="form-sec">
                <label
                  style={
                    labelSmoue
                      ? {
                          color: "white",
                        }
                      : {}
                  }
                >
                  حساب عام
                </label>
                <select
                  style={
                    labelSmoue
                      ? {
                          opacity: ".6",
                        }
                      : {}
                  }
                  defaultValue={accountPublic}
                  onChange={(e) => {
                    if (e.target.value === "نعم") {
                      setAccountPublic(true);
                    } else {
                      setAccountPublic(false);
                    }
                  }}
                >
                  <option>نعم</option>
                  <option> لا </option>
                </select>
              </div>

              <div className="form-sec">
                <label
                  style={
                    labelSmoue
                      ? {
                          color: "white",
                        }
                      : {}
                  }
                >
                  الاهتمامات
                </label>
                <select
                  multiple={true}
                  style={
                    labelSmoue
                      ? {
                          opacity: ".6",
                        }
                      : {}
                  }
                >
                  {interestsOptions.map((option) => (
                    <option
                      key={option.id}
                      value={option.id}
                      className={optionClass(option.id)}
                      onClick={() => handleOptions(option.id)}
                    >
                      {option.name}
                    </option>
                  ))}
                </select>
                {categoriesToogelHint && (
                  <span className=" spanhint">مطلوب</span>
                )}
              </div>
            </div>
          </div>
          <div
            type="submit"
            className="btn-next"
            onClick={handleNext}
            style={
              btnDarb
                ? {
                    background: `linear-gradient(to left, rgb(33, 202, 222), transparent 90%), linear-gradient(to right, rgb(17, 212, 209), transparent 90%)`,
                    color: "black",
                    border: "none",
                  }
                : labelSmoue
                ? {
                    background: `linear-gradient(to right,#DB3737, transparent 65%), linear-gradient(to left, #002762, transparent 215%)`,
                    color: "white",
                    border: "none",
                  }
                : {}
            }
          >
            التالى
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ProfileInfoRegister;
