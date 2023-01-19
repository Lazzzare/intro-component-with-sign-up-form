import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 45px;
  min-height: 100vh;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const TextContainer = styled.div`
  color: #ffffff;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 60px;
  padding-inline: 24px;
`;

const Title = styled.h1`
  font-size: 28px;
  width: 327px;
  align-items: center;
  line-height: 36px;
  letter-spacing: -0.29px;
  font-weight: 700;

  @media screen and (min-width: 1200px) {
    font-size: 50px;
    line-height: 55px;
    width: 525px;
    letter-spacing: -0.52 px;
    text-align: left;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 26px;
  width: 327px;

  @media screen and (min-width: 1200px) {
    width: 525px;
    text-align: left;
    margin-top: 16px;
  }
`;

const MainContent = styled.div`
  margin-inline: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FormHeader = styled.div`
  background-color: #5e54a4;
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  max-width: 327px;
  height: 88px;
  padding-inline: 68px;

  @media screen and (min-width: 1200px) {
    max-width: 540px;
    height: 60px;
    margin-top: 64px;
    margin: 0;
  }
`;

const FormHeaderTitle = styled.h2`
  color: #ffffff;
  font-size: 15px;
  line-height: 26px;
  font-weight: 400;
`;

const Span = styled.span`
  font-weight: 700;
  font-size: 15px;
  line-height: 26px;
  color: #ffffff;
`;

const InputContainer = styled.div`
  position: relative;
  background-color: #ffffff;
  width: 327px;
  margin: auto;
  min-height: 442px;
  border-radius: 10px;
  padding: 24px;
  margin-bottom: 63px;

  @media only screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 540px;
    min-height: 460px;
  }
`;

const InputFieldContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
`;

const InputField = styled.input`
  color: #3d3b48;
  font-weight: 600;
  font-size: 14px;
  line-height: 26px;
  padding-left: 19px;
  height: 56px;
  border-radius: 5px;
  border: 0.3px solid #dedede;
  outline: none;

  :focus {
    border-color: #5e54a4;
  }

  @media only screen and (min-width: 1200px) {
    width: 460px;
  }
`;

const Button = styled.button`
  background-color: #38cc8b;
  color: white;
  margin: auto;
  display: flex;
  margin-top: 16px;
  font-weight: 600px;
  font-size: 15px;
  line-height: 26px;
  align-items: center;
  text-align: center;
  cursor: pointer;
  padding: 15px 45px;
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
  border-radius: 5px;
  outline: none;
  border-width: 1px;

  @media only screen and (min-width: 1200px) {
    width: 460px;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

const FooterText = styled.a`
  text-decoration: none;
  color: #a6a1cf;
  font-weight: 500;
  font-size: 11px;
  display: block;
  align-items: center;
  text-align: center;
  margin-top: 8px;
  margin-inline: 39px;
`;

const FooterSpan = styled.span`
  color: #ff7979;
  font-weight: 700;
`;

const ErrorInput = styled.p`
  width: 100%;
  color: #ff7979;
  font-size: 12px;
  display: flex;
  text-align: right;
  justify-content: flex-end;

  @media only screen and (min-width: 1200px) {
    padding-right: 20px;
  }
`;

export {
  Title,
  TextContainer,
  Paragraph,
  FormHeader,
  Span,
  FormHeaderTitle,
  InputContainer,
  MainContent,
  FooterText,
  InputField,
  InputFieldContainer,
  Button,
  FooterSpan,
  ErrorInput,
  Main,
};
