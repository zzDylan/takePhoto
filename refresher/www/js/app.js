// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
        .config(function($stateProvider,$urlRouterProvider){
            $stateProvider
            .state('state1',{
                url:'/state',
                templateUrl:'template/template1.html'
            });
            $urlRouterProvider.otherwise('/state');
})
        .controller('photoCtrl',function($scope,$cordovaCamera,$ionicPopup){
     $scope.user1="你敢不敢下拉刷新!";
     $scope.user2="小样你还真敢!有种继续往下拉";
            $scope.takePhoto=function(){
    
   
    
    var opt={
  title: '来张自拍吧么么哒', // String. 弹窗的标题。
  buttons: [{ //Array[Object] (可选)。放在弹窗footer内的按钮。
    text: '魔镜魔镜我最美丽~~~~',
    type: 'button-default',
    onTap: function(e) {
      // 当点击时，e.preventDefault() 会阻止弹窗关闭。
      e.preventDefault();
    }
  }, {
    text: 'OK',
    type: 'button-positive',
    onTap: function(e) {
      // 返回的值会导致处理给定的值。
     var options = {
                                                                 //这些参数可能要配合着使用，比如选择了sourcetype是0，destinationtype要相应的设置
        quality: 100,                                            //相片质量0-100
        destinationType: Camera.DestinationType.FILE_URI,        //返回类型：DATA_URL= 0，返回作为 base64 編碼字串。 FILE_URI=1，返回影像档的 URI。NATIVE_URI=2，返回图像本机URI (例如，資產庫)
        sourceType: Camera.PictureSourceType.CAMERA,             //从哪里选择图片：PHOTOLIBRARY=0，相机拍照=1，SAVEDPHOTOALBUM=2。0和1其实都是本地图库
        allowEdit: false,                                        //在选择之前允许修改截图
        encodingType:Camera.EncodingType.JPEG,                   //保存的图片格式： JPEG = 0, PNG = 1
        targetWidth: 200,                                        //照片宽度
        targetHeight: 200,                                       //照片高度
        mediaType:0,                                             //可选媒体类型：圖片=0，只允许选择图片將返回指定DestinationType的参数。 視頻格式=1，允许选择视频，最终返回 FILE_URI。ALLMEDIA= 2，允许所有媒体类型的选择。
        cameraDirection:0,                                       //枪后摄像头类型：Back= 0,Front-facing = 1
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: true                                   //保存进手机相册
    };
 
    $cordovaCamera.getPicture(options).then(function(imageData) {
        CommonJs.AlertPopup(imageData);
        var image = document.getElementById('myImage');
        image.src=imageData;
        //image.src = "data:image/jpeg;base64," + imageData;
    }, function(err) {
        // error
        CommonJs.AlertPopup(err.message);
    });
    }
  }]
}
$ionicPopup.show(opt);
}

        
 $scope.$broadcast('scroll.refreshComplete');
   
 

});
    