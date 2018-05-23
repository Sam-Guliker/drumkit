## Opdracht 3 - Progressive Enhanced Browser Technologies
![example](images/example.gif)


# Table of Content
- [Getting started](#getting-started)
- [Features](#features)
- [Core functionality](#core-functionality)
- [Enhancement](#enhancement)
- [Feature detection](#feature-dectection)
- [ES6 to ES5](#es6-to-es5)
- [Feature Support](#feature-support)
- [Browser Support]()
- [Device Lab]()
- [Recources]()

# Core functionality
The core functionality of my page will be to play on the drumkit.

# Enhancement
With the enhancement you can record, playback and download the audio file that you've created!:sunglasses:

# Feature detection
I've checked on the audio web api.
`if` the browser does support the AudioContext adn the navigator you can use the enhancment.
```Javascript
  if (AudioContext && navigator.mediaDevices.getuserMedia in window) {
    audioCheck()
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
# Feature support

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

# Recources
http://codeartists.com/post/36746402258/how-to-record-audio-in-chrome-with-native-html5

