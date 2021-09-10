/*
 * File Created: Wednesday, 8th September 2021 3:03:41 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Wednesday, 8th September 2021 3:03:41 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */

import { initializeApp } from '@firebase/app';
import { getDatabase } from '@firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAqNfEUNFLb6XDZo0vDqBrEKNSilelMExs',
  authDomain: 'location-tracker-6a473.firebaseapp.com',
  databaseURL: 'https://location-tracker-6a473-default-rtdb.firebaseio.com',
  projectId: 'location-tracker-6a473',
  storageBucket: 'location-tracker-6a473.appspot.com',
  messagingSenderId: '437974341076',
  appId: '1:437974341076:web:a9a1db7059e377124cf241',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, app };
