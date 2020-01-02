const express = require('express');
const expect = require('chai').expect;
const path = require('path');
const Nightmare = require('nightmare');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

describe('End to End', function() {
  this.timeout('30s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare()
  })

  describe('Load a Page', () => {
    it('should load / (Home Page) without error', done => {
      nightmare.goto('http://localhost:3000')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })

    it('should load /contact (Contact Page) without error', done => {
      nightmare.goto('http://localhost:3000/contacts')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })

  describe('Links', () => {
    it('should have a proper linkedin link', done => {
      nightmare
        .goto('http://localhost:3000')
        .evaluate(() => document.querySelector('.linkedin').href)
        .then((link) => {
          expect(link).to.equal('https://www.linkedin.com/in/jinkim-tech/')
          done()
        })
    })

    it('should have a proper linkedin link', done => {
      nightmare
        .goto('http://localhost:3000')
        .evaluate(() => document.querySelector('.linkedin').href)
        .then((link) => {
          expect(link).to.equal('https://www.linkedin.com/in/jinkim-tech/')
          done()
        })
    })
  })
})
