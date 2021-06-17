import { Status } from '../Redux/chat-reduser'

type subcriberType = ((messages: ChatMessege[]) => void) | null
type StatusChanged = (status: Status) => void

type EventsName = 'messeges-received' | 'status-changed' | 'messeges-clear'

export type ChatMessege = {
  messeage: string
  photo: string
  userId: number
  userName: string
}
const cubcribers = {
  'messeges-received': [] as subcriberType[],
  'messeges-clear': [] as StatusChanged[],
  'status-changed': [] as StatusChanged[],
}

let Ws: WebSocket | null = null

const onMessegHandler = (e: MessageEvent) => {
  const newMessages = JSON.parse(e.data)
  //@ts-ignore
  cubcribers['messeges-received'].forEach(s => s(newMessages))
}
const offMessegHandler = () => {
  cubcribers['messeges-received'] = []
  cubcribers['status-changed'] = []
  cubcribers['messeges-clear']=[]
}

const openHandler = () => {
  cubcribers['messeges-clear'].forEach(s => s('ready'))
  notifySubscribersAboutStatus('ready')
}

const errorHandler = () => {
  notifySubscribersAboutStatus('error')
  console.log('ERROR')
}

const notifySubscribersAboutStatus = (status: Status) => {
  cubcribers['status-changed'].forEach(s => s(status))
}

const closeHendler = () => {
  notifySubscribersAboutStatus('pending')
  setTimeout(createChennel, 3000)
}

const cleanUp = () => {
  Ws?.removeEventListener('close', closeHendler)
  Ws?.removeEventListener('message', onMessegHandler)
  Ws?.removeEventListener('open', openHandler)
  Ws?.removeEventListener('error', errorHandler)
}

const createChennel = () => {
  Ws?.close()
  cleanUp()
  Ws = new WebSocket(
    'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
  )
  notifySubscribersAboutStatus('pending')
  Ws.addEventListener('open', openHandler)
  Ws.addEventListener('close', closeHendler)
  Ws.addEventListener('message', onMessegHandler)
  Ws.addEventListener('error', errorHandler)
}

export const chatAPI = {
  start() {
    createChennel()
  },
  stop() {
    offMessegHandler()
    cleanUp()
    Ws?.close()
  },
  subscribe(eventName: EventsName, callback: subcriberType | StatusChanged) {
    //@ts-ignore
    cubcribers[eventName].push(callback)
    return () => {
      //@ts-ignore
      cubcribers[eventName] = cubcribers[eventName].filter(s => s !== callback)
    }
  },
  unsubscribe(eventName: EventsName, callback: subcriberType | StatusChanged) {
    //@ts-ignore
    cubcribers[eventName] = cubcribers[eventName].filter(s => s !== callback)
  },
  sendMessage(messeage: string) {
    Ws?.send(messeage)
  },
}
