/* CODE-COLLABO SUBCOMMUNITY only */
/* Global styles */

import css from 'styled-jsx/css';

export default css.global`

    // --- Description: Styles that affect all Code Collabo sub-community pages
    
    // --- SMALL SCREENS
    body {
        background: var(--color-shade-white);
        font-family: var(--font-family-open-sans);
    }

    #__next {
        // ---belongs to library: page structure
        display: block;
    
        // ---specific to our app: spacing ontop & below page
        padding: 30px 0;
    }

    .app__menubar__nav {
        // ---belongs to library
        position: fixed;

        // ---belongs to library: this is only needed for when position is fixed
        top: 0;
        left: 0;

        // ---specific to our app
        background: var(--color-shade-white);
        width: 300px;
        height: 100%;
    }

    .app__menubar__toggle__close {
        width: 56px;
        height: 56px;
        position: absolute;
        top: 50px;
        right: 13px;
    }

    .app__logo {
        display: block;
        margin: 100px auto 50px auto;
        width: fit-content;
    }

    .app__menubar__nav__items {
        margin: 0 auto;
        gap: 10px;
        width: calc(100% - 60px);
    }

    .app__menubar__nav__link {
      text-decoration: none;
      background: #f9f9f9;
      padding: 15px 0px;
      gap: 24px;
      border-radius: 10px;
    }

    app__page-title {

    }

    .app__content-area {
        margin: 0 auto;
        width: calc(100% - 30px);
    }

    .app__header {
        padding: 13px 0;
    }

    .app__mobile-menu-btns {
        border-radius: 50%;
        padding: 16px;
    }

    .app__project-filter-container {
        position: fixed;
        top: 0;
        right: 0;
        margin: 0 auto;
        width: calc(100% - 60px);
        height: 100%;
        background: #e3e3e3;
    }

    .app__project-filter-container.open {
      transform: translateX(0%); /* Bring Filter in view */
    }

    .app__project-filter {
        padding: 67px 0px 20px 0px;
        margin:0 auto;
        width: 240px;
    }


    // --- LARGE SCREENS
    @media screen and (min-width: 600px) {
        #__next {
            // ---specific to our app: spacing ontop & below page
            padding: 50px 0 42px 0;
    
            // ---belongs to library: page structure [---specific to our app: column/row values]
            display: grid;
            grid-template-columns: 360px 1fr;
            grid-template-rows: 1fr;

            // ---belongs to library: set height for structure to work
            height: inherit;
        }

        .app__header {

        }

        .app__mobile-menu-btns {
            display: none;
        }

        .app__menubar__nav {
            // ---specific to our app
            border-right: 1px solid var(--color-neutral-200);

            // ---belongs to library: [---specific to our app: width value]
            position: static;
            width: inherit;
        }

        .app__logo {
            margin: 12px auto 82px auto;
        }
        
        .app__menubar__nav__items {
            gap: 10px
        }

        .app__menubar__nav__link {
            padding: 16px 0px;
            gap: 30px;
        }

        .app__content-area {
            width: calc(100% - 100px);
        }
    }


    // --- VERY LARGE SCREENS
    @media screen and (min-width: 1440px) {
        .app__content-area {
            width: 978px;
        }
    }
`;