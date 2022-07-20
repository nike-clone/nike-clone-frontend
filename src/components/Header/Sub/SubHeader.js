import React, { useState } from 'react';
import styled from 'styled-components';
import jorden from 'assets/icons/jorden.png';
import { Link } from 'react-router-dom';
import * as Styled from './SubHeader.style';
import Login from 'components/form/Login/Login';
import Modal from 'components/common/modal/Modal';
import useModal from 'hooks/useModal';
import { useSelector, useDispatch } from 'react-redux';
import { modalStateChange } from 'features/modal/modalSlice';
const SubHeader = () => {
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((state) => state.modal);
  const modalOpenHandler = () => {
    dispatch(modalStateChange());
  };
  return (
    <>
      <Styled.Container>
        <Styled.Brand>
          <img src={jorden} alt="jordan" />
        </Styled.Brand>
        <Styled.UserNav>
          <Link to="/">고객센터</Link>|<Link to="/join">멤버 가입</Link>|
          <Link to="/" onClick={modalOpenHandler}>
            로그인
          </Link>
        </Styled.UserNav>
      </Styled.Container>
      {isModalOpen && (
        <Modal showModal={modalOpenHandler}>{<Login modalClose={modalOpenHandler} />}</Modal>
      )}
    </>
  );
};

export default SubHeader;
