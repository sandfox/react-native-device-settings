# react-native-device-settings

*Forked to remove ability to call forbidden url schemes on ios*


React Native simple platform agnostic API to open up device settings menus

## Install
```
npm install https://github.com/sandfox/react-native-device-settings --save
```

### Automatic Install
```
react-native link react-native-device-settings
```
### Manual Install

### `iOS`

-NA: using Linking RN library. URLs applicable for IOS 10.

### Android

1. In `settings.gradle`, insert the following code:
    ```
    include ':react-native-device-settings'
    project(':react-native-device-settings').projectDir = new File(settingsDir, '../node_modules/react-native-device-settings/android')
    ```

2. In `build.gradle`, insert the following code:
    ```
    android {
      ...
    }
    ...

    dependencies {
      ...
    + compile project(':react-native-device-settings')
    }
    ...
    ```
3. Edit `MainActivity.java` to look like this

    ```
    ...

    import com.rjblopes.opensettings.OpenSettingsPackage; // <-- add this import
    ...
    ```

## Usage

```javascript

import DeviceSettings from 'react-native-device-settings';

// Open settings menu - ANDROID ONLY
DeviceSettings.open();

// Open app settings menu
DeviceSettings.app();

// Open wifi settings menu - ANDROID ONLY
DeviceSettings.wifi();
```


## Dev Notes
Developed for personal use and might be useful for others.
