/*
 * File Created: Wednesday, 8th September 2021 11:54:38 am
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Wednesday, 8th September 2021 11:54:38 am
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */

import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from 'expo-location';
import { useEffect, useState } from 'react';

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let currentLocation = await getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);
  return [errorMsg, location];
};

export default useLocation;
