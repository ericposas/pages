import Types from './Types'

export const test = { type: Types.Test, message: 'React is NOW running' }
export const resize = ()=>{
  const height = window.innerHeight
  return { type: Types.Resize, pageHeight: height-20 }
}
export const addInput = pageName=>{
  return {
    type: Types.Input,
    pageName: pageName
  }
}
export const addTextItem = (pageName,text)=>{
  return {
    type: Types.TextItem,
    pageName: pageName,
    text: text
  }
}
