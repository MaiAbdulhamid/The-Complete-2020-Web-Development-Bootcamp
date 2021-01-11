# The-Complete-2020-Web-Development-Bootcamp

-	[Course resourses](https://www.appbrewery.co/p/web-development-course-resources/).
<details>
## Section 1:
  <summary>
	   Front-End Web Development
  </summary>
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
</details>

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
-	Modulo checkes if a number is fully divisible by another number.

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
-	Math.random() -> generates random number between 0  and 0.999999999999 it never reachs 1.
-	[Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random).
-	Math.random() * num -> range of numbers is from 0 to less than (not including) num.
-	Pseudorandom number generators](https://www.youtube.com/watch?v=GtOt7EBNEwQ).
-	Math.floor(Math.random() * n) +1 -> generates Number between 1 to n.

### 10.2. Control Statements: Using If-Else Conditionals & Logic
-	control flow -> controling the flow of code depends on condition.
### 10.3. Comparators and Equality
-	Comparators -> compare two different values.
-	===, ==, <, >, <=, >=, !==, !=.
-	The important difference between === and == is even though === check for equality also checking the type of data type.

### 10.4. Combining Comparators
-	AND &&, OR ||, NOT !.

### 10.5. Coding Exercise 5: BMI Calculator

```
function bmiCalculator (weight, height) {

    var interpretation = weight / (height *2);

    if (interpretation < 18.5)

    {

        return "Your BMI is " + interpretation + ", so you are underweight.";

    }

    else if (interpretation >= 18.5 && interpretation <= 24.9)

    {

        return "Your BMI is " + interpretation + ", so you have a normal weight.";

    }

    else {

        return "Your BMI is " + interpretation + ", so you are overweight.";

    }

    return interpretation;

}
```

### 10.6. Coding Exercise 6: Leap Year Challenge

```
function isLeap(year) {   

    if (year % 4 === 0 ) {
        if(year % 100 === 0){
            if(year % 400 === 0){
                return "Leap year."
            }else{
                return "Not leap year."
            }
        }else{
            return "Leap year."
        }
        
    } else {
        return "Not leap year."
    }

}
```

### 10.7. Collections: Working with Javascript
-	Arrays -> is a collection of related items that can be stored together into the same variable.
-	var arr = [item1, item2, item3, ....].
-	arr[0] -> returns the fisrt index.
-	arr.length -> the number of array items.
-	arr.includes(item) -> check if this item is exist, it returns true or false.

### 10.8. Adding Elements and Intermediate
-	arr.push(value) -> Adding new item at the end of the array.
-	arr.pop() -> Remove the last item of the array.
-	fizzBuzz Game :
```
var result = [];
var count = 1;
function fizzBazz(){
	while(count <= 100 ){ //while loop
		if (count % 3 === 0 && count % 5 ===0){
			result.push("fizzBuzz")
		}else if(count % 3 === 0){
			result.push("fizz")
		}else if (count % 5 === 0){
			result.push("buzz")
		}else{
			result.push(count)
		}
		count++;
	}
	console.log(result);
}
```
-	The order of if statements is matter.

### 10.9. Coding Exercise 7: Who's Buying Lunch?
```
function whosPaying(names) {
 
    var arrayLength = names.length;
    
    var randomIndex = Math.floor(Math.random() * arrayLength);
    
    return names[randomIndex] + " is going to buy lunch today!";
  
}
```

### 10.10. Control Statements: While Loops
-	To make sequance of data.
-	while(end){//Sequance something ; change}
-	satete -> if something is true.
-	The bad thing about while loop is that it will run the program as long the condition is true, So it might be infinte loop.
```
	//Bottels Challenge solution
	var numberOfBottles = 99
	while (numberOfBottles >= 0) {
	    var bottleWord = "bottle";
	    if (numberOfBottles === 1) {
		bottleWord = "bottles";
	    } 
	    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
	    console.log(numberOfBottles + " " + bottleWord + " of beer,");
	    console.log("Take one down, pass it around,");
		numberOfBottles--;
	    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}
```
### 10.11. Control Statements: For Loops
-	for(start; end; change){//Sequance something}.
-	iterate -> run a piece of code many times.
-	Fibonacci Callenge
```
function fibonacciGenerator (n) {
        var output = [];
	if(n === 1){
		output = [0];
	}else if (n=== 2){
		output = [0, 1];
	}else{
		output = [0, 1];
		for(var i = 2; i< n; i++){
			output.push(output[output.length -2] + output[output.length - 1]);
		}
	}
	return output;
}
```
-	[Challenge flowchart](https://drive.google.com/file/d/1g8vVtqhSj44vcElfc-HK0nMbecteW8Yg/view).

## Section 11: The Document Object

### 11.1. Adding Javascript to Websites
-	Inline js -> By adding attributes to html elements, EX. onload="jsCode".(Not a good practice).
-	Enternal -> By adding script type="text/javascript" tag to page and write js code inside it.
-	External file -> script tag with src to the external js file.
-	js scripts tag goes at the bottom of code unlike css links.

### 11.2. Object Model (DOM)
-	DOM -> Document Object Model.
-	it turns the document into a tree of objects that can be related to each others.
-	[HTML tree Generator Extention](https://chrome.google.com/webstore/detail/html-tree-generator/dlbbmhhaadfnbbdnjalilhdakfmiffeg).
-	Each child enhirets a document object.
-	[firstElementChild](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/firstElementChild).
-	[lastElementChild](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/lastElementChild).
-	Objects inside the DOM has properties(describes thomething about object) and methods(the things that object can do).
-	Metod -> is associated to an object.

### 11.3. Selecting HTML Elements with js
-	[getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById).
-	[querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector).
-	[querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll).

### 11.4. Manipulating and Changing Styles
-	style property -> to change the css styles.
-	[Css properites in js](https://www.w3schools.com/jsref/dom_obj_style.asp).
### 11.5. The Separation of Concerns: Structure vs Style vs Behaviour
-	html file -> to strucure
-	css files -> to style
-	js file -> to behaviour
-	Adding classes using js and style that classes using css.
-	element.classList -> returns the list of classes.
-	element.classList.add("className") -> add class to element.
### 11.6. Text Manipulation and the Text Content
-	element.innerHTML -> all child html.
-	element.textContent -> the child text only without html tags.
### 11.7. Manipulating HTML Element Attributes
-	[attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes).
-	[setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute), [getAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute), [toggleAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/toggleAttribute)

## Section 12: Boss Level Challenge 1 - The Dicee Game
-	Dicee Game project.
## Section 13: Advanced Javascript and DOM Manipulation
-	Drum kit project.
### 13.1. Adding Event Listeners to a Button
-	[addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).

### 13.2. Higher Order Functions and Passing
-	 Higher Order Functions -> are functions that takes other functions as inputs or returns function as an output.

### 13.3. A Deeper Understanding of Javascript Objects
-	Constructor: A constructor is a function that initializes an object.
-	Constructor functions -> the name has to be capitalized.
```
	// Create constructor
	function Person(first, last, age, eye) {
	  this.firstName = first;
	  this.lastName = last;
	  this.age = age;
	  this.eyeColor = eye;
	}
	//create objects
	var myFather = new Person("John", "Doe", 50, "blue");
	var myMother = new Person("Sally", "Rally", 48, "green");
```

### 13.4. How to Use Switch Statements in js
-	switch takes code into different track depending on differnt value.
### 13.5. Objects, their Methods and the Dot Notaion
-	Method is a function that associated with an object.
-	calling methods and ptoperty -> with dot notation.
```
      var crash = new Audio("./sounds/crash.mp3") //Create object from Audio constructor
      crash.play() // Use play function from the Audio constructor
```
### 13.6. Using Keyboard Event Listeners to Check for Key Presses
-	using eventListner keydown.
### 13.7. Understanding Callbacks and How to Respond to Events
-	Callback function -> is a function that gets passed in as an input.
-	It has to wait something to happens.
-	It triggers the actual event that happens.
### 13.8. Adding Animation to Websites
-	Adding class to clicked btn and setTimeout to remove the class

## Section 14: jQuery

### 14.1. What is jQuery?
-	jQuery is javascript library that someone wrote it to simplify js code and make it easy to use.
### 14.2. How to Incorporate jQuery into websites
-	Download jquery file or use cdn link.
-	include scripts at the end of website or add the code inside ready function to avoid loading js file before loading jquery file.
```
$( document ).ready(function() {
  // Handler for .ready() called.
});
```
### 14.3. How Minification Works to Reduce File Size
-	Minify file removes spaces, comments and new lines to Reduce File Size.
-	[Minifier website](https://www.minifier.org/).

### 14.4. Selecting Elements with jQuery
-	Using $('selector').

### 14.5. Manipulating Styles with jQuery
-	$('Selector').css('cssProperty', 'value') -> To set the value.
-	$('Selector').css('cssProperty', 'value') -> To get the value.
-	$('Selector').addClass('classname1 className2'), $('Selector').removeClass('classname1 className2').
-	$('Selector').hasClass('className') -> return true or false.
### 14.6. Manipulating Text with jQuery
-	$('Selector').text('Text to be added').
-	$('Selector').html('< htmlTag />').
### 14.7. Manipulating Attributes with jQuery
-	$('Selector').attr('attName', 'value') -> To set the attr value.
-	$('Selector').attr('attName', 'value') -> To get the attr value.
-	class is also attr.
### 14.8. Adding Event Listeners with jQuery
-	$('Selector').eventName(callbackFunction) -> It triggers all element that matches Selector without having to make for loop.
-	$('Selector').on("eventName", callbackFunction).
### 14.9. Adding and Removing Elements with jQuery
-	element.before(element) -> creates element before the target element itself(before the opening tag of the selected element).
-	element.prepend(element) -> creates element before the content of target element.
-	element.after(element) -> creates element after the target element itself(after the opening tag of the selected element).
-	element.apend(element) -> creates element after the content of target element.
-	element.remove() -> Removes all selected elements.

### 14.10. Website Animations with jQuery
-	element.hide(), element.show(), element.toggle().
-	element.fadeOut(), element.fadeIn(), element.fadeToggle().
-	element.slideUp(), element.slideDown(), element.slideToggle().
-	element.animate({poperty: value}) -> we can only add css roles that a numeric value.

## Section 15: Boss Level Challenge 2 - The Simon Game
-	The Simon Game Project.

## Section 16: The Unix Command Line
### 16.1. Installing the Hyper Terminal
-	[Installing](https://git-scm.com/downloads).

### 16.2. Understanding the Command Line. Long Live the Command Line!

-	kernel -> is core of operating system, the actual program that interfaces the hardware.
-	shel -> refers to user interface, for you as a human to be able to interact with kernel and in turn with the hardware of the computer.
-	there is two variants to shell:
	-	grafical user interface shell -> finder to find and access files is an example.
	-	command line interface.
-	Bash-sell -> Bourne again shell.
-	It is a CLI or command line interpretter for the UNIX system.
-	Using cmd bash-shell is easier and faster to do a lot of common things.

-	with cmd we have full control and more flexibility.
### 16.3. Command Line Techniques and Directory Navigation
-	Open up your hyper termial.
-	ls a -> //shows all files including the hidden files.
-	ls -> stands to list , prints all folders and files in the directory.
-	~ -> the root folder.
-	cd /directory -> to navigate forwards to another directory.
-	cd ../ -> to navigate backwords outside folder.
-	when typing the first character of folder name and press tab it auto completes the name of directory.
-	cd ~ -> go to the root directory.
-	hit the up button to get the histoy of all commands.
-	ctrl + a -> go to the beginning of line, ctrl + e -> go to the end of line.
-	ctrl + u -> clear entire line.

### 16.4. Creating, Opening, and Removing Files through the Command Line
-	**Some command lines:**
	-	mkdir folderName -> //Creates a directory.
	-	cd folderName -> //change directory to the new folder created.
	-	touch fileName.extension -> //creates new file.
	-	start fileName.extension -> to open the file(open for mac).
	-	start -a Atom fileName.extension -> to open the file with Atom application for Example(use open for mac).
	-	rm fileName.extension -> removes the file.
	-	pwd -> show the current folder location (print working directory).
	-	rm * -> remove all files.
	-	rm -r folderName -> remove folder.
-	[Learn More about hyper terminal](https://www.learnenough.com/command-line-tutorial/basics).

##Section 17: Backend Web Development
### Backend Web Development Explained
-	full stack -> front-end + back-end.

## Section 18: Node.js
### 18.1. What is Node.js?
-	Allows us to create backend using javaScript.
-	one language to make frontend and backend.
-	nodejs: allows us to take js out of the browser and it librerates it allowing it to interact directely with the hardware of the computer.
-	Sowe can make full application like descktop applications like atom with node(on our computer).
-	we Can also run nodejs on server.
-	Very fast programming language.
### 18.2. Install Node.js
-	[node website](https://nodejs.org/en/).
### 18.3. The Power of the Command Line and How to Use Node
- $ pwd -> //print working directory
- $ cd -> //change directrory
- $ls -> //list of directroies and files
- $mkdir folderName -> //make directrory
- $touch fileName -> //make file
- $node file.js -> //usenode to run this file
### 18.4. The Node REPL (Read Evaluation Print Loops)
- Allows you to execute code in bite sized chunks(like console).
- By installing node we install it's REPL.
- $node -> //To run node REPL.
- crtl + c -> get out from any process.
- $ .exit -> // to exist the REPL(or twice crtl + c ).
- $ clear -> //clear commands
### 18.5. How to Use the Native Node Modules
- Libraries of code that the node team wrote.
- var creates variable.
- const -> can't change the value.
- [file system module](https://nodejs.org/api/fs.html).
- In order to use module we have first to require it.
```
const fs = require('fs');
```
- Now we can use it in our project.
```
fs.copyFileSync('source.txt', 'destination.txt'); //copy source file into destination
```
- [Native moduls and the documentation of how to use it](https://nodejs.org/api/).
### 18.6. The NPM Package Manager and Installing External Node Modules
- NPM -> Node Package Manager for External modules.
- Bits of reusable code that somebody wrote, and usine npm we can incorporate those packages into your project.
- When we install node we already install NPM.
- $npm init -y -> intailize NPM package.json file into the project.
- Example of npm package 
  - [superheroes ](https://www.npmjs.com/package/superheroes).
  - [supervillains](https://www.npmjs.com/package/supervillains).
  
## Section 19: Express.js with Node.js
### 19.1. What is Express?
- It's a Node framework.
- Built to make you write less repeatitive code.
- [Express Documentation](https://expressjs.com/).
### 19.2. Creating Our First Server with Express
- open hyper terminal and Editor.
1. Create new directory for the project $mkdir directory.
2. cd into directory $ cd directory
3. inside directrory make new file to start server from it $ touch index.js
4. initialize npm $ npm init
5. open project inside atom $ atom . .
6. install express $ npm install express.
7. require express:
```
const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log(`App listening at http://localhost:3000`)
})
```
8. run server $ node index.js
### 19.. Handling Requests and Responses: the GET Request
- app.get -> define what happens ewhen someone makes a get request to the route on the first parameter.
- req -> the request that sent to the server.
- res -> the response that server send.
```
//Send the browser some information to display
app.get('/', (req, res) => {
  res.send('Hello World!') //send text or html <h2>Hello World!</h2>
})
```
### 19.3. Nodemon Installation
- a npm package that auto start our servers.
- Once you install it, it will be available across your all projects.
- [nodemon](https://github.com/remy/nodemon).
### 19.4. Understanding and Working with Routes
- You can set up as many routes as you wish.
```
app.get('/contact', (req, res) => {
  res.send('Contact page')
})
app.get('/about', (req, res) => {
  res.send('About page')
})
```
### 19.5. Calculator Setup Challenge
- Make a new folder called Calculator on your Desktop
- Change Directory to this new folder
- Inside the Calculator folder, create a new file called calculator.js
- Set up a new NPM package
- Open the project folder in Atom 
- Using NPM install the express module
- Require express in your calculator.js
- Setup express
- Create a root route get method with app.get()
- Send the words Hello World from the root route as the response
- Spin up our server on port 3000 with app.listen
- Run server with nodemon
### 19.6. Calculator Setup: Challenge Solution
- $ mkdir Calculator
- $ cd Calculator
- $ touch calculator.js
- $ npm init
- $ atom .
- $ npm install express
``` 
Starter Code
```
- $ nodemon calculator.js
### 19.7. Responding to Requests with HTML Files
- make index.html file
```
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})

```
### 19.8. Processing Post Requests with Body Parser
- Submit button sends the data into the form into the location(route) that at action attribute.
- [List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).
- In order to recieve post data from form we need to install package body-parser and require it, then we tell our app to use it.
```
quire('express');
const bodyparser = require('body-parser')

const app = express()
app.use(bodyparser.urlencoded({extended : true}))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})

app.post('/', function(req, res){
  console.log(req.body);
})
```
- It parses the req into text, so to convert to numder use Number(req.body.num).
### 19.9. BMI Routing Challenge
1. Create a new file called bmiCalculator.html inside the Calculator folder from the last challenge 
2. Add the HTML boilerplate and set the page title to BMI Calculator
3. Add an HTML form, this form will make a post request to our server at the route /bmicalculator. The form will have 2 inputs, weight and height with placeholder text that tell the user what they should type into which text box. 
4. Add a button which says “Caculate BMI”
5. Add the get and post methods for the /bmicalculator route into the same server.js file we've been using
6. Use sendFile() to send the bmiCalculator.html page as a response inside the get method.
6. Add an h1 that says BMI Calculator
7. Inside server.js , create 2 variables, one for weight and one for height. 
8. Use the BMI calculator code you wrote previously, or write some new code to calculate and send back the result as text. It should read something like "Your BMI is n" where n is equal to the calculated BMI based on their weight and height inputs.
### 19.10. Solution to the BMI Routing Challenge
```
app.get('/bmicalculator', function(req, res){
  res.sendFile(__dirname + '/bmiCalculator.html')
})
app.post('/bmicalculator', function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height * height)

  res.send("Your BMI is "+ bmi )
})
```
## Section 20: APIs - Application Programming Interfaces
### 20.1. Why Do We Need APIs?
- Application Programming Interfaces: is a set of command, functions, protocol and objects that prorammers can use to create software or interact with external system.
### 20.2. API Endpoints, Paths and Parameters.
- Endpoint: Every API that interacts with external server has endpoint "The url of the get request".
- Path: the word after the last (/) in the endpoint url.
- Parameters: the words at the end of url after (?) in the endpoint url
  - consists of ?key=value, the first parameter after (?) and the rest of parameters sfter (&).
  - The order of parameters dosen't matter.
- [kanye API](https://kanye.rest/).
- [Joke API](https://sv443.net/jokeapi/v2/).
### 20.3. API Authentication and Postman
- Authentication: Every time you make a request through the API, they have to be able to identify you as a developer and they have to keep track how often you use this API to get data, then charge you or limit you accordingly.
- [weather API](https://openweathermap.org/api).
- sign up and sign in.
- API key and create a key.
- when we testing APIs we use [Postman](https://www.postman.com/downloads/).
### 20.4. What is JSON?
- Stands for Javascript Object Notation.
- It's not the only data that can receive data from APIs.
- [JSON vs XML](https://www.w3schools.com/js/js_json_xml.asp).
- [chrome extention JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc).
- [The Rise and Rise of JSON](https://twobithistory.org/2017/09/21/the-rise-and-rise-of-json.html).
### 20.5. Making GET Requests with the Node HTTPS Module
- [Ways To make get request](https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html).
- Use native httpRequest Module.
- Require it but you don't need to insall it.
- [HTTPS](https://nodejs.org/api/https.html#https_https_get_url_options_callback).
```
app.get('/', function(req, res){
  //url parts
  const query = 'london';
  const  apiKey = '3b712ebc109bc87b541a0abaa0f64b85';
  const unit = 'metric';
  //request from our Server to external server 'API'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${unit}`;
  https.get(url, function(response){
    console.log((response));
  })

})
```
### 20.6. How to Parse JSON
- [All response.statusCode](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).
- [statusCode for fun :)](https://httpstatusdogs.com/).
- JSON.parse(jsonData) -> convert data to Object.
- JSON.stringfy(objectData) -> convert Object to Json.
```
app.get('/', function(req, res){
  https.get(url, function(response){
    //response from external Server to our server
    response.on('data', function(data){
      console.log(data);
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description
    })
  })
})
```
- [Hex to Text](https://cryptii.com/pipes/hex-to-text).
### 20.7. Using Express to Render a Website with Live API Data
- Only one res.send() is allowed in the same request.
```
//request from client to our server
app.get('/', function(req, res){
  //request from our Server to external server 'API'
  https.get(url, function(response){
    //response from external Server to our server with data
    response.on('data', function(data){
      const icon = weatherData.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      console.log(weatherData + temp + weatherDescription + icon + iconUrl);

      //response from our server to client server
      res.write(`<p>The weather description is ${weatherDescription}</p>`)
      res.write(`<h1>The Tempereture in ${query} is ${temp} in Celcuis Degrees. </h1>`)
      res.write(`<img src="${iconUrl}" />`)
      res.send()
    })
  })
})
```
### 20.8. Using Body Parser to Parse POST Requests to the Server
- create form to send city name from input.
- recieve that input data by body-parser module.
```
app.get('/', function(req, res){
  //url parts
  const query = req.body.cityName;
})
```
### 20.9. The Mailchimp API - What You'll Make
- Make Real website on web.
### 20.10. Setting Up the Sign Up Page
- Setting new project using node and express.
- $touch file1 file2 file3-> we can write more than one file with a single space between them.
- Use bootstrap to make styles and signup.html page.
- In order to make our server serve css files and imgages folders we need function called static('ourStaticFolder').
```
const bodyParser = require('body-parser')
const app = express() //make new instance from express
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extends: true}))
app.get('/', function(req, res){
  res.sendFile(__dirname + '/signup.html')
});

app.post('/', function(req, res){

  const fName = req.body.fName;
  const lName = req.body.lName;
  const email = req.body.email;
})
```

- [Mailchimp API Reference](https://mailchimp.com/developer/api/marketing/).

### 20.11. Posting Data to Mailchimp's Servers via their API
- [Mailchimp Getting Started](https://mailchimp.com/developer/guides/marketing-api-conventions/).
- login to Mailchimp then create API key.
- [Mailchimp List Documentation](https://mailchimp.com/developer/api/marketing/lists/#post_/lists/-list_id-).
- Use list id (audiance id) to help Mailchimp to identify the list that you want to put your subscribers on it.
- To send data using https use https.request() and make it into a variable to send data from the form.
- url: 'https://<dc>.api.mailchimp.com/3.0/' -> the endpoint and path
- auth: 'anystring:<YOUR_API_KEY>' -> in https options there is auth.
```
app.post('/', function(req, res){
  const data = {
    members : [
      {
        //the value is from the form
        email_address : email,
        status: "subscribed",
        merge_fields: {
                FNAME: fName,
                LNAME: lName
        }
      }
    ]
  }
  const jsonData = JSON.stringify(data);

  const listId   = "listId"
  const url      = `https://<dc>.api.mailchimp.com/3.0/lists/${listId}`
  const options  = {
    method: 'POST',
    auth: 'anystring:<YOUR_API_KEY>'
  }
  const request = https.request(url, options, function(response){

    response.on('data', function(data){
      console.log(JSON.parse(data));
    })

  }); //data recieved from external API

  //data which is sent to an external API from the form
  request.write(jsonData)
  request.end()
});
```
### 20.12. Adding Success and Failure Pages
```
const request = https.request(url, options, function(response){

    if(response.statusCode === 200){
      res.sendFile(__dirname + '/success.html')
    }else{
      res.sendFile(__dirname + '/failure.html')
    }

  });
//Try Again
app.post('/failure', function(req, res){
  res.redirect('/')
})
```
### 20.13. Deploying Your Server with Heroku
- [Heroku](https://www.heroku.com/).
- [Heroku Node.js Documentation](https://devcenter.heroku.com/articles/getting-started-with-nodejs).
- To make app work locally and on heroku port.
```
app.listen(process.env.PORT || 3000, function(req, res){
  console.log('Running at 3000 server.');
})
```
- Create a Procfile and declare what command should be executed to start your app inside it:
```
web: node app.js
```
- Use git:
1. $ git init
2. $ git add .
3. $ git commit -m "Message"
4. $ heroku create
5. $ git push heroku master
- To update : use 1, 2, 3, 5 commands.
- [Sign up to My Newsletter (if you like) :)](https://eerie-goosebumps-55934.herokuapp.com/).

## Section 21: Git, Github and Version Control
### 21.1. Introduction to Version Control and Git
- Version Control: make you can Roll back to a previous versions of the project.
### 21.2. Version Control Using Git and the Command Line
- [Download Git for Windows and Mac](https://git-scm.com/downloads).
- $ git init
- $ git status //To see what currently in staging area.
- $ git add fileName // add file to the staging area
- $ git commit -m "Message" // Keep track of what changes you made
- $ git log // To see what commits you made
- Working directroy : is the folder where you inialize your Git.
- Staging area: intermediate area that the changes go there when typing $ git add command.
- Local directrory: changes go there after $ git commit command(.git file inside the project folder).
- $ git diff fileName // To see the difference between current file and the last versions.
- $ git checkout fileName // roll back to the last version

### 21.3. GitHub and Remote Repositories
- Make project repository on github.
- $ git remote add origin repositoryUrl
- $ git push -u origin master
- Master branch: is the main branch of commits.
- Remote directory: which host our code and host all the changes that made after $ git push command(Github Repository).
### 21.4. Gitignore
- $ git rm --cached -r . // remove all files
- [Gitignore and the absence of NPM Modules on GitHub Projects](https://github.com/contentful/the-example-app.nodejs).
### 21.. Cloning
- Is a way to pull down all of the commits and all of the versions of a particular remote repository and store the files inside your working directory.
- $ git clone repositoryUrl
### 21.5. Branching and Merging
- $ git branch branchName // Creates new branch
- $ git branch // check out what branches you have and show where you are
- $ git checkout branchName // To switch to this branch
- To merge go back to master branch: $ git branch master
- Then merge: $ git merge branchName.
- it will open vim to maje merge message(write :q! to exit vim)
- $ git push -u origin master
### 21.6. Optional Git Challenge
- [Git Challenge](https://learngitbranching.js.org/).
### 21.7. Forking and Pull Requests
- forking: make a copy of the project from remote repository
- pull: make a request to push changes into the main project remote repository.
- if the pull request is approved, changes will be merged to the main project.

## Section 22: EJS
### 22.. What We'll Make: A ToDoList
### 22.. Linter Errors with EJS
### 22.. Templates? Why Do We Need Templates?
### 22.. Creating Your First EJS Templates
### 22.. Running Code Inside the EJS Template
### 22.. Passing Data from Your Webpage to Your Server
### 22.. The Concept of Scope in the Context of Javascript
### 22.. Adding Pre-Made CSS Stylesheets to Your Website
### 22.. Understanding Templating vs. Layouts
### 22.. Understanding Node Module Exports: How to Pass Functions and Data between Files

## Section 23: Boss Level Challenge 3 - Blog Website

## Section 24: Databases
### Databases Explained: SQL vs. NOSQL




















