import React from 'react';
import { useSelector } from 'react-redux';
import AddChannel from './modals/AddChannel';
import { modalType } from '../selectors';
import RenameChannel from './modals/RenameChannel';
import RemoveChannel from './modals/RemoveChannel';

const MODAL_COMPONENTS = {
  ADD_CHANNEL: AddChannel,
  RENAME_CHANNEL: RenameChannel,
  REMOVE_CHANNEL: RemoveChannel,
  /* other modals */
};

const ModalRoot = () => {
  const curModalType = useSelector(modalType);
  if (!curModalType) {
    return null;
  }
  const SpecificModal = MODAL_COMPONENTS[curModalType];
  // return <SpecificModal {...modalProps} />;
  return <SpecificModal />;
};
export default ModalRoot;
