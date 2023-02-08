import useLoadingStore from '@/stores/modules/loading'
import Sleep from '@/utils/sleep'

const loadingStore = useLoadingStore()

function getList(num) {
  loadingStore.notLoading = true
  return new Promise((resolve) => {
    let list = [ { background: "rgb(233,32,38)" } ]
    for (let i = 1; i<num; i++){
      let bg_object = {
        background: `rgb(${Math.round(Math.random()*220+10)},${Math.round(Math.random()*220+10)},${Math.round(Math.random()*220+10)})`
      }
      list.push(bg_object)
    }
    setTimeout(() => {
      resolve(list)
      loadingStore.notLoading = false
    }, Math.round(Math.random()*0+5000))
    })
}

export default getList


