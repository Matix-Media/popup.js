# popup.js
A simple and lightweight JS-library to create simple and cool looking Popups

### Requirements
- jQuery


## Usage
```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>CSS Style test</title>
		<link rel="stylesheet" href="popup.css" />
	</head>
  <body>
    <a href="#" class="open-popup" data-popup="#your-popup">Open Popup</a>
    
    <!-- Popup -->
    <div class="popup-window popup-window popup-primary" id="your-popup">
            <div class="popup-header">
                <span class="close close-popup" data-popup="#your-popup">&times;</span>
                <h1>
                    Your Popup!
                </h1>
            </div>
            <div class="popup-content">
          <p>
            Beep. Boop. This is your popup. Yeay!
          </p>
            </div>
            <div class="popup-actions">
                <a href="#" class="action primary close-popup" data-popup="#your-popup">Okay</a>
            </div>
        </div>
        
  <!-- Scripts -->
  <script
	src="https://code.jquery.com/jquery-3.4.1.min.js"
	integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
	crossorigin="anonymous"
  ></script>
   <script src="popup.js"></script>
   
  </body>
</html>
```

## Code examples
**Example 0**  
You can open a popup using a popup link.
```html
<a href="#" class="open-popup" data-popup="#your-popup">Open your popup</a>
```
For popup follow links you have to specify the new and old popup.
```html
<a href="#" class="follow-popup" data-old-popup="#your-currently-open-popup" data-new-popup="#the-popup-you-wanna-open">
	Open other popup
</a>
```
---

**Example 01**   
In this first popup box you can have a button.
![Image of popup-01](https://i.imgur.com/GNY7JcP.png)
```html
<div class="popup-window" id="popup-01">
			<div class="popup-header">
				<span class="close close-popup" data-popup="#popup-01"
					>&times;</span
				>
				<h1>
					Popup
				</h1>
			</div>
			<div class="popup-content">
				<p>
					pretium viverra suspendisse potenti nullam ac tortor vitae
					purus faucibus ornare suspendisse sed nisi lacus sed viverra
					tellus in hac habitasse platea dictumst vestibulum rhoncus
					est pellentesque elit ullamcorper dignissim cras tincidunt
					lobortis feugiat vivamus at augue eget arcu dictum varius
					duis at consectetur lorem donec massa sapien faucibus et
					molestie ac feugiat sed lectus vestibulum mattis ullamcorper
					velit sed ullamcorper morbi tincidunt ornare massa eget
					egestas purus viverra accumsan in nisl nisi scelerisque eu
					ultrices vitae auctor eu augue ut lectus arcu bibendum at
					varius vel pharetra vel turpis nunc eget lorem dolor sed
					viverra ipsum nunc aliquet bibendum
				</p>
			</div>
			<div class="popup-actions">
				<a href="#" class="action close-popup" data-popup="#popup-01"
					>Okay</a
				>
			</div>
		</div>
```
---
**Example 02**   
You can also have two or more action buttons like shown below.
![Image of popup-01](https://i.imgur.com/qyytbzB.png)
```html
<div class="popup-window" id="popup-02">
			<div class="popup-header">
				<span class="close close-popup" data-popup="#popup-02"
					>&times;</span
				>
				<h1>
					Your popup
				</h1>
			</div>
			<div class="popup-content">
				<p>
					pretium viverra suspendisse potenti nullam ac tortor vitae
					purus faucibus ornare suspendisse sed nisi lacus sed viverra
					tellus in hac habitasse platea dictumst vestibulum rhoncus
					est pellentesque elit ullamcorper dignissim cras tincidunt
					lobortis feugiat vivamus at augue eget arcu dictum varius
					duis at consectetur lorem donec massa sapien faucibus et
					molestie ac feugiat sed lectus vestibulum mattis ullamcorper
					velit sed ullamcorper morbi tincidunt ornare massa eget
					egestas purus viverra accumsan in nisl nisi scelerisque eu
					ultrices vitae auctor eu augue ut lectus arcu bibendum at
					varius vel pharetra vel turpis nunc eget lorem dolor sed
					viverra ipsum nunc aliquet bibendum
				</p>
			</div>
			<div class="popup-actions">
				<a href="#" class="action close-popup" data-popup="#popup-02"
					>Okay</a
				><a href="#" class="action close-popup" data-popup="#popup-02"
					>Cancel</a
				>
			</div>
		</div>
```
---
**Example 3**   
You can also colorize the action button. For example by adding the `primary` class to the action button.
![Image of popup-01](https://i.imgur.com/IrWEpmC.png)
```html
<div class="popup-window" id="popup-03">
			<div class="popup-header">
				<span class="close close-popup" data-popup="#popup-03"
					>&times;</span
				>
				<h1>
					Your popup
				</h1>
			</div>
			<div class="popup-content">
				<p>
					pretium viverra suspendisse potenti nullam ac tortor vitae
					purus faucibus ornare suspendisse sed nisi lacus sed viverra
					tellus in hac habitasse platea dictumst vestibulum rhoncus
					est pellentesque elit ullamcorper dignissim cras tincidunt
					lobortis feugiat vivamus at augue eget arcu dictum varius
					duis at consectetur lorem donec massa sapien faucibus et
					molestie ac feugiat sed lectus vestibulum mattis ullamcorper
					velit sed ullamcorper morbi tincidunt ornare massa eget
					egestas purus viverra accumsan in nisl nisi scelerisque eu
					ultrices vitae auctor eu augue ut lectus arcu bibendum at
					varius vel pharetra vel turpis nunc eget lorem dolor sed
					viverra ipsum nunc aliquet bibendum
				</p>
			</div>
			<div class="popup-actions">
				<a
					href="#"
					class="action close-popup primary"
					data-popup="#popup-03"
					>Okay</a
				><a href="#" class="action close-popup" data-popup="#popup-03"
					>Cancel</a
				>
			</div>
		</div>
```
---
**Example 4**   
Or you can make the button appeare red using the `danger` class on it.
![Image of popup-01](https://i.imgur.com/CgXSYDz.png)
```html
<div class="popup-window" id="popup-04">
			<div class="popup-header">
				<span class="close close-popup" data-popup="#popup-04"
					>&times;</span
				>
				<h1>
					Your popup
				</h1>
			</div>
			<div class="popup-content">
				<p>
					pretium viverra suspendisse potenti nullam ac tortor vitae
					purus faucibus ornare suspendisse sed nisi lacus sed viverra
					tellus in hac habitasse platea dictumst vestibulum rhoncus
					est pellentesque elit ullamcorper dignissim cras tincidunt
					lobortis feugiat vivamus at augue eget arcu dictum varius
					duis at consectetur lorem donec massa sapien faucibus et
					molestie ac feugiat sed lectus vestibulum mattis ullamcorper
					velit sed ullamcorper morbi tincidunt ornare massa eget
					egestas purus viverra accumsan in nisl nisi scelerisque eu
					ultrices vitae auctor eu augue ut lectus arcu bibendum at
					varius vel pharetra vel turpis nunc eget lorem dolor sed
					viverra ipsum nunc aliquet bibendum
				</p>
			</div>
			<div class="popup-actions">
				<a
					href="#"
					class="action close-popup danger"
					data-popup="#popup-04"
					>Okay</a
				><a href="#" class="action close-popup" data-popup="#popup-04"
					>Cancel</a
				>
			</div>
		</div>
```
---
**Example 5**   
You can also make the title bar of the popup appeare in color using the class `popup-primary` in the main `div` of the popup.
![Image of popup-01](https://i.imgur.com/pVT2vtQ.png)
```html
<div class="popup-window popup-primary" id="popup-05">
			<div class="popup-header">
				<span class="close close-popup" data-popup="#popup-05"
					>&times;</span
				>
				<h1>
					Popup
				</h1>
			</div>
			<div class="popup-content">
				<p>
					pretium viverra suspendisse potenti nullam ac tortor vitae
					purus faucibus ornare suspendisse sed nisi lacus sed viverra
					tellus in hac habitasse platea dictumst vestibulum rhoncus
					est pellentesque elit ullamcorper dignissim cras tincidunt
					lobortis feugiat vivamus at augue eget arcu dictum varius
					duis at consectetur lorem donec massa sapien faucibus et
					molestie ac feugiat sed lectus vestibulum mattis ullamcorper
					velit sed ullamcorper morbi tincidunt ornare massa eget
					egestas purus viverra accumsan in nisl nisi scelerisque eu
					ultrices vitae auctor eu augue ut lectus arcu bibendum at
					varius vel pharetra vel turpis nunc eget lorem dolor sed
					viverra ipsum nunc aliquet bibendum
				</p>
			</div>
			<div class="popup-actions">
				<a
					href="#"
					class="action close-popup danger"
					data-popup="#popup-05"
					>Okay</a
				><a href="#" class="action close-popup" data-popup="#popup-05"
					>Cancel</a
				>
			</div>
		</div>
```
---
**Example 6**
You can make the titlebar also red using `popup-danger`.
![Image of popup-01](https://i.imgur.com/78rflFR.png)
```html
<div class="popup-window popup-danger" id="popup-06">
			<div class="popup-header">
				<span class="close close-popup" data-popup="#popup-06"
					>&times;</span
				>
				<h1>
					Popup
				</h1>
			</div>
			<div class="popup-content">
				<p>
					pretium viverra suspendisse potenti nullam ac tortor vitae
					purus faucibus ornare suspendisse sed nisi lacus sed viverra
					tellus in hac habitasse platea dictumst vestibulum rhoncus
					est pellentesque elit ullamcorper dignissim cras tincidunt
					lobortis feugiat vivamus at augue eget arcu dictum varius
					duis at consectetur lorem donec massa sapien faucibus et
					molestie ac feugiat sed lectus vestibulum mattis ullamcorper
					velit sed ullamcorper morbi tincidunt ornare massa eget
					egestas purus viverra accumsan in nisl nisi scelerisque eu
					ultrices vitae auctor eu augue ut lectus arcu bibendum at
					varius vel pharetra vel turpis nunc eget lorem dolor sed
					viverra ipsum nunc aliquet bibendum
				</p>
			</div>
			<div class="popup-actions">
				<a
					href="#"
					class="action close-popup danger"
					data-popup="#popup-06"
					>Okay</a
				><a href="#" class="action close-popup" data-popup="#popup-06"
					>Cancel</a
				>
			</div>
		</div>
```
---
**Example 7**
You can also change the width of the popup using the class `popup-window-small` in the main `div` of the popup to make it smaller.
![Image of popup-01](https://i.imgur.com/77jJcVh.png)
```html
<div
			class="popup-window popup-primary popup-window-small"
			id="popup-07"
		>
			<div class="popup-header">
				<span class="close close-popup" data-popup="#popup-07"
					>&times;</span
				>
				<h1>
					Popup
				</h1>
			</div>
			<div class="popup-content">
				<p>
					pretium viverra suspendisse potenti nullam ac tortor vitae
					purus faucibus ornare suspendisse sed nisi lacus sed viverra
					tellus in hac habitasse platea dictumst vestibulum rhoncus
					est pellentesque elit ullamcorper dignissim cras tincidunt
					lobortis feugiat vivamus at augue eget arcu dictum varius
					duis at consectetur lorem donec massa sapien faucibus et
					molestie ac feugiat sed lectus vestibulum mattis ullamcorper
					velit sed ullamcorper morbi tincidunt ornare massa eget
					egestas purus viverra accumsan in nisl nisi scelerisque eu
					ultrices vitae auctor eu augue ut lectus arcu bibendum at
					varius vel pharetra vel turpis nunc eget lorem dolor sed
					viverra ipsum nunc aliquet bibendum
				</p>
			</div>
			<div class="popup-actions">
				<a
					href="#"
					class="action close-popup danger"
					data-popup="#popup-07"
					>Okay</a
				><a href="#" class="action close-popup" data-popup="#popup-07"
					>Cancel</a
				>
			</div>
		</div>
```
---
**Example 8**   
You can make the popup not just smaller but also larger using the class `popup-window-large`.
![Image of popup-01](https://i.imgur.com/AmV1Ce4.png)
```html
<div
			class="popup-window popup-primary popup-window-large"
			id="popup-08"
		>
			<div class="popup-header">
				<span class="close close-popup" data-popup="#popup-08"
					>&times;</span
				>
				<h1>
					Popup
				</h1>
			</div>
			<div class="popup-content">
				<p>
					pretium viverra suspendisse potenti nullam ac tortor vitae
					purus faucibus ornare suspendisse sed nisi lacus sed viverra
					tellus in hac habitasse platea dictumst vestibulum rhoncus
					est pellentesque elit ullamcorper dignissim cras tincidunt
					lobortis feugiat vivamus at augue eget arcu dictum varius
					duis at consectetur lorem donec massa sapien faucibus et
					molestie ac feugiat sed lectus vestibulum mattis ullamcorper
					velit sed ullamcorper morbi tincidunt ornare massa eget
					egestas purus viverra accumsan in nisl nisi scelerisque eu
					ultrices vitae auctor eu augue ut lectus arcu bibendum at
					varius vel pharetra vel turpis nunc eget lorem dolor sed
					viverra ipsum nunc aliquet bibendum
				</p>
			</div>
			<div class="popup-actions">
				<a
					href="#"
					class="action close-popup danger"
					data-popup="#popup-08"
					>Okay</a
				><a href="#" class="action close-popup" data-popup="#popup-08"
					>Cancel</a
				>
			</div>
		</div>
```
---
**Example 9**
Another cool feature is, that you can change the popup without manually have to close it. Just use the `follow-popup` class on the link to the popup.
![Image of popup-01](https://i.imgur.com/6siVXbk.png)
```html
<div class="popup-window popup-primary" id="popup-09">
			<div class="popup-header">
				<h1>
					Popup
				</h1>
			</div>
			<div class="popup-content">
				<p>
					pretium viverra suspendisse potenti nullam ac tortor vitae
					purus faucibus ornare suspendisse sed nisi lacus sed viverra
					tellus in hac habitasse platea dictumst vestibulum rhoncus
					est pellentesque elit ullamcorper dignissim cras tincidunt
					lobortis feugiat vivamus at augue eget arcu dictum varius
					duis at consectetur lorem donec massa sapien faucibus et
					molestie ac feugiat sed lectus vestibulum mattis ullamcorper
					velit sed ullamcorper morbi tincidunt ornare massa eget
					egestas purus viverra accumsan in nisl nisi scelerisque eu
					ultrices vitae auctor eu augue ut lectus arcu bibendum at
					varius vel pharetra vel turpis nunc eget lorem dolor sed
					viverra ipsum nunc aliquet bibendum
				</p>
			</div>
			<div class="popup-actions">
				<a
					href="#"
					class="action follow-popup"
					data-old-popup="#popup-09"
					data-new-popup="#popup-10"
					>Popup 10</a
				>
			</div>
		</div>
```
---
   
**All example popups are also in the** `example.html` **file.**
