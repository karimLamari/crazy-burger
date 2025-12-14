import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { theme } from "../../../../theme/index.js";
import styled from "styled-components";

function Profile({ username }) {
  return (
    <ProfileStyled>
      <div className="profile-info">
        <p>
          Hey, <span className="username">{username}</span>
        </p>
        <Link to="/">
          <button className="logout-button">Se déconnecter</button>
        </Link>
      </div>
      <BsPersonCircle className="profile-icon" />
    </ProfileStyled>
  );
}

export default Profile;

const ProfileStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left:50px;
  gap: 10px;
  .profile-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  p {
    display: flex;
    gap: 5px;
    margin: 0;
    font-size:16px;
    font-weight: ${theme.weights.regular};
    color: ${theme.colors.greyBlue};
    justify-content: center;
    align-items: center;
  }
  button {
    border: none;
    background: transparent;
  }
  .username {
    display: flex;
    flex-direction: row;
    font-weight: ${theme.weights.bold};
    color: ${theme.colors.primary};
  }
  .logout-button{
        color: ${theme.colors.greyBlue};
        font-size: 10px;
        cursor: pointer;
  }
  .profile-icon{
    font-size: 36px;
    color: ${theme.colors.greyBlue};
  }
`;
