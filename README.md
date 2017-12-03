Document Search Mobile App Using React Native 

Install the following dependencies 

1. npm install react-native-elements --save

2. npm install react-navigation --save

3. npm install react-native-vector-icons --save


4. npm link react-native-vector-icons

5. npm i react-native-modal-picker --save

6. npm install --save react-native-fetch-blob

7. react-native link (to link react-native-fetch-blob to android gradle settings)

8. run this command in Git Bash (for adding  the AndroidManifest.xml automatically) => RNFB_ANDROID_PERMISSIONS=true react-native link 

   refer https://github.com/wkh237/react-native-fetch-blob#user-content-download-example--fetch-files-that-needs-authorization-token for more info
   
   
   
***** react-native-svg

https://github.com/react-native-community/react-native-svg/issues/135

MainApplication.java:
**********************

@Override
protected List<ReactPackage> getPackages() {
    return Arrays.asList(
        ... other packages ...
        new RNSvgPackage()
    );
}

package.json:
*************

  "dependencies": {
    "react": "16.0.0",
    "react-native": "0.50.4",
    "react-native-svg": "^5.5.1",
    "victory-native": "^0.13.0"
  }

build.gradle:
*************

https://github.com/react-native-community/react-native-svg/issues/211

dependencies {
    compile(project(':react-native-svg')) {
        exclude group: "com.android.support", module: "appcompat-v7"
    }
    compile fileTree(dir: "libs", include: ["*.jar"])
    compile "com.android.support:appcompat-v7:23.0.1"
    compile "com.facebook.react:react-native:+"  // From node_modules
}  

settings.gradle:

./android/settings.gradle

https://github.com/react-native-community/react-native-svg/issues/170

include ':react-native-svg'
project(':react-native-svg').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-svg/android')