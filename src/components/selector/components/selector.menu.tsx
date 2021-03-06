import styled from 'styled-components';

import { useSelectorContext } from '../selector.context';

import { COLORS } from 'styles/color';
import { Z_INDEX } from 'styles/z-index';

import { RWrapper } from 'types/react';

const Menu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};

  z-index: ${Z_INDEX.SELECTOR};
  background-color: ${COLORS.white};
  min-width: 100%;
`;

export const SelectorMenu: RWrapper = (props) => {
  const { children, className } = props;
  const { isOpen } = useSelectorContext();

  return (
    <Menu isOpen={isOpen} className={className}>
      {children}
    </Menu>
  );
};
