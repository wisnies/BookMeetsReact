export const size = {
  mobileS: '320px',
  maxMobileS: '319px',
  mobileM: '375px',
  maxMobileM: '374px',
  mobileL: '425px',
  maxMobileL: '424px',
  tablet: '768px',
  maxTablet: '767px',
  laptop: '1024px',
  maxLaptop: '1023px',
  laptopL: '1440px',
  maxLaptopL: '1439px',
  desktop: '1920px',
  maxDesktop: '1919px',
  desktopL: '2560px',
  maxDesktopL: '2559px',
};

export const minWidth = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
};

export const maxWidth = {
  mobileS: `(max-width: ${size.maxMobileS})`,
  mobileM: `(max-width: ${size.maxMobileM})`,
  mobileL: `(max-width: ${size.maxMobileL})`,
  tablet: `(max-width: ${size.maxTablet})`,
  laptop: `(max-width: ${size.maxLaptop})`,
  laptopL: `(max-width: ${size.maxLaptopL})`,
  desktop: `(max-width: ${size.maxDesktop})`,
  desktopL: `(max-width: ${size.maxDesktopL})`,
};
