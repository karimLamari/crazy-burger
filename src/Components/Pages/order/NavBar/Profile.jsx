import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { theme } from "../../../../theme/index.js";
import styled from "styled-components";

function Profile({username} ) {
  return (
        <ProfileStyled>
          <div className="profile-info">
            <p>Hey, <span className="username">{username}</span></p>
            <Link to="/">
              <button >Se déconnecter</button>
            </Link>
          </div>
          <BsPersonCircle size={40} color={theme.colors.greyDark} />
        </ProfileStyled>  )
}

export default Profile;

const ProfileStyled = styled.div`
display:flex;
      justify-content:center;
      align-items:center;
      padding:  ${theme.spacing.sm};
      gap:${theme.spacing.sm};
        .profile-info{
          display:flex;
          flex-direction:column;
          justify-content:center;
          gap:2px;
          };
          p{
            display:flex;
            gap:5px;
            margin:0;
            font-size:${theme.fonts.P1};
            color:${theme.colors.greyDark};
            justify-content:center;
            align-items:center;
            }
          button{
            border:none;
            background:transparent;
            }
          .username{
            display:flex;
            flex-direction:row;
            font-weight:${theme.weights.bold};
            color:${theme.colors.primary};
            }

`;