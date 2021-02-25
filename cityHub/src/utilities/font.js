import { normalize } from './adjustScreenSizeHelper';

// if we want add any other font family add here
export const FONT = {
   JefferiesExtended       : 'JefferiesExtended',
   AgencyFB_BlackExtended  : 'AgencyFB-BlackExtended',
   AgencyFB_Bold           : 'AgencyFB-Bold',
   OpenSans_Light          : 'OpenSans-Light',
   Ubuntu                  : 'Ubuntu',
   Ubuntu_light            : 'Ubuntu-Light',
   Ubuntu_Bold             : 'Ubuntu-Bold',
}

export const FONTSIZE = {
   tiny            : normalize(8),
   small_tiny      : normalize(9),
   small_medium    : normalize(26),
   small           : normalize(32),
   regular         : normalize(20),
   regular_medium  : normalize(14),
   medium          : normalize(15),
   extra_medium    : normalize(29),
   extra_mediu     : normalize(28),
   larg            : normalize(17),
   large           : normalize(18),
   extra_large     : normalize(22),
   extra_larg      : normalize(21),
   very_large      : normalize(42),
   larger          : normalize(40),
   largest         : normalize(36),


}

export const FONTALIGNMENT = {
   auto    : 'auto',
   left    : 'left',
   right   : 'right',
   center  : 'center',
   justify : 'justify',
}
