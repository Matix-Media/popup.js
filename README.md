# popup.js
A simple and lightweight JS-library to create simple and cool looking Popups

### Requirements
- jQuery


## Usage
```
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
