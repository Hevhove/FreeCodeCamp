## Random Quote Generator
As part of my React/NextJS/Tailwind learning curve, I have created this simple random quote generator app. I know it ain't much, but getting to know all these different frameworks and how they work together was quite a challenge. Gone are the days of C/C++ implementing a server from scratch.

## Demo
![Demo](extras/random_quote_generator.gif)

## Features
- Random quote fetched from Quotable API
- Get New Quote button, which launches a GET request from the client for a new quote. Has a nice typewriter effect.
- Random background from a selection in public/images, with smooth transition
- Twitter Share button allows visitors to tweet out the generated quote

## Implementation
The project is built with `npx create-next-app` with typescript, and uses some tailwind for the styling. The components include:
- Layout: wraps around the Head and Main elements for consistent styling
- ShareButton: grabs the twitter logo from FontAwesome and provides a link to tweet
- Quote: fetches a quote from Quotable, has a typewriter effect. Holds both the quote and its author
- Signature: My personal stamp on this project
