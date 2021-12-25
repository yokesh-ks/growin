import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(17, 17, 17, 0.8);
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const CauroselItem = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(assets/images/Hero/slide-1.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  transition: 0.3;
  margin: 0;

  &::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
`;

export const CauroselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
`;

export const Content = styled.div`
  text-align: center;
`;

export const Title = styled.div`
  color: #fff;
  margin-bottom: 30px;
  font-size: 48px;
  font-weight: 700;
`;

export const Description = styled.div`
  width: 80%;
  margin: 0 auto 30px auto;
  color: #fff;
`;

export const Button = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 32px 12px 32px;
  border-radius: 4px;
  transition: 0.5s;
  line-height: 1;
  margin: 10px;
  color: #fff;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
  text-transform: uppercase;
  border: 2px solid #5c9f24;
  background: #5c9f24;

  &:hover {
    background: #6ab82a;
    border-color: #6ab82a;
    color: #fff;
  }
`;
