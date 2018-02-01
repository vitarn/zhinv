import * as Request from './request'
import * as Respnose from './response'

export default handler => {
    return (event, context, callback) => {
        const request = new Request(event, context)
        const response = new Respnose(callback)
        handler(request, response)
    }
}
