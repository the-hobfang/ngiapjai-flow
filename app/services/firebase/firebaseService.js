import Constants from 'expo-constants';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: Constants.expoConfig.extra.firebaseConfig.apiKey,
    authDomain: Constants.expoConfig.extra.firebaseConfig.authDomain,
    projectId: Constants.expoConfig.extra.firebaseConfig.projectId,
    storageBucket: Constants.expoConfig.extra.firebaseConfig.storageBucket,
    messagingSenderId: Constants.expoConfig.extra.firebaseConfig.messagingSenderId,
    appId: Constants.expoConfig.extra.firebaseConfig.appId,
    measurementId: Constants.expoConfig.extra.firebaseConfig.measurementId
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
