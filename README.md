# The-Complete-2020-Web-Development-Bootcamp


## Section 1: Front-End Web Development

### 1.1. How Does the Internet Actually Work?
-	Internet is long piece of wire, And the wire connect different computers to each other. It allows computers to transfer data through this giant wire
-	A server is a computer that provides files and data to other computers, it allows access 24/7.
-	A client is a computer that any user is used to access the internet.
-	When browser request a website, the request sent to ISP (Internet server provider: The company we pay for internet service) then it search at DNS that contains websites IP addresses. Once the DNS finds the IP address it sends it back to the browser vis ISP. Then the browser sends a direct request through ISP and this message will be delivered via Internet Backbone to the server that is located that IP address. On that server there is all files that needed to view the website home page. The server sends this files back to the client through the internet backbone and client get to see website in the browser. All of that happens in milliseconds.

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
-	<startTag> Content </EndTag>
-	Horizontal line tag hr accepts attribute size, noshade,..
-	Attributes specify modification to the default element.
-	Center content tag  <center>content</center>.
-	Comments  are not interpreted by the compiler <!-- Comment -->.
  
### 2.3. What is The HTML Boilerplate?
-	Is A code template that could reuse.
  
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

-	Unicode “utf-8” has all characters and emojis.
-	There is a different types of meta tags.

### 2.4. How to Structure Text in HTML?
-	The code goes inside the body tag.
-	Paragraph tag p.
-	emphasis  Tag em tells the browser that the words between it is emphasis, not just about style.
-	italic tag i style element.
-	Stong tag strong tells the browser that the words between it is Strong Importance Element.
-	Bold tag bold styles bold.

### 2.5. HTML Lists
-	Ordered list ol.
-	There is two types of lists.
-	Ordered lists ol and unordered lists ul.
-	Each type has children li for each item of the list.
-	Ol list has attr type start and type to control the list items.

### 2.6. HTML Image Elements
-	Self-closing tag that must be with src attr to the image url.
-	alt attr helps google searching.

### 2.7. HTML Links and Anchor Tags
-	HTML :  HyperText Markup Language.
-	HyperText is some parts of data that connect with hyper links, so when you click on it takes to another part.
-	Anchor tags is closing tag <a> Link text </a>.
-	href attr is the link destination.

## Section 3: Intermediate HTML

### 3.1. HTML Tables
-	Tables main tag table, and everything between is the actual content.
-	To make row use tag tr.
-	To make cell inside the row td.

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
-	main form tag to define what should go into our form.
-	Label tag to some text.
-	To make input change the type to what we need.
-	Textarea to write message.
-	to submit button use input type=”submit”

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
-	Css: cascading style sheet.
-	Styling html.

### 4.2. Inline css
-	Going into the tag and change style attribute = “style value”.

### 4.3. Internal css
-	Add style tag inside the head tag.
-	Select element inside style tag.
-	Make inside {} Property : value.

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
}//who{what: how;}
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

-	[Selectors refrence:](https://www.w3schools.com/cssref/css_selectors.asp).

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
-	Width and height of element are pushing any other element.












