import {
  fetchList
} from '@/api/edge-data'

const state = null
const mutations = null
const actions = {
  //่็นๅ่กจ
  getDataList({}, ) {
    return new Promise((resolve, reject) => {
      fetchList().then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
