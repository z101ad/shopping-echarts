import axios from 'axios'
const $axios = axios.create({
    baseURL: 'https://mock.mengxuegu.com/mock/638ee70893a67b5f1066944e/example'
})

export default async function(path){
    return await $axios.get(path)
}
