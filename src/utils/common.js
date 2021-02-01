export const getPlatform = () => {
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  const iosPlatforms = ['iPhone', 'iPad', 'iPod'];

  const { userAgent, platform } = navigator;
  var os = '';
  if (macosPlatforms.includes(platform)) {
    os = 'macos';
  } else if (iosPlatforms.includes(platform)) {
    os = 'ios';
  } else if (windowsPlatforms.includes(platform)) {
    os = 'windows';
  } else if (userAgent.includes('Android')) {
    os = 'android';
  } else if (platform.includes('Linux')) {
    os = 'linux';
  }
  return os;
};
