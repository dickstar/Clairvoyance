import {
    assert
} from 'chai'

import {
    REQUEST_LOGIN,
    FAIL_TO_LOGIN,
    SUCCESS_LOGIN,
    requestLogin,
    failToLogin,
    successLogin
} from 'actions/login.js'


describe('Actions/ Login', () => {

    it('should create request login action', () => {
        const expected = {
            type: REQUEST_LOGIN
        }
        const actual = requestLogin()
        assert.deepEqual(expected, actual)
    })

    it('should create fail to login action', () => {
        const error = {
            message: 'something wrong'
        }
        const expected = {
            type: FAIL_TO_LOGIN,
            error
        }
        const actual = failToLogin(error)
        assert.deepEqual(expected, actual)

    })

    it('should create success login action', () => {
        const user = {
            id: 'abcd'
        }
        
        const expected = {
            type: SUCCESS_LOGIN,
            user
        }

        const actual = successLogin(user)
        assert.deepEqual(expected, actual)

    })
})