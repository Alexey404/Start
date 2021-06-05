import { Status } from '../Redux/chat-reduser'

type subcriberType = ((messages: ChatMessege[]) => void) | null
type StatusChanged = (status: Status) => void

type EventsName = 'messeges-received' | 'status-changed'

export type ChatMessege = {
  messeage: string
  photo: string
  userId: number
  userName: string
}
const cubcribers = {
  'messeges-received': [] as subcriberType[],
  'status-changed': [] as StatusChanged[],
}

let Ws: WebSocket | null = null

const onMessegHandler = (e: MessageEvent) => {
  const newMessages = JSON.parse(e.data)
  console.log(cubcribers['status-changed'])
  //@ts-ignore
  cubcribers['messeges-received'].forEach(s => s(newMessages))
}

const openHandler = () => {
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
  Ws?.close()
}

const createChennel = () => {
  cleanUp()
  Ws = new WebSocket(
    'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
  )
  Ws.addEventListener('open', openHandler)
  notifySubscribersAboutStatus('pending')
  Ws.addEventListener('close', closeHendler)
  Ws.addEventListener('message', onMessegHandler)

  Ws.addEventListener('error', errorHandler)
}

export const chatAPI = {
  start() {
    createChennel()
  },
  stop() {
    cubcribers['messeges-received'] = []
    cubcribers['status-changed'] = []
    cleanUp()
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
