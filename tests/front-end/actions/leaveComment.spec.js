import {
    assert
} from 'chai'

import {
    REQUEST_LEAVE_COMMENT,
    FAIL_TO_LEAVE_COMMENT,
    SUCCESS_LEAVE_COMMENT,
    requestLeaveComment,
    failToLeaveComment,
    successLeaveComment
} from 'actions/leaveComment.js'


describe('Actions/ Leave comments', () => {

    it('should create request leave comment action', () => {
        const expected = {
            type: REQUEST_LEAVE_COMMENT
        }
        const actual = requestLeaveComment()
        assert.deepEqual(expected, actual)
    })

    it('should create fail to leave comment action', () => {
        const errors = {
            message: 'something wrong'
        }
        const expected = {
            type: FAIL_TO_LEAVE_COMMENT,
            errors
        }
        const actual = failToLeaveComment(errors)
        assert.deepEqual(expected, actual)

    })

    it('should create success leave comment action', () => {
        const notifications = {
            message: 'done'
        }

        const expected = {
            type: SUCCESS_LEAVE_COMMENT,
            notifications
        }

        const actual = successLeaveComment(notifications)
        assert.deepEqual(expected, actual)

    })
})