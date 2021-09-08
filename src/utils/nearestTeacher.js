/*
 * File Created: Wednesday, 8th September 2021 12:08:14 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Wednesday, 8th September 2021 12:08:14 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
export const distance = (lat1, lon1, lat2, lon2) => {
  let radlat1 = (Math.PI * lat1) / 180;
  let radlat2 = (Math.PI * lat2) / 180;
  let theta = lon1 - lon2;
  let radtheta = (Math.PI * theta) / 180;
  let dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  if (dist > 1) {
    dist = 1;
  }
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  dist = dist * 1.609344;
  return dist;
};
