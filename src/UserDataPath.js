class UserDataPath {
  getPathHome() {
    let path;
    if (process.platform === 'win32') {
      // windows
      path = process.env.APPDATA;
      return path;
    } else if (process.platform === 'darwin' || process.platform === 'linux') {
      // Mac or Linux
      path = process.env.HOME;
      return path;
    } else {
      // other
      console.log('Error: Platform not detected; only windows, mac and linux supported');
      return null;
    }
  }
  getPathCodeSettings() {
    const homePath = this.getPathHome();
    let partialSettingsPath;
    let codeSettingsPath;
    if (process.platform === 'win32') {
      // windows
      if (process.execPath.match(/insiders/gi)) {
        codeSettingsPath = homePath + '\\Code - Insiders\\User\\settings.json';
      } else {
        codeSettingsPath = homePath + '\\Code\\User\\settings.json';
      }
      return codeSettingsPath;
    } else if (process.platform === 'darwin' || process.platform === 'linux') {
      if (process.platform === 'darwin') {
        // Mac
        partialSettingsPath = homePath + '/Library/Application Support';
      } else if (process.platform === 'linux') {
        // Linux
        partialSettingsPath = homePath + '/.config';
      }
      // Mac or Linux
      if (process.execPath.match(/insiders/gi)) {
        codeSettingsPath = partialSettingsPath + '/Code - Insiders/User/settings.json';
      } else {
        codeSettingsPath = partialSettingsPath + '/Code/User/settings.json';
      }
      return codeSettingsPath;
    } else {
      console.log('Error: Platform not detected; only windows, mac and linux supported.');
      return null;
    }
  }
}
module.exports = new UserDataPath();
