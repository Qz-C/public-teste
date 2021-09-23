import { useState } from "react";
import styled from "styled-components";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Background from "../../assets/images/login-background/loginBg2.jpg";
import LoginLogo from "../../assets/images/logoLogin.png";

const LoginSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const LoginBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const LoginContaint = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 1;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
`;

const LoginForm = styled.div`
  z-index: 10;
  color: #fff;  
  max-width: 600px;
  height: 60%;
  background-color: #fff;
  opacity: 2;

  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );

  border-radius: 25px;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px;
`;

const ButtonsSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
 
  return (
    <LoginSection>
      <LoginWrapper>
        <LoginContaint>
          <LoginBackground src={Background} />
          <LoginForm>
            <img src={LoginLogo} alt="login" width="800" height="200" />
            <ButtonsSection>
              <Button
                style={{
                  background: "#db4a39",
                  borderColor: "#db4a39",
                  height: 40,
                  borderRadius: 5,
                }}
              >
                <i className="pi pi-google p-px-2"></i>
                <span style={{ padding: 5 }}>Google</span>
              </Button>
              <p
                style={{
                  color: "grey",
                  fontSize: 15,
                  padding: 10,
                  borderRadius: 5,
                }}
              >
                or
              </p>
              <Button
                style={{
                  background: "#3b5998",
                  borderColor: "#3b5998",
                  height: 40,
                }}
              >
                <i className="pi pi-facebook p-px-2"></i>
                <span style={{ padding: 5 }}>Facebook</span>
              </Button>
            </ButtonsSection>
            <InputSection>
              <div className="p-grid p-formgrid p-fluid">
                <div className="p-col-12 p-lg-4 p-mb-lg-0">
                  <span className="p-float-label">
                    <InputText className="p-inputtext-lg p-d-block" id="in" />
                    <label htmlFor="in" >
                      Email
                    </label>
                  </span>
                </div>

                <div className="p-col-12 p-lg-4 p-mb-lg-0">
                  <span className="p-float-label">
                    <Password className="p-inputtext-sm" id="in" style={{ width: 300, paddingTop:5}} toggleMask />
                    <label htmlFor="in" >
                      Password
                    </label>
                  </span>
                  <a style={{ color: "white" }} href="#">
                    Forgot Password
                  </a>
                </div>
              </div>

              <Button
                style={{
                  background: "#be2f24",
                  borderColor: "#be2f24",
                  height: 40,
                  borderRadius: 5,
                  width: "60%",
                  marginTop: "5%",
                  justifyContent: "center",
                }}
              >
                <span className="p-px-3">Log In</span>
              </Button>

              <p>
                New to ORGAXXXMIC?{" "}
                <a href="/" style={{ color: "red" }}>
                  sign up
                </a>
              </p>
            </InputSection>
          </LoginForm>
        </LoginContaint>
      </LoginWrapper>
    </LoginSection>
  );
};

export default Login;
