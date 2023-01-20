import styled from "styled-components";
import image1 from "../assets/612395ce-d164-467a-839f-659c78991947.jpg";

export const HeaderStyle = styled.section`
  color: #004089;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 5rem;
  position: fixed;
  background: rgba(2, 0, 36,0.9);
  background: linear-gradient(
    21deg,
    rgba(2, 0, 36, 0.95) 0%,
    rgba(0, 64, 137, 0.95) 58%,
    rgba(0, 11, 85, 0.95) 98%
  );
  width: 100%;
  z-index: 2;
  top: 0%;

  a {
    text-decoration: none;
    color: #dfd9d9;
  }

  .title {
    font-size: 25px;
    font-weight: bold;
    margin-left: 1rem;
    margin-top: 20px;
    border-bottom: 4px solid #dfd9d9;
    border-right: 4px solid #dfd9d9;
    border-radius: 0px 230px 230px 0px;
    width: fit-content;
    height: fit-content;
  }

  .navBar {
    display: none;
    gap: 5px;
    margin-top: 2rem;
  }
  button {
    background: none;
    color: #dfd9d9;
    border: none !important;
    cursor: pointer;
    font-size: 20px;
    font-weight: lighter;
  }

  .on {
    text-decoration: underline;
    display: flex;
    justify-content: center;
    color: white;
    font-weight: bold;
  }

  .off {
  }
  @media (min-width: 1365px) {
    height: 6rem;
    .navBar {
      display: flex;
      gap: 5px;
      gap: 20px;
      margin-top: 2rem;
    }
    .title {
      font-size: 40px;
      border-bottom: 6px solid #dfd9d9;
      border-right: 6px solid #dfd9d9;
    }
  }
`;

export const BannerStyle = styled.section`
  display: flex;
  flex-direction: row;
  z-index: 1;

  .div1 {
    height: 200px;
    /* height: 350px; */
    width: 100%;
    background: url(${image1}) no-repeat 40% 45%;
    background-size: cover;
    filter: contrast(50%);
  }
  @media (min-width: 1365px) {
    .div1 {
      height: 350px;
    }
  }
`;

export const DescriptionStyle = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 5%;
  height: 500px;

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    align-self: center;
    justify-content: center;
    text-align: center;
    font-weight: 400;
    font-size: 20px;
  }
  .title {
    /* font-size: 50px; */
    font-size: 30px;
    color: #004089;
  }
  .title2 {
    /* font-size: 40px; */
    font-size: 25px;
    color: #004089;
    font-weight: lighter;
    margin-bottom: 20px;
  }
  .services {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #dfd9d9;
    /* margin-top: 80px; */
    margin-top: 40px;
    display: flex;
    color: #004089;
    font-weight: lighter;
    font-size: 35px;
    justify-content: center;
  }

  .servicesIcons {
    /* display: flex; */
    display: grid;
    grid-template-columns: 40% 40%;
    width: 100%;
    justify-content: space-around;
    margin-top: 50px;
  }
  a {
    text-decoration: none;
    color: #004089;
    display: flex;
    justify-content: center; //de aca para abajo
    flex-direction: column;
    align-items: center; // hasta aca no
  }
  .icons {
    display: flex;
    border-radius: 80%;
    align-items: center;
    /* width: 150px;
    height: 150px; */
    width: 120px;
    height: 120px;
    justify-content: center;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      21deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 64, 137, 1) 58%,
      rgba(0, 11, 85, 1) 98%
    );
    -webkit-box-shadow: 5px 3px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 5px 3px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 5px 3px 5px 0px rgba(0, 0, 0, 0.75);
  }
  .icon {
    width: 75px;
    height: 75px;
    filter: contrast(80%);
  }
  .titleService {
    display: flex;
    justify-content: center;
    align-items: center;
    /* font-size: 30px; */
    font-size: 25px;
    margin-bottom: 30px;
    margin-top: 5px;
    font-weight: 375;
  }

  .slogan {
    display: flex;
    align-self: center;
    /* font-size: 40px; */
    font-size: 20px;
    font-style: italic;
    font-weight: 600;
    color: #004089;
    margin-top: 30px;
  }

  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media (min-width: 1365px) {
    .title {
      font-size: 50px;
    }
    .title2 {
      font-size: 40px;
    }
    .services {
      margin-top: 80px;
    }

    .servicesIcons {
      display: flex;
    }
    a {
      text-decoration: none;
      color: #004089;
      display: flex;
    }
    .icons {
      width: 150px;
      height: 150px;
    }

    .titleService {
      font-size: 30px;
    }

    .slogan {
      font-size: 40px;
    }
  }
`;

export const ServiceStyle = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 50px;
  justify-content: center;
  margin-bottom: 200px;

  .service {
    width: 280px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    padding-top: 2%;
    border: 5px solid #004089;
    border-radius: 50%;
    font-size: 30px;
    color: #004089;
    font-weight: 700;
  }

  .serviceOn {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    padding-top: 2%;
    border: 5px solid #004089;
    border-radius: 10%;
    font-size: 30px;
    color: white;
    font-weight: 700;
    background-color: #004089;
  }

  .service:hover {
    background-color: #004089;
    font-size: 30px;
    color: white;
    cursor: pointer;
  }

  img {
    width: 40%;
    color: red;
  }
`;

export const ServiceComponentStyle = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: -200px;
  margin-bottom: 100px;
  .title {
    font-size: 40px;
    color: #004089;
    font-weight: 700;
  }
  .images {
    display: grid;
    grid-template-columns: 40% 40%;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 50px;
  }

  .image {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 30px;
    color: #004089;
    font-weight: 600;
  }

  img {
    width: 100%;
    height: 350px;
    border-radius: 30px;
  }

  .subTitle {
    font-size: 30px;
    color: #004089;
    font-weight: bold;
  }

  .caption {
    font-size: 20px;
    color: black;
    font-weight: 600;
  }
`;

export const AboutStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  margin-bottom: 100px;

  .banner-about {
    width: 100%;
    height: 200px;
    background: #dfd9d9;
  }

  .title-about {
    margin-top: 90px;
    font-size: 40px;
    font-weight: bold;
    color: #004089;
  }

  .description-about {
    font-size: 20px;
    width: 75%;
    text-align: start;
    margin-top: 30px;
  }
  .separator {
    height: 8px;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      21deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 64, 137, 1) 58%,
      rgba(0, 11, 85, 1) 98%
    );
    border-radius: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .avatar-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #004089;
    font-size: 20px;
    font-weight: bold;
  }
  .avatar-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #dfd9d9;
    width: 80%;
    margin-top: 20px;
    border-radius: 5%;
  }
  .avatar-about {
    width: 30%;
    border-radius: 50%;
    margin-top: 20px;
  }
  .avatar-name {
    margin-top: 10px;
    font-size: 20px;
    color: #004089;
    font-weight: bold;
  }
  .avatar-description {
    width: 80%;
    font-size: 16px;
    text-align: start;
    font-weight: lighter;
    color: black;
    align-self: center;
    margin-bottom: 20px;
  }

  @media (min-width: 1365px) {
    .title-about {
      margin-top: 130px;
    }

    .avatar-card {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #dfd9d9;
      width: 25%;
      border-radius: 5%;
      -webkit-box-shadow: 5px 3px 5px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 5px 3px 5px 0px rgba(0, 0, 0, 0.75);
      box-shadow: 5px 3px 5px 0px rgba(0, 0, 0, 0.75);
    }

    .description-about {
      font-size: 25px;
    }

    .avatar-section {
      font-size: 30px;
    }
    .avatar-about {
      width: 30%;
    }
    .avatar-description {
      width: 90%;
      font-size: 15px;
    }
  }
`;

export const FooterStyle = styled.section`
  height: 150px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    21deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 64, 137, 1) 58%,
    rgba(0, 11, 85, 1) 98%
  );
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  bottom: 0%;
  width: 100%;

  a {
    color: #dfd9d9;
  }
  .titleFooter {
    /* font-size: 40px; */
    font-size: 15px;
    font-weight: bold;
    color: #dfd9d9;
    margin-left: 20px;
  }

  .contacts {
    font-size: 10px;
    color: #dfd9d9;
    margin-bottom: 20px;
    margin-right: 20px;
    margin-top: 20px;
  }
  @media (min-width: 1365px) {
    position: relative;
    bottom: 0%;
    .contacts {
      font-size: 15px;
    }
    .servicesFooter {
      font-size: 15px;
    }
    .titleFooter {
      font-size: 40px;
    }
  }
`;

export const ContactStyle = styled.section`
  display: grid;
  /* grid-template-columns: 50% 50%; */
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  /* margin-bottom: 200px; */
  margin-bottom: 50px;

  div {
    display: flex;
    justify-content: center;
  }
  .inputForm {
    width: 300px;
    /* width: 500px; */
  }

  .datosContacto {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
  }

  .submit {
    width: 20%;
    height: 40px;
    margin-top: 5%;
    color: white;
    background-color: #004089;
    border-radius: 20px;
  }

  .submit:hover {
    background-color: white;
    color: #004089;
    border-color: #004089;
    cursor: pointer;
  }

  .title-contact {
    color: #004089;
    font-size: 20px;
    font-weight: bold;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0%;
  }

  @media (min-width: 1365px) {
    grid-template-columns: 50% 50%;
    margin-bottom: 200px;

    div {
      display: flex;
      justify-content: center;
    }
    .inputForm {
      width: 500px;
    }

    .datosContacto {
      margin-left: 60px;
    }
  }
`;

export const NavBarStyled = styled.div`
display: grid;
grid-template-columns: 25% 25% 25% 25%;
justify-content: space-around;
position: sticky;
bottom: 0%;
width: 100%;

.iconContainer{
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 5px solid #004089;
  border-right: 5px solid #004089;
  height: 50px;
  background-color: rgb(400,400,400);

}
.iconContainer1{
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 5px solid #004089;
  height: 50px;
  background-color: rgb(400,400,400);

}
.iconContainer1On{
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 5px solid #004089;
  height: 50px;
  background-color: #004089;

}
.iconsBanner{
  width: 30px;
  height: 30px;
}
.iconsBannerOn{
  width: 30px;
  height: 30px;
}
.iconContainerOn{
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 5px solid #004089;
  border-right: 5px solid #004089;
  height: 50px;
  background-color: #004089;
}

@media (min-width: 1365px) {
  display: none;
  
}
`
