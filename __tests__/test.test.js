
test("truthy operators", () => {
    var name="Software testing help"
    var n = null
    expect(n).toBeNull()
    expect(name).not.toBeNull
  
    // name has a valid value
    expect(name).toBeTruthy()
    
    // pass - null treated as false or negative
    expect(n).toBeFalsy()
  
    // 0 - treated as false
    expect(0).toBeFalsy()
  })