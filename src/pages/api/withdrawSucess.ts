import { zebedeeEventEmitter } from 'utils/zebedeeUtil'
import { NextApiRequest, NextApiResponse } from 'next'
import { runMiddleware } from 'utils/util'

type Response = {}

export default async (req: NextApiRequest, res: NextApiResponse<Response>) => {
    // Run the middleware
    await runMiddleware(req, res)

    zebedeeEventEmitter.emit('withdrawSucess')
    // Rest of the API logic
    res.end(JSON.stringify({ message: 'withdrawSucess' }))
}
