import styled from "styled-components";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";

export const HeaderStyle = styled.section`
  color: #004089;

  a {
    text-decoration: none;
    color: #004089;
  }

  .title {
    font-size: 40px;
    font-weight: bold;
    margin-left: 1rem;
    margin-top: 20px;
    border-bottom: 8px solid #004089;
    border-right: 6px solid #004089;
    border-radius: 0px 230px 230px 0px;
    width: fit-content;
  }

  .navBar {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    margin-top: 2rem;
  }
  button {
    background: none;
    color: #004089;
    border: none !important;
    cursor: pointer;
    font-size: 25px;
    font-weight: bold;
  }

  .on {
    background-color: #004089;
    color: white;
    display: flex;
    justify-content: center;
  }

  .off {
    background-color: transparent;
    border-top: 2px solid #004089;
    border-bottom: 2px solid #004089;
  }
`;

export const BannerStyle = styled.section`
  display: flex;
  flex-direction: row;

  .div1 {
    height: 350px;
    width: 100%;
    background: url(${image1}) no-repeat center;
    background-size: cover;
  }
  .div2 {
    height: 350px;
    width: 100%;
    background: url(${image2}) no-repeat center;
    background-size: cover;
  }
  .div3 {
    height: 350px;
    width: 100%;
    background: url(${image3}) no-repeat center;
    background-size: cover;
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
    font-size: 30px;
  }

  .slogan {
    display: flex;
    margin-top: 10%;
    align-self: center;
    font-size: 40px;
    font-style: italic;
    font-weight: 600;
    color: #004089;
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
  width: 80%;
  margin-left: 10%;
  margin-bottom: 100px;

  .title {
    color: #004089;
    font-size: 40px;
    margin-bottom: 20px;
    margin-top: 20px;
    font-weight: bold;
  }

  .subtitle {
    font-size: 25px;
  }
`;

export const FooterStyle = styled.section`
  height: 150px;
  background-color: #004089;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: white;
  bottom: 0%;
  position: relative;
  width: 100%;

  a {
    text-decoration: none;
    color: white;
  }

  .title {
    font-size: 40px;
    font-weight: bold;
  }

  .services {
    list-style: none;
    margin-top: -1px;
  }
`;

export const ContactStyle = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 200px;

  div{
    display: flex;
    justify-content: center;
  }
  .inputForm{
    width: 500px;
  }

  .datosContacto{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .submit{
    width: 20%;
    height: 40px;
    margin-top: 5%;
    color: white;
    background-color: #004089;
    border-radius: 20px;
  }

  .submit:hover{
    background-color: white;
    color: #004089;
    border-color: #004089;
    cursor: pointer;
  }

  .title{
    color: #004089;
    font-size: 30px;
    font-weight: bold;
  }
  .form{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 20%;
  }

  .subtitle{
    font-size: 20px;
  }
`;
