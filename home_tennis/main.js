//window.onload = function() {
  //alert("點擊地圖上的圖例來或的更多資訊");};
var map;
function initMap() {
    // 使用 Google Maps JavaScript API 初始化地圖
    var tennis1 = { lat: 24.99972, lng: 121.53472 };
    var tennis2 = { lat: 24.9975, lng: 121.53472 };
    var tennis3 = { lat: 24.99166, lng: 121.53666 };
    var tennis4 = { lat: 24.98277, lng: 121.57027 };
    var tennis5 = { lat: 25.01888, lng: 121.52305 };
    var tennis6 = { lat: 25.02055, lng: 121.52111 };
    var tennis7 = { lat: 25.02361, lng: 121.51472 };
    var tennis8 = { lat: 25.02277, lng: 121.51555 };
    var tennis9 = { lat: 25.0125, lng: 121.49527 };
    var tennis10 = { lat: 25.01666, lng: 121.49166 };
    var tennis11 = { lat: 25.05472, lng: 121.50666 };
    var tennis12 = { lat: 25.03388, lng: 121.48833 };
    var basketball1 = {lat: 25.0070476, lng: 121.5282095};
    var basketball2 = {lat: 25.0144935, lng: 121.5256417};
    var basketball3 = {lat: 25.0191973, lng: 121.5359528};
    var basketball4 = {lat: 25.0093304, lng: 121.5366525};
    var badminton1 = {lat: 25.0067071, lng: 121.5292285};
    var badminton2 = {lat: 25.0211835, lng: 121.5048036};
    var badminton3 = {lat: 25.0202073, lng: 121.5215287};
    var NTNU = {lat: 25.0260878, lng: 121.5275484};
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 24.99972, lng: 121.53472 },
      zoom: 13, // 初始縮放級別
      styles: [
        {
          featureType: 'poi',
          stylers: [{ visibility: 'off' }] // 隱藏點興趣 (POI) 標籤
        }
      ]
    });

    // 1 在地圖上加上標記（可選）
    var marker = new google.maps.Marker({
      position: tennis1,
      map: map,
      title: '福和網球場',
      icon: {
        url :"tennis icon.png",  
        scaledSize: new google.maps.Size(30, 30)
      }
    });

    var infowindow = new google.maps.InfoWindow({
      content: '福和網球場<br>溪洲河濱公園<br><a href="http://127.0.0.1:5501/index.html">詳細資訊</a>'
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

    //2
    var marker2 = new google.maps.Marker({
    position: tennis2,
    map: map,
    title: '網球場',
    icon: {
      url: "tennis icon.png",
      scaledSize: new google.maps.Size(30, 30)
          }
    });

    var infowindow2 = new google.maps.InfoWindow({
    content: '網球場<br>溪洲河濱公園'
    });

    marker2.addListener('click', function() {
    infowindow2.open(map, marker2);
    });

    //3
    var marker3 = new google.maps.Marker({
      position: tennis3,
      map: map,
      title: '網球場',
      icon: {
        url :"tennis icon.png",  
        scaledSize: new google.maps.Size(30, 30)
      }
    });

    var infowindow3 = new google.maps.InfoWindow({
      content: '網球場<br>景美河濱公園<br><a href="https://vbs.sports.taipei/venues/?K=489">詳細資訊</a>'
    });

    marker3.addListener('click', function() {
      infowindow3.open(map, marker3);
    });
    //4
    var marker4 = new google.maps.Marker({
      position: tennis4,
      map: map,
      title: '網球場',
      icon: {
        url :"tennis icon.png",  
        scaledSize: new google.maps.Size(30, 30)
      }
    });

    var infowindow4 = new google.maps.InfoWindow({
      content: '網球場<br>道南河濱公園'
    });

    marker4.addListener('click', function() {
      infowindow4.open(map, marker4);
    });
    //5
    var marker5 = new google.maps.Marker({
      position: tennis5,
      map: map,
      title: '古亭河濱公園網球場',
      icon: {
        url :"tennis icon.png",  
        scaledSize: new google.maps.Size(30, 30)
      }
    });

    var infowindow5 = new google.maps.InfoWindow({
      content: '古亭河濱公園網球場<br>古亭河濱公園<br><a href="https://vbs.sports.taipei/venues/?K=305">詳細資訊</a>'
    });

    marker5.addListener('click', function() {
      infowindow5.open(map, marker5);
    });
    //6
    var marker6 = new google.maps.Marker({
      position: tennis6,
      map: map,
      title: '古亭網球場',
      icon: {
        url :"tennis icon.png",  
        scaledSize: new google.maps.Size(30, 30)
      }
    });

    var infowindow6 = new google.maps.InfoWindow({
      content: '古亭網球場<br>古亭河濱公園'
    });

    marker6.addListener('click', function() {
      infowindow6.open(map, marker6);
    });
    //7
    var marker7 = new google.maps.Marker({
      position: tennis7,
      map: map,
      title: '中正河濱網球場',
      icon: {
        url :"tennis icon.png",  
        scaledSize: new google.maps.Size(30, 30)
      }
    });

    var infowindow7 = new google.maps.InfoWindow({
      content: '中正河濱網球場<br>中正河濱公園<br><a href="https://vbs.sports.taipei/venues/?K=266">詳細資訊</a>'
    });

    marker7.addListener('click', function() {
      infowindow7.open(map, marker7);
    });
    //8
    var marker8 = new google.maps.Marker({
      position: tennis8,
      map: map,
      title: '中正網球場',
      icon: {
        url :"tennis icon.png",  
        scaledSize: new google.maps.Size(30, 30)
      }
    });

    var infowindow8 = new google.maps.InfoWindow({
      content: '中正網球場<br>中正河濱公園'
    });

    marker8.addListener('click', function() {
      infowindow8.open(map, marker8);
    });
    //9

    var marker9 = new google.maps.Marker({
      position: tennis9,
      map: map,
      title: '華中橋下網球場',
      icon: {
        url :"tennis icon.png",  
        scaledSize: new google.maps.Size(30, 30)
      }
    });

    var infowindow9 = new google.maps.InfoWindow({
      content: '華中橋下網球場<br>華中河濱公園'
    });

    marker9.addListener('click', function() {
      infowindow9.open(map, marker9);
    });

    //10
    var marker10 = new google.maps.Marker({
      position: tennis10,
      map: map,
      title: '華中網球場',
      icon: {
        url :"tennis icon.png",  
        scaledSize: new google.maps.Size(30, 30)
      }
    });

    var infowindow10 = new google.maps.InfoWindow({
      content: '華中網球場<br>華中河濱公園<br><a href="https://vbs.sports.taipei/venues/?K=239">詳細資訊</a>'
    });

    marker10.addListener('click', function() {
      infowindow10.open(map, marker10);
    });
    //11
    var marker11 = new google.maps.Marker({
      position: tennis11,
      map: map,
      title: '大稻埕網球場',
      icon: {
        url :"tennis icon.png",  
        scaledSize: new google.maps.Size(30, 30)
      }
    });

    var infowindow11 = new google.maps.InfoWindow({
      content: '大稻埕網球場<br>延平河濱公園<br><a href="https://vbs.sports.taipei/venues/?K=324">詳細資訊</a>'
    });

    marker11.addListener('click', function() {
      infowindow11.open(map, marker11);
    });
    //12
    var marker12 = new google.maps.Marker({
      position: tennis12,
      map: map,
      title: '雙園網球場',
      icon: {
        url :"tennis icon.png",  
        scaledSize: new google.maps.Size(30, 30)
      }
    });

    var infowindow12 = new google.maps.InfoWindow({
      content: '雙園網球場<br>雙園河濱公園<br><a href="https://vbs.sports.taipei/venues/?K=210">詳細資訊</a>'
    });

    marker12.addListener('click', function() {
      infowindow12.open(map, marker12);
    });

  
  //籃球1
  var marker13 = new google.maps.Marker({
    position: basketball1,
    map: map,
    title: '福和橋下籃球場',
    icon: {
      url: "籃球icon.png",
      scaledSize: new google.maps.Size(40, 40)
          }
    });

    var infowindow13 = new google.maps.InfoWindow({
    content: '福和橋下籃球場<br>福和運動公園'
    });

    marker13.addListener('click', function() {
    infowindow13.open(map, marker13);
    });
//2
    var marker14 = new google.maps.Marker({
      position: basketball2,
      map: map,
      title: '古亭河濱公園籃球場',
      icon: {
        url: "籃球icon.png",
        scaledSize: new google.maps.Size(40, 40)
            }
      });
  
      var infowindow14 = new google.maps.InfoWindow({
      content: '古亭河濱公園籃球場<br>古亭河濱公園'
      });
  
      marker14.addListener('click', function() {
      infowindow14.open(map, marker14);
      });
      //3
    var marker15 = new google.maps.Marker({
      position: basketball3,
      map: map,
      title: '台大新生籃球場',
      icon: {
        url: "籃球icon.png",
        scaledSize: new google.maps.Size(40, 40)
              }
      });
    
      var infowindow15 = new google.maps.InfoWindow({
      content: '台大新生籃球場<br>國立台灣大學'
        });
    
      marker15.addListener('click', function() {
      infowindow15.open(map, marker15);
        });
        //4
      var marker16 = new google.maps.Marker({
        position: basketball4,
        map: map,
        title: '師大分部籃球場',
        icon: {
          url: "籃球icon.png",
          scaledSize: new google.maps.Size(40, 40)
                  }
          });
        
      var infowindow16 = new google.maps.InfoWindow({
      content: '師大分部籃球場<br>國立台灣師範大學'
        });
    
      marker16.addListener('click', function() {
      infowindow16.open(map, marker16);
        });   
        //羽球
        var marker17 = new google.maps.Marker({
          position: badminton1,
          map: map,
          title: '福和橋下羽球場及桌球場',
          icon: {
            url: "羽球icon.png",
            scaledSize: new google.maps.Size(50, 50)
                  }
          });
        
        var infowindow17 = new google.maps.InfoWindow({
          content: '福和橋下羽球場及桌球場<br>福和橋下'
            });
        
        marker17.addListener('click', function() {
          infowindow17.open(map, marker17);
            });  
        //2
        var marker18 = new google.maps.Marker({
          position: badminton2,
          map: map,
          title: '青年公園羽球場（水源路）',
          icon: {
            url :"羽球icon.png",  
            scaledSize: new google.maps.Size(50, 50)
          }
        });
    
        var infowindow18 = new google.maps.InfoWindow({
          content: '青年公園羽球場（水源路）<br>青年公園'
        });
    
        marker18.addListener('click', function() {
          infowindow18.open(map, marker18);
        });
        //3
        var marker19 = new google.maps.Marker({
          position: badminton3,
          map: map,
          title: '古亭河濱公園羽球場',
          icon: {
            url :"羽球icon.png",  
            scaledSize: new google.maps.Size(50, 50)
          }
        });
    
        var infowindow19 = new google.maps.InfoWindow({
          content: '古亭河濱公園羽球場<br>古亭河濱公園'
        });
    
        marker19.addListener('click', function() {
          infowindow19.open(map, marker19);
        });  
        //NTNU
        var marker20 = new google.maps.Marker({
          position: NTNU,
          map: map,
          title: '師大',
          icon: {
            url :"icon_NTNU.png",  
            scaledSize: new google.maps.Size(30, 30)
          }
        });
    
        var infowindow20 = new google.maps.InfoWindow({
          content: '國立台灣師範大學'
        });
    
        marker20.addListener('click', function() {
          infowindow20.open(map, marker20);
        });    
  }