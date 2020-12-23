export enum Device {
  MOBILE = 'MOBILE',
  DESKTOP = 'DESKTOP'
}

const viewportWidth = Math.max(document?.documentElement?.clientWidth ?? 0, window?.innerWidth ?? 0);

export const device = viewportWidth <= 768 ? Device.MOBILE : Device.DESKTOP;
export const isMobile = device === Device.MOBILE;
