const chai = require('chai')

chai.should()

const src = require('../src')

describe('My service', function () {
  it('should pass', function () {
    const answer = src()
    answer.should.equal(42)
  })
})
