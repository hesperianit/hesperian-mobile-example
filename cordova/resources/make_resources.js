const {
  exec
} = require('child_process');

const sourceIcon = 'sourceArt/icon-square.png';

const iosIcons = [{
    size: 20
  },
  {
    size: 29
  },
  {
    size: 40
  },
  {
    size: 50
  },
  {
    size: 57
  },
  {
    size: 58
  },
  {
    size: 60
  },
  {
    size: 72
  },
  {
    size: 80
  },
  {
    size: 87
  },
  {
    size: 100
  },
  {
    size: 114
  },
  {
    size: 120
  },
  {
    size: 144
  },
  {
    size: 152
  },
  {
    size: 167
  },
  {
    size: 180
  },
  {
    size: 1024,
    format: 'RGB'
  }
];

const iosLaunchImages = [{ // <splash height="480" platform="ios" src="resources/splash/ios/Default.png" width="320" />
    orientation: 'Portrait',
    aspect: '3:2',
    width: 320,
    height: 480
  },
  { //     <splash height="960" platform="ios" src="resources/splash/ios/Default@2x.png" width="640" />
    orientation: 'Portrait',
    aspect: '3:2',
    width: 640,
    height: 960
  },
  { //     <splash height="1136" platform="ios" src="resources/splash/ios/Default-568h@2x.png" width="640" />
    orientation: 'Portrait',
    aspect: '16:9',
    width: 640,
    height: 1136
  },
  { //     <splash height="1334" platform="ios" src="resources/splash/ios/Default-667h@2x.png" width="750" />
    orientation: 'Portrait',
    aspect: '16:9',
    width: 750,
    height: 1334
  },
  { //     <splash height="2208" platform="ios" src="resources/splash/ios/Default-Portrait-736h@3x.png" width="1242" />
    orientation: 'Portrait',
    aspect: '16:9',
    width: 1242,
    height: 2208
  },
  { //     <splash height="1242" platform="ios" src="resources/splash/ios/Default-Landscape-736h@3x.png" width="2208" />
    orientation: 'Landscape',
    aspect: '9:16',
    width: 2208,
    height: 1242
  },
  { //     <splash height="1024" platform="ios" src="resources/splash/ios/Default-Portrait.png" width="768" />
    orientation: 'Portrait',
    aspect: '4:3',
    width: 768,
    height: 1024
  },
  { //     <splash height="768" platform="ios" src="resources/splash/ios/Default-Landscape.png" width="1024" />
    orientation: 'Landscape',
    aspect: '3:4',
    width: 1024,
    height: 768
  },
  { //     <splash height="2048" platform="ios" src="resources/splash/ios/Default-Portrait@2x.png" width="1536" />
    orientation: 'Portrait',
    aspect: '4:3',
    width: 1536,
    height: 2048
  },
  { //     <splash height="1536" platform="ios" src="resources/splash/ios/Default-Landscape@2x.png" width="2048" />
    orientation: 'Landscape',
    aspect: '3:4',
    width: 2048,
    height: 1536
  },
  { //     <splash height="2436" platform="ios" src="resources/splash/ios/LaunchImage-1125x2436.png" width="1125" />
    orientation: 'Portrait',
    aspect: '19.5:9',
    width: 1125,
    height: 2436
  },
  { //      <splash height="1125" platform="ios" src="resources/splash/ios/LaunchImage-2436x1125.png" width="2436" />
    orientation: 'Landscape',
    aspect: '9:19.5',
    width: 2436,
    height: 1125
  }
];


function makeIOSIcon(spec, destDir) {
  const format = spec.format ? `-${spec.format}` : '';
  const name = `AppIcon-${spec.size}${format}.png`;
  const formatCmd = spec.format === 'RGB' ? ' -alpha off' : '';
  const cmd = `convert ${sourceIcon} -resize ${spec.size}x${spec.size}${formatCmd} ${destDir}/${name}`;

  console.log(`<icon src="resources/icons/ios/${name}" platform="ios" width="${spec.size}" height="${spec.size}" />`);

  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      console.log(err.message);
      return;
    }
  });
}

function makeIOSLaunchImage(spec, destDir) {
    const name = `LaunchImage-${spec.orientation}-${spec.width}x${spec.height}.png`;
    const formatCmd = spec.format === 'RGB' ? ' -alpha off' : '';
    const cmd = `convert ${sourceIcon} -resize ${spec.width}x${spec.height} ${destDir}/${name}`;

    console.log(`<splash platform="ios" src="resources/splash/ios/${name}" width="1{spec.width}242" height="${spec.height}" />`);
    
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        console.log(err.message);
        return;
      }
    });
  }

iosIcons.forEach(spec => {
  makeIOSIcon(spec, `./icons/ios`);
})

iosLaunchImages.forEach(spec => {
    makeIOSLaunchImage(spec, `./splash/ios`);
  })