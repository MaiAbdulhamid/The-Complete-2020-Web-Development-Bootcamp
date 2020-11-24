# The-Complete-2020-Web-Development-Bootcamp


## Section 1: Front-End Web Development

### 1.1. How Does the Internet Actually Work?
-	**Internet** is a long piece of wire, And the wire connect different computers to each other. It allows computers to transfer data through this giant wire
-	A server is a computer that provides files and data to other computers, it allows access 24/7.
-	A client is a computer that any user is used to access the internet.
-	When browser request a website, the request sent to **ISP** (Internet server provider: The company we pay for internet service) then it search at DNS that contains websites IP addresses. Once the DNS finds the IP address it sends it back to the browser vis ISP. Then the browser sends a direct request through ISP and this message will be delivered via Internet Backbone to the server that is located that IP address. On that server there is all files that needed to view the website home page. The server sends this files back to the client through the internet backbone and client get to see website in the browser. All of that happens in milliseconds.

### 1.2. How Do Websites Actually Work?
-	To access web page we need browser (allows to look up ip address and recives data from server).
-	Data from server contains html, css, and js files.

### 1.3. To get started
-	Need Browser (chrome recommended)
-	Text Edittor(Atom, vs code)

## Section 2: Introduction to HTML

### 2.1. Introduction HTML
-	HTML :  Hyper Text Markup Language.
-	A markup language is a computer language that uses tags to define elements within a document.
-	html is the foundation of all websites.
-	Tag consist of:  open tag <typeOfTag > and closing tag <typeOfTag />.
-	Ex: Heading tag h1, h2, ….,h6 . It gets smaller when the number goes up.
-	<typeOfTag /> called self-closing tag.
-	Ex: Spacing breack tag <br />.
  
### 2.2. The Anatomy of an HTML Tag
-	< startTag > Content </ EndTag >
-	Horizontal line tag hr accepts attribute size, noshade,..
-	Attributes specify modification to the default element.
-	Center content using tag  < center >content</ center >.
-	Comments  are not interpreted by the compiler < !-- Comment -- >.
  
### 2.3. What is The HTML Boilerplate?
-	It Is a code template that could be reuse.
  
```
<!doctype html>

<html lang="en">
<head>
<meta charset="utf-8"> //tell the browser that all text in page are encoded using utf-8 encoding system wich is the standered encoding.

<title>The HTML5 Herald</title>
<meta name="description" content="The HTML5 Herald">
<meta name="author" content="SitePoint">

<link rel="stylesheet" href="css/styles.css?v=1.0">

</head>
	
<body>
<script src="js/scripts.js"></script>
</body>
</html>
```
-	meta tag utf-8 tell the browser that all text in the page are encoded using utf-8 encoding system wich is the standered encoding.
-	Unicode “utf-8” has all characters and emojis.
-	There is a different types of meta tags for diffrent purposes.

### 2.4. How to Structure Text in HTML?
-	The code goes inside the body tag.
-	Paragraph tag p.
-	emphasis Tag em tells the browser that the words between it is emphasis, not just about style.
-	italic tag i style element.
-	Stong tag strong tells the browser that the words between it is Strong Importance Element.
-	Bold tag bold styles bold.

### 2.5. HTML Lists
-	There are two types of lists.
-	Ordered lists ol and unordered lists ul.
-	Each type has children li for each item of the list.
-	Ol list has attributes: start and type to control the list items.

### 2.6. HTML Image Elements
-	Self-closing tag that must be with src attribute to the image url.
-	alt attr helps google searching.

### 2.7. HTML Links and Anchor Tags
-	HTML :  HyperText Markup Language.
-	HyperText is some parts of data that connect with hyper links, so when you click on it takes to another part.
-	Anchor tags is closing tag <a> Link text </a>.
-	href attr is the link destination.

## Section 3: Intermediate HTML

### 3.1. HTML Tables
-	Tables main tag is table, and everything between is the actual content.
-	To make row use tag tr.
-	To make cell inside the row use td.

```
<table>
    <thead>
        <tr>
            <th colspan="2">The table header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>The table body</td>
            <td>with two columns</td>
        </tr>
    </tbody>
</table>
```

### 3.2. HTML forms
-	main form tag is form to define what should go into our form.
-	Label tag to some text related to the input element.
-	To use different inputs simply change the type of the input to what is needed.
-	Textarea tag to write message.
-	To submit form button use input with type=”submit”

### 3.3. publish website
-	use github to publish free.
-	Make new repository.
-	Initialize with readme file.
-	Upload project files
-	Give version a name and commit.
-	Go to settings -> github pages -> sourse
-	Change source from none to main branch.
-	Now website can be accessed by internet.

## Section 4: Introduction to CSS

### 4.1. Introduction to css
-	CSS: cascading style sheet.
-	Styling html.

### 4.2. Inline css
-	Going into the tag and change style attribute = “property:value;”.

### 4.3. Internal css
-	Add style tag inside the head tag.
-	Select element inside style tag.
-	Make styles -> selector {Property : value} .

```
<head>
<style>
body {
  background-color: linen;
}

</style>
</head>
```
-	No website is completely unstyled. That means that there is default styles being applied by the browser.
-	hr tag has border style default values.
-	One of the most important role in css is realize that everything in html is box, and the style of these boxes can be affected by changing css styles.
-	Height property isn’t uniqe.
-	Background-color , height, width properties.
-	Change default values to achieve the style needed.

### 4.4. External css
-	Add styles in external file.css.
-	Link this file to html page at head tag.
-	Anything in html is affected with this external css.
-	This the best way to apply css.

### 4.5. Debug css code
-	Errors in console for link href for external file.
-	Inline styles overrides the external and internal styles.
-	Internal styles overrides the external styles.

### 4.6. The Anatomy of css syntax

```
selector {
  propery: value;
}
//who { what: how; }
```

### 4.7. CSS selectors
-	Using tag name.

```
tagName {
  propery: value;
}
```

-	Using class attribute to specify styles for individual html element .

```
.class{
  propery: value;
}
```

-	[Selectors refrence](https://www.w3schools.com/cssref/css_selectors.asp).

### 4.8. CSS Ids
-	Using id attribute.	
-	We can only have one instance of one particular tag id inside a single page.
-	Id can only use in one place.
-	Id use to identify one element.

```
#id {
  propery: value;
}
```

-	Class can be used for a group of related items.
-	Id used to apply specific styles to a single element.
-	Any html can have more than one class.
-	A pseudo-class is used to define a special state of an element

```
selector:pseudo-class {
  property: value;
}
```
-	 [Css pseudo classes](https://www.w3schools.com/css/css_pseudo_classes.asp).


## Section 5: Intermediate CSS

### 5.1. What are favicons
-	It started as an image that appears when the user adds the site to the favorites list, and now it is an image that appears next to the title of the site page.
-	Favicon.com to create the favicon.
-	Import it using link tag with rel=”icon” inside head tag.
### 5.2. HTML Divs
-	Div is special html element that’s allows us to divide content into separate containers or boxs.
-	It have a height if specify it using style or if it have a content.
### 5.3. Box Model
-	Width and height of element are pushing any other element.
-	Border-width make outside border and affect the size of that element.
-	Padding make spaces inside the element and affect the size of that element.
-	Margin makes space around elements and pushing them away.
-	Inspect in chrome developer tools show box model to customize element.
### 5.4. CSS display property
-	block elemnts takes the whole width of the document.
-	it doesn't allow another element to set at the same line.
-	inline elements takes the width of the content only.
-	it doesn't allow to change the element width.
-	there is inline-block value, that allows to change width and set elements at the same line.
-	img element treats as inline-block.
-	none value removes the element from the web page as it didn't exist.
-	visibility: hidden -> disappear the element but still exist at the dom.
### 5.5. CSS Static and Relative Positioning
-	there is default roles despite any css styles.
	-	first role : content is everything -> content is the first thing that determined how large things get displayed and what the height and width will be.
	-	second role : the order of elements that comes from html code -> how we write code into html file is how it be displayed.
	-	third role : children sit on parents -> that means that child goes on top of the parent(static position).
-	To make changes into the order of elements use position property.
-	static position is the default position of all html elements.
-	relative position it allows us to position element that we select relative to how it would be positioned had it been static.
-	coordinates: top, bottom, left, right -> determines we want to move element.
-	when move element with relative position it doesn't affect any other thing in the screen.
-	it as if the old position is kept and everything else flows around it.
-	top with relative make margin top from the static position.

### 5.6. Absolute Positioning
-	with absolute positioning we positioning the element relative to it's parent	.
-	it is about adding a margin relative to it's parent element.
-	fixed position -> fixs element in it's position relative to the body of the website and it doesn't moves despite scrolling.	.

### 5.7. The Dark Art of Centering Elements
-	text-align: center -> works with inline and block displayed elements that doesn't have width.
-	margin: auto -> works with elements that have width.

### 5.8. Font Styling in Our Personal Site
-	font-family: sans, sans-serif -> main fonts.
-	google fonts to specific font. Link the fonts to html and use it with font-family property.

### 5.9. CSS sizing
-	font-size: px -> static size.
-	% to make size dynamic.
-	100% == 16px
-	1 em == 16px
-	with % and em font size get inhereted from parent and added to the child.
-	The difference between px and % or em that px doesn't inherte from parent.
-	rem = ignore the parent size(root element), that mean parent size won't affect on the child.
-	to change font color use color propery.
-	font-weight.
-	line-height: number -> number without measuring unit.
### 5.10. CSS float and clear
-	float element left or right.
-	float make other elements at the same row.
- 	other elements use clear property to clear float Effect.
-	clear value is anti the float value.

## Section 6: Introduction to Bootstrap

### 6.1. What is Bootstrap?
-	Bootstrap is a front-end library, It's a free open source.
-	front-end is whatever the user sees.
-	backend determine how everything is going to work.
-	Responsive means that it response to the view port.

### 6.2. Installing Bootstrap
-	copy bootstap cdn -> the simplest way.
-	cdn -> stands for content delivery network.
-	the concept is instead of hosting website in single location, you have hole bunch of points where that website can be accessed, it looks for the shortest location that website can be delivered.
-	when browser reachs cdn link it looks for the shortest root to download bootstrap files if the user doesn't download it.
-	when it dowloaded broweser cashes files and doesn't need to redownload it.

	```
	
		<!doctype html>
		<html lang="en">
		  <head>
		    <!-- Required meta tags -->
		    <meta charset="utf-8">
		    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

		    <!-- Bootstrap CSS -->
		    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

		    <title>Hello, world!</title>
		  </head>
		  <body>
		    <h1>Hello, world!</h1>

		    <!-- Optional JavaScript; choose one of the two! -->

		    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
		    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
		    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

		    <!-- Option 2: jQuery, Popper.js, and Bootstrap JS
		    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
		    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
		    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
		    -->
		  </body>
		</html>
	```
### 6.3. Web Design 101 - Wireframing
-	Wireframing -> settle all design before coding it(using sketch).
-	markup -> high fidelity representation of design. what you see is what you end up getting(using photoshop).
-	prototyppe -> animated version of website.

### 6.4. The Bootstrap Navigation Bar
-	[Documentation](https://getbootstrap.com/docs/4.5/components/navbar/)
### 6.5. Bootstrap Grid Layout System
-	[Documntaion](https://getbootstrap.com/docs/4.5/layout/grid/)
### 6.6. A Note About CSS Link Order
-	CSS code is executed from bottom to top so the order of your code matters
-	Unlike CSS and JavaScript, HTML code is executed from top to bottom so the order of your code matters.
### 6.7. Bootstrap Containers
-	all content goes inside container.
-	container-fluid -> takes 100% width of the screen.
### 6.8. Bootstrap Buttons & Font Awesome
-	[Buttons Documentation](https://getbootstrap.com/docs/4.5/components/buttons/).
-	link fontAwesome library to our website.
-	[fontAwesome](https://fontawesome.com/).

## Section 7: Intermediate Bootstrap

### 7.1. The Bootstrap Carousel
-	slideshow.
-	set carousel options by adding data-option="value".
-	[Documentation](https://getbootstrap.com/docs/4.5/components/carousel/).
-	aria-hidden="true" -> to be hidden from screen reader.
-	class="sr-only" -> to screen reader only.
### 7.2. The Bootstrap Cards
-	[Documentation](https://getbootstrap.com/docs/4.5/components/card/).
### 7.3. The CSS Z-Index and Stacking Order
-	Each element has x, y and z aixs.
-	the default z-index for all elements is 0.
-	-1 -> shows the element behind everything.
-	z-index only work when element has position fixed, absolute and relative.
-	static position doesn't make z-index work.

### 7.4. Media Query Breakpoints
-	Make website responsive by media query.
-	@media < type > ( feature )
-	there is many types of media like print, speach, screen.
### 7.5. How to become a Better Programmer
-	Code Refactoring:
	- Readablity -> easy to understand not just for urself but to your future self, and for others.
	- Modularity -> how easy to use bets of code.
	- Efficiency -> how fast does your code run.
	- length.
### 7.6. Advanced CSS - Combining Selectors
-	selector1, selector2 { sharedProperty }
-	Hierarchical Selectors -> selector1(parent) selector2(child){propertyAppiedToChild}
-	Combined Selectors -> selector1.selctor2{ProprtyToTheSameElement}
### 7.7. Advanced CSS - Selector Priority
-	the last css role has priorety over everything above it.
-	class is more specific than html selector, So it has high priorty.
-	id has the highest priorty than class and html.
## Section 8: Web Design School - Create a Website that People Love
### 8.1. Introduction to web Design
-	Users take milliseconds to judge the product through it's design.
-	Design is the cheapest way to make product look expensive.
### 8.2. principles of design - 1. Color Theory
-	principles of design:
	- color theory -> Every main color have a mood.
		1. Red -> love, energy, intensity.
		2. Yellow -> Joy, intellect, attention
		3. Green ->	freshness, safty, growth.
		4. Blue -> stability, trust, serenity.
		5. Purble -> Royality, wealth, feminity.
-	what msg I wanna give to User?
-	colorbullet.

### 8.3. principles of design - 2. Typography
-	like colors, fonts have different moods.
-	serif family -> traditional, stable, respectable.
-	use only 2 fonts to one design.
### 8.4. principles of design - 2. User Interface
1.	hierarchy:
	- eyes look at big items first.
	- color can make eyes look at the item directly.
2.	layout :
	- different size, image, shape .
	- lenght of each line of text doesn't be too short or too long.
3. Alignment:
	- Position items on website relative to each other.
	- reduce the number of aligments
4. white space (space around elements):
	- By adding more space around the element it makes design more minimilize and more elevated.
5. Audience:
	- Think about the audience and what important for them.
	- flexibility important for design.
	
### 8.5. principles of design - 3. User Experience
1.	simplicity.
2.	Consistency:
	- but also keep the functionality.
	- make it simple to use, not make user learn how to use.
3. Reading Patterns
4. All platform design
	- Responsive is very important.
	- Not take much scroll to know what is going on in the website.
	- Not make much warning messages.
5. **Don't use Your Powers For Evil**
	- Don't make user make actions that he don't neccessarly do this.
	Ex. make btn that buy for something colored to buy more than the main buying btn.
	- Help user to do what they want to do.
### 8.6. practise
-	[Hotel page for practise](https://www.canva.com/design/DAELSe8JfD4/3vIsqI3kACNKsbFqYu-9lQ/view?utm_content=DAELSe8JfD4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1).

## Section 9: Introduction to Javascript

### 9.1. Introduction to Javascript
-	It also known [EcmaScript](https://en.wikipedia.org/wiki/ECMAScript).
-	java vs javaScript is like car vs carprt.
- 	js id interpreted programming language, java is compiled programming language.
-	It started as front-end language to make animation.
	 
### 9.2. Javascript Alerts - Adding Behaviour
-	Google chrome provide developer tool console to write line by line js code.
-	using source tap inside console tap to write multiple lines of js code.
-	source -> snippts -> new snippt (file.js);

```
	alert('Message to be alerted.');
	//keyword("")end
```
### 9.3. Data Types
-	String -> everything inside "" or ''.
-	Numbers.
-	Boolean -> true or false.
-	typeof(variable) -> tells the type of the variable.
### 9.4. Variables
-	prompt('msg') -> allows user to write input.
-	var name = value -> to define variable.
### 9.5. Naming and Naming Conventions
-	naming variables using camelCase.
-	always give meaning names to variables.
-	variables name can't be a keyword.
-	variables name can't begin with numbers but it can contain number.
-	variables name can't contain Spaces.
-	numbers, characters, _ , $ are the only simpoles that valid.
### 9.6. String Concatenation
-	concat two or more strings using + -> Str1 + str2 = srt1str2.
### 9.7. String Lengths
-	str.length -> returns the numbers of str characters.
### 9.8. Slicing and Extracting Parts of a String
-	programmers always count from 0.
-	slice(startindex, endIndex) -> Starting from StartIndex untill but not incloding endIndex and returns that new str.

```
	var tweet = prompt("Msg limited to 140 char.")
	var sliceTweet = tweet.slice(0, 140)
	alert("You tweeted: " + sliceTweet)
```
### 9.9. Changing Casing in Text
-	str.toUpperCase() -> all characters to upperCase.
-	str.toLowerCase() -> all characters to lowerCase.
```
	var name = prompt("Enter Name")
	var fLetter = name.slice(0, 1);
	var restOfLetters = name.slice(1, name.length);
	alert("Your name is: " + fLetter.toUpperCase() + restOfLetters.toLowerCase())
```
### 9.10. Basic Arithmetic and the Modulo Operator in Javascript
-	Modulo -> gives the remainer of the division (num % num).

### 9.11. Increment and Decrement
-	var x = 1 ; x = x + 1; -> Equals x++ ->Equals x += x
-	var x = xNum; var y = yNum -> x += y // adding y to x
-	+= , -=, \*=, /= all works the same.

### 9.12. Functions Part 1: Creating and Calling Functions
-	Functions -> is package reapeted code into {} and giving it a name.
-	all that blocked code will be exicuted when you call that function.
-	creating a function -> function funcName(){//package of code}
-	calling function -> funcName();.

### 9.13. Functions Part 2: Parameters and Arguments
-	functions take inputs called parameters.
-	It's variable that can be used in this function.
-	Math.floor(number) -> round down Number.

```
	function lifeInWeeks(age) {

	    //Write your code here.
	    var   leftedYears = 90 - age;
	    var   days = leftedYears * 365;
	    var   weeks = leftedYears * 52;
	    var   months = leftedYears * 12;
	    console.log("You have " + days  + " days, " + weeks + " weeks, and " + months + " months left.")

	}
	lifeInWeeks(25)

```

### 9.14. Functions Part 3: Outputs & Return
-	In order to have output from function we have to use return keyword.

## Section 10: Intermediate Javascript
### 10.1. Random Number Generation in














