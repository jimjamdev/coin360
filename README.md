## Thoughts

![wtf](https://c.tenor.com/Yy8d1d0oUAEAAAAC/wtf.gif)

So, I went a different path here to what i usually do. Normally i'd create a component around a third party library. Something like react-virtualized, react-paginate.

No third party libraries, no lodash etc. Just having some fun to see what I can come up with in a very short time.

# Process
- Go from the top of my head from when I done this last in a class component. Realised that sucked.
- Looked at IntersectionObserver. Great for simple lists, not so great for dealing with horizontal scroll
- Went back to scroll detection, and just load new data as you scroll down or right.
- This messes with the reloading of data.
- It's a fail. But hopefully you see a little bit of my thought process.
- Also, on your design you have a double BTC row. I don't know what the idea of this was. I can get the first row and inject, but i made the top bar scrollable to no need.

# Time taken
- About 14 hours between my normal trading hours (help me, you can pay me in BTC)!

# What I do differently

- Have longer to spend on it, or just wrap a third party lib.
- Spend longer with the css. I'm very proficient in scss and css-in-js

# ToDo
- Make eslint/beautify work properly in nextjs with ts.
- Make nice imports @components, @lib
- A unit test
- Slap myself