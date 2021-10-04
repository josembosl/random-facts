const sum = (a, b) => a + b

describe('sum()', () => {
  it('should return 5 if given 2 and 3 ', () => {
    expect(sum(2, 3)).toBe(5)
  })
})

describe('sum2()', () => {
    it('should return 5 if given 2 and 3 ', () => {
      expect(sum(2, 2)).toBe(4)
    })
  })