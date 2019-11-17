import { Request, Response, Router, Express } from 'express'
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes'
import { UserDao } from '../daos'
import { ParamsDictionary } from 'express-serve-static-core'
import { Cup } from '../entities'
import { CupDao } from '../daos/CupDao'

// Init shared
const router = Router()

export const placeholder: Cup[] = [{
    name: 'UCL',
    year: '2003-2004'
}]

router.get('/:id/', async (req, res) => {
    try {
        const { id } = req.params as ParamsDictionary

        const result = await CupDao.get(Number(id))

        return res.status(OK).json(result)
    } catch (err) {
        // logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        })
    }
})

router.get('/:id/:season', (req, res) => {
    try {
        const { id, season } = req.params as ParamsDictionary

        return res.status(OK).json(placeholder)
    } catch (err) {
        // logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        })
    }
})

export default router
