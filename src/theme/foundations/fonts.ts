import { css } from '@emotion/react';

// Biennale
import PoppinsRegular from '../fonts/Poppins-Regular.ttf';
import PoppinsSemiBold from '../fonts/Poppins-SemiBold.ttf';
import PoppinsBold from '../fonts/Poppins-Bold.ttf';

export const fonts = css`
  @font-face {
    font-family: Poppins;
    font-weight: 500;
    src: url(${PoppinsRegular});
    font-display: swap;
  }

  @font-face {
    font-family: Poppins;
    font-weight: 600;
    src: url(${PoppinsSemiBold});
    font-display: swap;
  }

  @font-face {
    font-family: Poppins;
    font-weight: 700;
    src: url(${PoppinsBold});
    font-display: swap;
  }
`;
