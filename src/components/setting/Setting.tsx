/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState, useEffect } from "react";
import styles from "../../../styles/setting.module.scss";
import Image from "next/image";
import { avart, org, pull, yolo } from "../../images";
import { BiSmile } from "react-icons/bi";
import { BsBuilding, BsLink45Deg } from "react-icons/bs";
import { CiLocationOff, CiLocationOn } from "react-icons/ci";
import { BiTime } from "react-icons/bi";
import Input from "../input/Input";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { profileApi } from "../../restApi/restApi";

const Setting = () => {
  const [toggleForm, setToggleForm] = useState<boolean>(false);
  const [filesPreview, setFilesPreview] = useState<string>("");
  const selectImg = useRef(null);
  useEffect(() => {
    return () => {
      if (filesPreview) {
        URL.revokeObjectURL(filesPreview);
      }
    };
  }, [filesPreview]);
  const handleChange = (e: any) => {
    const uploadfile = e.target.files[0];
    console.log(uploadfile);
    setFilesPreview(URL.createObjectURL(uploadfile));
    console.log("hhhhh", filesPreview);
  };
  const Onclick = () => {
    if (selectImg.current) selectImg.current.click();
  };
  const handleToggle = () => {
    setToggleForm(!toggleForm);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      bio: "",
      location: "",
      pronouns: "",
      company: "",
      select: "",
      website: "",
      social1: "",
      social2: "",
      social3: "",
      social4: "",
    },

    validationSchema: Yup.object({
      website: Yup.string()
        .required("Website is required")
        .url("Invalid website URL"),
      location: Yup.string().required("Please Enter your location"),

      name: Yup.string().required("Please Enter your name"),
    }),
    onSubmit: (values) => {
      profileApi();
      console.log("kkkknnbvbv", profileApi());

      formik.resetForm();
    },
  });
  console.log("jjjj", formik.values);

  return (
    <div className={styles.setting}>
      <div className={styles.setting__imgDivContainer}>
        <div className={styles.setting__imgDiv}>
          <Image
            src={filesPreview ? filesPreview : avart}
            alt="Vercel Logo"
            height={300}
            width={300}
            style={{ borderRadius: "50%" }}
            className={styles.img}
          />
          <div className={styles.setting__inputDivContainer}>
            <div className={styles.setting__ContainerflexEnd}>
              <input
                type="file"
                name="files"
                accept="image/*"
                multiple={false}
                ref={selectImg}
                onChange={handleChange}
              />
              <div className={styles.setting__statusDiv} onClick={Onclick}>
                <p>
                  <span>
                    <i>
                      <BiSmile />
                    </i>
                  </span>
                  <span className={styles.setting__set}>Set status</span>
                </p>
              </div>
            </div>
          </div>
          {toggleForm ? (
            <form action="" onSubmit={formik.handleSubmit}>
              <Input
                header="Name"
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <p style={{ color: "red" }}>{formik.errors.name}</p>
              ) : null}
              <div>
                <p style={{ marginBottom: "10px" }}>Bio</p>
                <textarea
                  name="bio"
                  placeholder="Add a bio"
                  onChange={formik.handleChange}
                  value={formik.values.bio}
                  onBlur={formik.handleBlur}
                ></textarea>
                <p style={{ marginBottom: "10px" }}>
                  You can @mention other users and organizations to
                  <br></br>
                  link to them.
                </p>
              </div>
              <div>
                <p style={{ marginBottom: "10px", fontWeight: "600" }}>
                  Pronouns
                </p>

                <select
                  name="select"
                  onChange={formik.handleChange}
                  value={formik.values.pronouns}
                  onBlur={formik.handleBlur}
                >
                  <option value="Don't specify">Don't specify</option>
                  <option value="they/them">they/them</option>
                  <option value="she/her">she/her</option>
                  <option value="he/him">he/him</option>
                  <option value="custom">custom</option>
                </select>
              </div>
              <div className={styles.setting__iconTextDiv}>
                <span>
                  <i>
                    <BsBuilding />
                  </i>
                </span>
                <Input
                  placeholder="Company"
                  type="text"
                  name="company"
                  onChange={formik.handleChange}
                  value={formik.values.company}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className={styles.setting__iconTextDiv}>
                <span>
                  <i>
                    <CiLocationOn />
                  </i>
                </span>
                <Input
                  placeholder="Location"
                  type="text"
                  name="location"
                  onChange={formik.handleChange}
                  value={formik.values.location}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.location && formik.errors.location ? (
                <p style={{ color: "red" }}>{formik.errors.location}</p>
              ) : null}
              <div className={styles.setting__iconTextDiv}>
                <span>
                  <i>
                    <BiTime />
                  </i>
                </span>
                <input value="Display current local time" type="checkbox" />

                <label htmlFor="" style={{ marginLeft: "10px" }}>
                  Display current local time
                </label>
              </div>
              <div className={styles.setting__iconTextDiv}>
                <span>
                  <i>
                    <BsLink45Deg />
                  </i>
                </span>
                <Input
                  placeholder="Website"
                  type="text"
                  name="website"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.website}
                />
              </div>
              {formik.touched.website && formik.errors.website ? (
                <p style={{ color: "red" }}>{formik.errors.website}</p>
              ) : null}
              <p style={{ marginBottom: "10px", fontWeight: "600" }}>
                Social accounts
              </p>
              <div className={styles.setting__iconTextDiv}>
                <span>
                  <i>
                    <BsLink45Deg />
                  </i>
                </span>
                <Input
                  placeholder="Link to social profile"
                  type="text"
                  name="social1"
                  onChange={formik.handleChange}
                  value={formik.values.social1}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className={styles.setting__iconTextDiv}>
                <span>
                  <i>
                    <BsLink45Deg />
                  </i>
                </span>
                <Input
                  placeholder="Link to social profile"
                  type="text"
                  name="social2"
                  onChange={formik.handleChange}
                  value={formik.values.social2}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className={styles.setting__iconTextDiv}>
                <span>
                  <i>
                    <BsLink45Deg />
                  </i>
                </span>
                <Input
                  placeholder="Link to social profile"
                  type="text"
                  name="social3"
                  onChange={formik.handleChange}
                  value={formik.values.social3}
                  onBlur={formik.handleBlur}
                />
              </div>{" "}
              <div className={styles.setting__iconTextDiv}>
                <span>
                  <i>
                    <BsLink45Deg />
                  </i>
                </span>
                <Input
                  placeholder="Link to social profile"
                  type="text"
                  name="social4"
                  onChange={formik.handleChange}
                  value={formik.values.social4}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className={styles.setting__iconTextDiv}>
                <button
                  style={{ backgroundColor: "#1A7F37", color: "white" }}
                  type="submit"
                >
                  Send
                </button>
                <button onClick={handleToggle}>Cancel</button>
              </div>
            </form>
          ) : (
            <div>
              <h3 style={{ color: "black", fontWeight: "300" }}>Chinwend14</h3>

              <div
                onClick={handleToggle}
                style={{
                  backgroundColor: "#F3F4F6",
                  padding: "5px ",
                  textAlign: "center",
                  borderRadius: "5px",
                  marginTop: "10px",
                }}
              >
                Edit Profile
              </div>
            </div>
          )}
        </div>
        <div className={styles.setting__achievementsDiv}>
          <h3>Achivements</h3>
          <div>
            <Image
              src={pull}
              alt="Vercel Logo"
              height={350}
              width={350}
              style={{ borderRadius: "50%" }}
              className={styles.imge}
            />
            <Image
              src={yolo}
              alt="Vercel Logo"
              height={350}
              width={350}
              style={{ borderRadius: "50%" }}
              className={styles.imge}
            />
            <div style={{ marginTop: "20px" }}>
              <span className={styles.setting__beta}>Beta</span>
              <span style={{ color: "#3869da" }}>Send feedback</span>
            </div>
          </div>
        </div>
        <div className={styles.setting__achievementsDiv}>
          <h3 style={{ marginBottom: "10px" }}>Organisations</h3>
          <Image
            src={org}
            alt="Vercel Logo"
            height={350}
            width={350}
            style={{ borderRadius: "50%" }}
            className={styles.imge}
          />
        </div>
      </div>
    </div>
  );
};

export default Setting;
