import React from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import styled from "styled-components";
import ErrorIcon from "./assets/icon-error.svg";
import Swal from "sweetalert2";
import {
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
} from "./Styles";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  type Inputs = {
    name: string;
    surname: string;
    email: string;
    password: number | string;
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    Swal.fire({
      title: "Successfully",
      text: "Form submited",
      imageUrl:
        "https://t3.ftcdn.net/jpg/03/24/97/10/360_F_324971060_Lqd0kiaYCSjUp8u9CHPh9pPZ7hQeEKkQ.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };

  return (
    <Main className="App">
      <TextContainer>
        <Title>Learn to code by watching others</Title>
        <Paragraph>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </Paragraph>
      </TextContainer>

      <MainContent>
        <FormHeader>
          <FormHeaderTitle>
            <Span>Try it free 7 days</Span> then $20/mo. thereafter
          </FormHeaderTitle>
        </FormHeader>

        <InputContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputFieldContainer>
              <InputField
                placeholder="First Name"
                {...register("name", {
                  required: "First Name cannot be empty",
                })}
              />
              {errors.name && <ErrorInput>{errors.name.message}</ErrorInput>}

              <InputField
                placeholder="Last Name"
                {...register("surname", {
                  required: "Last Name cannot be empty",
                })}
              />
              {errors.surname && (
                <ErrorInput>{errors.surname.message}</ErrorInput>
              )}
              <InputField
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Looks like this is not an email",
                  },
                })}
              />
              {errors.email?.type === "required" && (
                <ErrorInput>Email cannot be empty</ErrorInput>
              )}
              {errors.email && <ErrorInput>{errors.email.message}</ErrorInput>}

              <InputField
                placeholder="Password"
                type="password"
                {...register("password", {
                  required: "Password cannot be empty",
                })}
              />

              {errors.password && (
                <ErrorInput>{errors.password.message}</ErrorInput>
              )}
            </InputFieldContainer>

            <div>
              <Button type="submit">CLAIM YOUR FREE TRIAL</Button>
            </div>

            <FooterText href="#">
              By clicking the button, you are agreeing to our
              <FooterSpan> Terms and Services</FooterSpan>
            </FooterText>
          </form>
        </InputContainer>
      </MainContent>
    </Main>
  );
}

export default App;
