import React from "react";
import axios from "axios";
export const token =
  "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";
export const restApi = async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",

        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.get(
      `https://api.github.com/users/chinwendu14/repos`,
      config
    );
    const res = response.data;
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const profileApi = async () => {
  try {
    const config = {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: "Bearer " + token,
      },
    };
    const payload = {
      name: "chinwendu14",
      email: "chinwendususanna93@gmail.com",
      bio: "frontend developer",
      location: "Nigeria",
    };
    axios
      .patch("https://api.github.com/user", payload, config)
      .then((response) => {
        console.log("Profile updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating profile:", error.response.data);
      });
  } catch (error) {
    console.log(error);
  }
};
