import { IntlShape } from 'react-intl';
import { DropDownType } from '../types';

const translateOptions = (intl: IntlShape, options: DropDownType[]) =>
  options.map((option) => ({
    ...option,
    label: intl.formatMessage({ id: option.label }),
  }));

export default translateOptions;
