/* CODE-COLLABO SUBCOMMUNITY only */
/* Typography styles: CSS variables */

import css from 'styled-jsx/css';

export default css.global`
@import url('https://fonts.googleapis.com/css?family=Open Sans');

:root {
  /*===========| FONT FAMILY |=========*/
  
  --font-family-open-sans: 'Open Sans';

  /*==================================*/



  /*===========| TYPOGRAPHY |==============*/
    /*   used with the font property    */
    /* https://www.w3schools.com/cssref/pr_font_font.php */
    /* --type-style-format: font-weight font-size/line-height */
  /*========================================*/

  --type-semi-bold-h1: 600 48px/65.37px;
  --type-semi-bold-h2: 600 34px/46.30px;
  --type-semi-bold-h3: 600 24px/32.68px;
  --type-semi-bold-h4: 600 20px/27.24px;
  --type-semi-bold-h5: 600 18px/24.51px;
  --type-semi-bold-h6: 600 16px/21.79px;
  --type-semi-bold-h7: 600 14px/19.07px;
  --type-semi-bold-h8: 600 12px/16.34px;

  --type-bold-h1: 700 48px/65.37px;
  --type-bold-h2: 700 34px/46.30px;
  --type-bold-h3: 700 24px/32.68px;
  --type-bold-h4: 700 20px/27.24px;
  --type-bold-h5: 700 18px/24.51px;
  --type-bold-h6: 700 16px/21.79px;
  --type-bold-h7: 700 14px/19.07px;
  --type-bold-h8: 700 12px/16.34px;

  --type-extra-bold-h1: 800 48px/65.37px;
  --type-extra-bold-h2: 800 34px/46.30px;
  --type-extra-bold-h3: 800 24px/32.68px;
  --type-extra-bold-h4: 800 20px/27.24px;
  --type-extra-bold-h5: 800 18px/24.51px;
  --type-extra-bold-h6: 800 16px/21.79px;
  --type-extra-bold-h7: 800 14px/19.07px;
  --type-extra-bold-h8: 800 12px/16.34px;

  --type-regular-sub-h1: 400 18px/24.51px;
  --type-regular-sub-h2: 400 16px/21.79px;

  --type-medium-sub-h1: 500 18px/24.51px;
  --type-medium-sub-h2: 500 16px/21.79px;

  --type-regular-body-text1: 400 18px/24.51px;
  --type-regular-body-text2: 400 16px/21.79px;
  --type-regular-body-text3: 400 14px/19.07px;
  --type-regular-body-text4: 400 12px/16.34px;

  --type-medium-body-text1: 500 18px/24.51px;
  --type-medium-body-text2: 500 16px/21.79px;
  --type-medium-body-text3: 500 14px/19.07px;
  --type-medium-body-text4: 500 12px/16.34px;

  /*==================================*/



  /*===========UNDERLINE (USED WITH TYPOGRAPHY)==============*/
  /*   used with the text-decoration property    */
  /* https://www.w3schools.com/cssref/pr_text_text-decoration.php */
  /* --underline-style-format: text-decoration-line text-decoration-color */

  --underline-neutral-50: underline var(--color-neutral-50);
  --underline-neutral-100: underline var(--color-neutral-100);
  --underline-neutral-150: underline var(--color-neutral-150);
  --underline-neutral-200: underline var(--color-neutral-200);
  --underline-neutral-250: underline var(--color-neutral-250);
  --underline-neutral-300: underline var(--color-neutral-300);
  --underline-neutral-350: underline var(--color-neutral-350);
  --underline-neutral-400: underline var(--color-neutral-400); /*main*/
 
  /*==================================*/

}

`;