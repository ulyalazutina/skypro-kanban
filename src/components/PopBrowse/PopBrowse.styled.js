import styled from "styled-components";
import { _orange } from "../Common/Common.styled";
import { Link } from "react-router-dom";

export const PopBrowseWrap = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const ThemeDownCategories = styled.div`
  display: none;
  margin-bottom: 20px;
`;

export const CategoriesTheme = styled.div`
  opacity: 1;
  display: block;
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 5px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  opacity: 1 !important;
  /* потом убрать */
  background-color: #ffe4c2;
  color: #ff6d00;
  /*  */
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTittle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CategoriesThemeText = styled.p`
  ${_orange};
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;

export const StatusTitle = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  background-color: #94a6be;
`;

export const StatusThemeInput = styled.input``;

export const StatusThemeLabel = styled.label`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  color: white;
`;

export const PopBrowseWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subtitle = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const PopBrowseBtnWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

export const BtnGroup = styled.div`
  @media screen and (max-width: 495px) {
    width: 100%;
  }
`;

export const BtnGroupButton = styled.button`
  margin-right: 8px;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
    margin-right: 0px;
  }
`;

export const BtnGroupText = styled.a`
  color: #565eef;
`;

export const BtnBg = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
`;

export const BtnBgLink = styled(Link)`
  color: #ffffff;
`;
