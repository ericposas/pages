import Types from './Types'

export const test = { type: Types.Test, message: 'React is NOW running' }
export const resize = ()=>{
  const height = window.innerHeight
  return { type: Types.Resize, pageHeight: height-20 }
}
