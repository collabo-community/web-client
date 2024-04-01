/* CODE-COLLABO SUBCOMMUNITY only */
/* Global library-like styles */

import css from 'styled-jsx/css';

export default css.global`

    .lib__position-left {
        left: 0;
    }

    .lib__position-right {
        right: 0;
    }

    .lib__position-toggle-right {
        right: 13px;
    }

    .lib__position-toggle-left {
        left: 13px;
    }

    //---------------------

    .lib__margin-auto {
        margin: 0 auto;
    }

    .lib_margin-auto__sides {
        margin-left: auto;
        margin-right: auto;
    }

   // ----------------------
    .lib__flex-space-btw {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .lib__flex-space-btw__sm {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    // ----------------------
    .lib__flex-right {
        display: flex;
        justify-content: right;
        align-items: center;
    }

    .lib__flex-right__sm {
        display: flex;
        justify-content: right;
        align-items: center;
    }

    // ----------------------
    .lib__flex-start {
        display: flex;
        justify-content: start;
        align-items: center;
    }

    .lib__flex-start__sm {
        display: flex;
        justify-content: start;
        align-items: center;
    }

    // ----------------------
    .lib__flex-center-col {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .lib__flex-center-col__sm {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    // ----------------------
    .lib__flex-space-btw-col {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .lib__flex-space-btw-col__sm {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    // ----------------------
    .lib__flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .lib__flex-center__sm {
        display: flex;
        justify-content: center;
        align-items: center;
    }



    // --- MEDIUM SCREENS
    @media screen and (min-width: 600px) {
        // ----------------------
        .lib__flex-space-btw__md {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        // ---------------------- 
        .lib__flex-right__md {
            display: flex;
            justify-content: right;
            align-items: center;
        }

        // ----------------------
        .lib__flex-start__md {
            display: flex;
            justify-content: start;
            align-items: center;
        }
    }



    // --- LARGE SCREENS
    @media screen and (min-width: 1000px) {
        // ----------------------
        .lib__flex-space-btw__lg {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        // ----------------------
        .lib__flex-right__lg {
            display: flex;
            justify-content: right;
            align-items: center;
        }

        // ----------------------
        .lib__flex-start__lg {
            display: flex;
            justify-content: start;
            align-items: center;
        }
    }



    // --- VERY LARGE SCREENS
    @media screen and (min-width: 1440px) {
        // ----------------------
        .lib__flex-space-btw__vlg {
            display: flex;
            justify-content: space-between;
            align-items: center;
        } 

        // ----------------------
        .lib__flex-right__vlg {
            display: flex;
            justify-content: right;
            align-items: center;
        }

        // ----------------------
        .lib__flex-start__vlg {
            display: flex;
            justify-content: start;
            align-items: center;
        }
    
    }
`;