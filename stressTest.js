/* eslint-disable */
import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 100,
  duration: '1m',
};
export default function () {
  http.get(`http://localhost:3003/api/reviews/${Math.floor((Math.random() * 9999999) + 0)}`);
  sleep(1);
}