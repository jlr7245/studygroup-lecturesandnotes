# The CSS Position Property

### Objectives: 
- Understand how the position property affects how an element is placed on the page. 
- Apply position property in a variety of use cases with respect to media queries and screen size.

## Lecture Notes

When I was planning this lecture, I was talking with some friends about what they thought the most difficult part of CSS to really understand was. I got a variety of different responses, but there was one that really stuck out to me. One of my friends said, "Position and display, those property are definitely cursed." Cursed??? Well, okay, we'll see. I hope not.

### High-level overview: The position property controls how an element is placed with respect to the browser viewport and/or its parent element.

1. Static!

Let's open the `index.html` file in the lecture notes in the browser and add this to `style.css`:

```css
.first {
  background-color: #E54B4B;
}
```

Cool! A red box. Seems normal. Let's try to move it.

```css
.first {
  left: 100px;
  top: 100px;
  background-color: #E54B4B;
}
```

Nothing happens! This is because the default setting for the position property is `static`. As you might expect, `static` indicates that the element doesn't really care where you tell it to go, it's just going to stay where its neighbors or the document tells it to.

2. Relative!

So, now in the `.first` class, let's add **A POSITION PROPERTY VALUE!** Like so:

```css
.first {
  background-color: #E54B4B;
  left: 100px;
  top: 100px;
  position: relative;
}
```

The box moves! Great.


### This should be about the ten minute mark. Here's a brief overview.

- Add the other position values to `first` div
- Hide the first div
- Unhide the box-container
- Two static divs! Let's make one of them absolute
- This is what we expected
- Add relative property to box-container
- Woah! Did we expect this? What's going on?
- Go over how relative and absolute positioning work together
- Unhide the enormous text div
- Change position of first div to fixed
- Woah! It stays in the same place.
- How is this different from absolute?
- Talk a little bit about how this is handy for mobile, and lets you reuse elements like menus and so on
- Use case one: modal
- Use case two: navigation
- "The position property controls how an element is placed with respect to its parent element and/or the browser viewport." Does that make more sense now? I spent a lot of time working on what this definition might say. Does anyone have any suggestions on how to make it better? How do you understand the position property?

### Possible tangents:

- Z-index





```css
.second {
  left: 100px;
  top: 100px;
  position: absolute;
  background-color: #167C80;
}

.third {
  background-color: #FBCBC1;
}
```