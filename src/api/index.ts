import { get } from '@/configuration/http_server'

export function getBanner() {
  get('/banner', {type: 0}).then((res:any) => {
    console.log('111', res)
    return res
  })
}
