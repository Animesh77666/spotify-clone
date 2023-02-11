import { fetchRequest } from "../api";
import { ENDPOINT } from "../common";

const onProfileClick = (event)=>{

}


const loadUserProfile = async () => {
  const defaultImage = document.querySelector("#default-image");
  const profileButton = document.querySelector("#user-profile-button");
  const displayNameElement = document.querySelector("#display-name");

  const { display_name: displayName, images } = await fetchRequest(
    ENDPOINT.userInfo
  );

  if (images?.length) {
    defaultImage.classList.add("hidden");
  } else {
    defaultImage.classList.remove("hidden");
  }
  profileButton.addEventListener("click", onProfileClick)
};



document.addEventListener("DOMContentLoaded", () => {
  loadUserProfile();
});
