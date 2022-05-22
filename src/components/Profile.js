import React from "react";
import profileImage from "../assets/images/profile-image.png";
import map from "../assets/images/map.jpg";

const Profile = () => {
  return (
    <div className="profile__container">
      <div className="profile__details">
        <div className="profile">
          <img src={profileImage} alt="profile" />
        </div>
      </div>
      <div className="profile__content">
        <table>
          <tr>
            <th>Name</th>
            <td>Nomen Nescio</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>Nomen@example.com</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>+852 555 555</td>
          </tr>
        </table>
      </div>

      <form>
        <h2>Send me a message</h2>
        <div>
          <label>Subject</label>
          <br />
          <input type="text" />
        </div>

        <div>
          <label>Message</label>
          <br />
          <textarea></textarea>
        </div>

        <button>Send</button>
      </form>
      <div className="map">
        <h2>Or meet me at the office</h2>
        <img src={map} alt="location" />
        <p>ONE MIDTOWN</p>
        <p>11 Hoi Shing Rd</p>
        <p>Tsuen Wan</p>
      </div>
    </div>
  );
};

export default Profile;
