/* Overlay container used to render all popovers and modals */
import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { CloseIcon } from '../../icons';
import { useOutsideClickListener } from '../../utils/hooks';
import { CoordsType, MODAL_TYPE, SIZES } from '../../typesAndEnums';
import IconActive from '../IconActive/IconActive';

interface OverlayProps {
  children: JSX.Element;
  isOpen: boolean;
  handleClose?: (args?: any) => void;
  type?: MODAL_TYPE;
  center?: boolean; // set to true if you want to center the div on the screen
  close?: boolean; // set to true if you want to add an close (X) icon in the top right of your modal
  coords?: CoordsType; // pass down top, left, bottom, right coordinates to position div relative to viewport
  modalWidth?: string;
  modalHeight?: string;
  withOutsideClick?: boolean;
  closeWarning?: boolean;
  closeButtonBackgroundColor?: string;
  id?: string;
}

const Overlay: React.FC<OverlayProps> = ({
  children,
  isOpen,
  handleClose = () => {
    return null;
  },
  type = MODAL_TYPE.MODAL_NON_LIGHTBOX,
  center,
  close,
  coords,
  modalWidth,
  modalHeight,
  withOutsideClick,
  id,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const centeredOverlayClassname =
    center && type === MODAL_TYPE.NON_MODAL_LIGHTBOX
      ? 'centered non-modal-lightbox'
      : center
      ? 'centered'
      : undefined;

  useOutsideClickListener(modalRef, handleClose, withOutsideClick && isOpen);

  return createPortal(
    isOpen && (coords ? coords : true) ? (
      <OuterContainer id={id}>
        <CenteredOverlay className={centeredOverlayClassname}>
          {type !== MODAL_TYPE.NON_MODAL_NON_LIGHTBOX ? (
            <ModalType className={type} />
          ) : null}
          <Modal
            className={close ? 'close' : undefined}
            ref={modalRef}
            coords={coords}
            modalWidth={modalWidth}
            modalHeight={modalHeight}
          >
            {children}
            {close ? (
              <CloseIconContainer>
                <IconActive
                  ariaLabel="ariaLabels.closeModal"
                  handleClick={handleClose}
                  tabIndex={1}
                >
                  <CloseIcon size={SIZES.LARGE} />
                </IconActive>
              </CloseIconContainer>
            ) : null}
          </Modal>
        </CenteredOverlay>
      </OuterContainer>
    ) : null,
    document.getElementById('modal-overlay')!
  );
};

const OuterContainer = styled.div`
  pointer-events: auto;
  position: relative;
  z-index: 0;
`;

const Modal = styled.div<{
  coords?: CoordsType;
  modalWidth?: string;
  modalHeight?: string;
}>`
  top: ${({ coords }) => (coords?.top ? `${coords?.top}px` : 'auto')};
  bottom: ${({ coords }) => (coords?.bottom ? `${coords?.bottom}px` : 'auto')};
  left: ${({ coords }) => (coords?.left ? `${coords?.left}px` : 'auto')};
  right: ${({ coords }) => (coords?.right ? `${coords?.right}px` : 'auto')};
  width: ${({ modalWidth }) => modalWidth};
  max-width: ${({ modalWidth, theme }) =>
    modalWidth && theme.sizes.wrappers[SIZES.SMALL]};
  max-height: 1000px;
  height: ${({ modalHeight }) => modalHeight};
  position: fixed;
  z-index: 100;
`;

const CenteredOverlay = styled.div`
  &.non-modal-lightbox {
    pointer-events: none;
  }

  &.centered {
    position: fixed;
    display: flex;
    width: 100vw;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const ModalType = styled.div`
  &.modal-lightbox {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.colors.backgrounds.lightbox};
  }

  &.modal-non-lightbox {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
  }

  &.non-modal-lightbox {
    height: 100%;
    width: 100%;
    z-index: 0;
    background: ${({ theme }) => theme.colors.backgrounds.lightbox};
  }
`;

const CloseIconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 8px 16px 0px 0px;
`;

export default React.memo(Overlay);
