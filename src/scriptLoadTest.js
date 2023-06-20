// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = { vus: 10, duration: '5m' }

export default function main() {
  let response

  group('page_1 - https://staya.dog/', function () {
    response = http.get('https://api.staya.dog/v1/catalogue/item/filters/', {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'ru',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://api.staya.dog/v1/catalogue/item/?category=&page=1&page_size=20', {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'ru',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(1.7)
    response = http.get('https://api.staya.dog/v1/basket/', {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'ru',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(5)
    response = http.get('https://api.staya.dog/v1/basket/', {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'ru',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(5)
    response = http.get('https://api.staya.dog/v1/basket/', {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'ru',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(5)
    response = http.get('https://api.staya.dog/v1/basket/', {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'ru',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(5)
    response = http.get('https://api.staya.dog/v1/basket/', {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'ru',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(5)
    response = http.get('https://api.staya.dog/v1/basket/', {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'ru',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
  })
}