import Types from './Types'

export const test = { type: Types.Test, message: 'React is NOW running' }

export const resize = ()=>{
  const height = window.innerHeight
  return { type: Types.Resize, pageHeight: height - 300 }
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

export const showAddPageModal = { type: Types.ShowPageModal }

export const hideAddPageModal = { type: Types.HidePageModal }

export const addPage = value=>{
  return { type: Types.AddPage, value: value }
}

export const hidePageUIButtons = { type: Types.HidePageUIButtons, pageUIVisible: null }

export const showPageUIButtons = { type: Types.ShowPageUIButtons, pageUIVisible: 1 }
