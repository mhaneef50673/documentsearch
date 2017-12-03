import RNFetchBlob from 'react-native-fetch-blob';

export default class FileManagerService{

    static downloadFile(filePath,callback){
        console.log(filePath) ;
        const { config, fs } = RNFetchBlob;
        let DocumentDir = fs.dirs.DocumentDir // this is the pictures directory. You can check the available directories in the wiki.
        console.log("Document Dir is " , DocumentDir);
        let date = new Date();
        let options = {
          fileCache: true,
          addAndroidDownloads : {
            useDownloadManager : true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
            notification : true,            
            description : 'Downloading document', 
            title : 'Download Success',
            mediaScannable : true,
          }
          /*useDownloadManager : true,
          description : 'Downloading document',
          path:  DocumentDir,*/
        }
        config(options).fetch('GET', filePath).then((res) => {
            console.log("File Download response is " , res.path());
          // do some magic here
          if(callback)
            callback();
        })
    }

}

