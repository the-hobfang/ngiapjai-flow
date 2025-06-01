const config = require('./config');

const expoConfig = {
  expo: {
    name: config.appName,
    slug: config.appSlug,
    version: config.appVersion,
    description: config.appDescription,
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'ngiapjaiflow',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      edgeToEdgeEnabled: true,
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      ['expo-router', { root: 'app' }],
      [
        'expo-splash-screen',
        {
          image: './assets/images/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      apiUrl: config.apiUrl,
      eas: {
        projectId: config.projectId
      },
      firebaseConfig: {
        apiKey: config.apiKey,
        authDomain: config.authDomain,
        projectId: config.firebaseProjectId,
        storageBucket: config.storageBucket,
        messagingSenderId: config.messagingSenderId,
        appId: config.appId,
        measurementId: config.measurementId
      }
    },
    owner: config.appOwner
  },
};

export default expoConfig;