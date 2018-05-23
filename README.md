## Opdracht 3 - Progressive Enhanced Browser Technologies
![example](images/example.gif)
## Core functionality
The core functionality of my page will be to play sounds
through the web browser.

## Enhancement
When you can run javascript you've got the power to play a drumkit.  
The drumkit allows you to make a beat however you want! :sunglasses:

## Feature detections
I've used most of the mast basic javascript to prevent the feature   
issues by browsers. I used some of the most basic JS functions that work in  
every browser no matter what version or what browser there is.

### Feature detection
Will check if the `addEventListener` is accessible in the document.  
If it isn't in the document use the attachEvent.
```Javascript
function onClickEvent(el, item){
  if (document.addEventListener) {
    el.addEventListener('keydown', item);
  } else {
    el.attachEvent('keydown', item);
  }
}
```

### ES6 to ES5
Es6 using const and arrowkeys
```Javascript
const keys = document.querySelectorAll('.key');
const audio =
document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

keys.forEach(key => key.addEventListener('transitionend',removeTransition));
keys.forEach(key => key.addEventListener('click', playSound))


```

Es5 instead of using arrow and for each functions I used for loops.  

```Javascript
var keys = document.querySelectorAll('.key');
var audio = document.querySelector("audio[data-key=" + "'" + keycode + "'" + "]");
var key = document.querySelector(".key[data-key=" + "'" + keycode + "'"+ "]");

for (var x = 0; x < keys.length; x++) {
  keys[x].addEventListener('transitionend', removeTransition)
}

for (var i = 0; i < keys.length; i++){
  keys[i].addEventListener('click', playSound)
}



```
## Feature support

### Audio Element
The audio element is a strong element to use, it got great support.

![audioelement](images/audioelement.png)

### ES5
I've written all my code in ES5 so the browsers that can be supported will get the good ol' javascript :wink:.

#### Support

![es5](images/es5.png)

### DOM Manipulation.
To make sure I was using the most supported code for javascript I'm using code like `getElementsByTagName`.

#### Support

![dom](images/dom.png)


## Accessibility
The user can use the tabs to navigate if he or she has to.
When the javascript works there is no reason to use tabs, you
can enjoy the enhancement! :smile:

## Colour and contrast
Chrome also has its own contrast checker.  
I first used `F16562` as an highlight colour, but I found out  
that it doesn't have enough contrast with my background.
I used `#FF726F` instead.

![color contrast](images/colorcontrast.png)
