export enum SIZES {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  XLARGE = 'xLarge',
}

export enum MODAL_TYPE {
  // see https://www.nngroup.com/articles/popups/ for further reference on modal types
  MODAL_LIGHTBOX = 'modal-lightbox', // includes lightbox and you can't interact with the background
  MODAL_NON_LIGHTBOX = 'modal-non-lightbox', // no lightbox and you can't interact with the background
  NON_MODAL_NON_LIGHTBOX = 'non-modal-non-lightbox', // no lightbox and can interact with the background
  NON_MODAL_LIGHTBOX = 'non-modal-lightbox', // includes lightbox and you can interact with the background
  TOOL_TIP = 'non-modal-non-lightbox',
}

export enum FILL_TYPE {
  FILL = 'fill',
  STROKE = 'stroke',
  BOTH = 'both',
}

export enum BUTTON_TYPES {
  SUBMIT = 'submit',
  BUTTON = 'button',
}

export enum BUTTON_THEME {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGER = 'danger',
}

export enum ROTATE {
  NINETY = 'rotate(90deg)',
  ONEEIGHTY = 'rotate(180deg)',
  TWOSEVENTY = 'rotate(270deg)',
  ZERO = 'rotate(0deg)',
}

export type IconType = {
  color?: string;
  size?: SIZES | string;
  rotate?: ROTATE;
  height?: string;
  scale?: string;
  width?: string;
  ariaLabel?: string;
  className?: string;
};

export type DropDownType = {
  label: string;
  value: string;
};

export type CoordsType = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};
