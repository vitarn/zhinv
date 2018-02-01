import { Request, Event } from './request'
import { Response } from './response'

export default handler => (event: Event, context, callback) => {
    // const request = new Request(event, context)
    // const response = new Respnose(callback)
    // handler(request, response)

    throw 
}

export * from './request'
export * from './response'


