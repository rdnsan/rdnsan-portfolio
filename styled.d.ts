import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tabletS: string;
      tabletL: string;
      desktopXS: string;
      desktopS: string;
      desktopM: string;
      desktopL: string;
    };

    mixins: {
      flexStart: FlattenSimpleInterpolation;
      flexCenter: FlattenSimpleInterpolation;
      flexEnd: FlattenSimpleInterpolation;
      flexBetween: FlattenSimpleInterpolation;
      boxShadow: FlattenSimpleInterpolation;
      link: FlattenSimpleInterpolation;
      inlineLink: FlattenSimpleInterpolation;
      fancyList: FlattenSimpleInterpolation;
    };
  }
}
