const formatFullname = require('../formatFullname');
const expect = require('chai').expect;


describe('FormatFullname', () => {
  it('should return an error if "fullName" arg length is 0', () => {
    expect(formatFullname("")).to.equal('Error');
    expect(formatFullname()).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
  });

  it('should return an error if "fullName" arg  is not a string ', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(20)).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return an error if format of "fullName" arg is not correct and doesn`t consist of firstName and lastName', () => {
    expect(formatFullname(['John'])).to.equal('Error');
    expect(formatFullname(['Doe'])).to.equal('Error');
    expect(formatFullname(['John Doe test'])).to.equal('Error');
  });
});

