 Reflection

 
When I first started using Cypress, the basics clicked pretty fast. Commands like .click() just feel like you're actually using the site, not writing a script. And since there's not a ton of setup or syntax to memorize, I got comfortable pretty quickly. I also liked how describe() and it() blocks keep everything organized, it basically looks like the test cases I used to write out by hand.

The hardest part for me was figuring out how Cypress actually runs commands behind the scenes. I kept assuming they execute right when I write them, but they don't, they get queued up in this internal pipeline. I also struggled with cy.intercept() and keeping my tests in sync with API calls. Sometimes my script would check for something on the page before the data even came back, so tests would randomly fail. I learned the hard way that putting cy.wait() everywhere isn't the answer. I had to get comfortable with retry-ability and actually listening for the right events.

The next thing i would like to learn about cypress is mastering mocking and API testing.
