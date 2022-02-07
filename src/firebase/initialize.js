import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDCQ5T66CnaiOEocuuX4WR6GzhGuIWsv8M',
  authDomain: 'contacts-images.firebaseapp.com',
  projectId: 'contacts-images',
  storageBucket: 'contacts-images.appspot.com',
  messagingSenderId: '600940383176',
  appId: '1:600940383176:web:eda1712c3e35626ed38efd',
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };
