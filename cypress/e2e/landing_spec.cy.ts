import {newsData} from '../../src/data/data'
describe('landing page', () => {
  it('should display articles for all categories', () => {
    
    cy.intercept('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=d43f21f8b76645669883364fbc811a23`, {
      status: 200,
      body: newsData
    })

    cy.intercept('GET', `https://newsapi.org/v2/top-headlines?country=us?category=technology&apiKey=d43f21f8b76645669883364fbc811a23`, {
      status: 200,
      body: newsData
    })

    cy.intercept('GET', `https://newsapi.org/v2/top-headlines?country=us?category=health&apiKey=d43f21f8b76645669883364fbc811a23`, {
      status: 200,
      body: newsData
    })

    cy.intercept('GET', `https://newsapi.org/v2/top-headlines?country=us?category=sports&apiKey=d43f21f8b76645669883364fbc811a23`, {
      status: 200,
      body: newsData
    })

    cy.visit('http://localhost:3000/')
  })
})