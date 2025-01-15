# Analog Clock with JavaScript, CSS and HTML (HTML only to load the css and js files.)

My Project is an **analog clock** built entirely with **JavaScript**, **CSS** and **HTML** (via JavaScript). The clock includes realistic hour, minute, and second hands, along with hour markings and numbers (1–12). It also displays the current date at the bottom of the clock.

## Features

 **Dynamic Markings and Numbers**:
  All clock markings and numbers are created dynamically with JavaScript.
  
 **Smooth Clock Hand Animation**:
  The clock hands (hour, minute, and second) rotate smoothly using CSS, no reaload when the secondhand are on 0 degrees.

 **Responsive Design**:
  The clock adjusts its size to fit different screen dimensons.

 **Time Zone Support**:
  Displays the time in the **Zurich timezone**.

 **Date Display**:
  The current date is displayed at the bottom of the clock face.

## Project Structure

### JavaScript

Javascript Structure:

1. **Create Clock Elements**:
   - Outer container for the clock.
   - Tick marks for hours and minutes.
   - Numbers (1–12) positioned around the clock face.
   - Date container for displaying the current day.

2. **Calculates and Updates Hand Positions**:
   - Uses real-time data (hours, minutes, seconds) to calculate rotations.
   - Ensures smooth transitions for the second hand.

3. **Handles Time Zones**:
   - Ensures time is displayed in the Zurich timezone.

### CSS

CSS Structure:

- Clock face (border, shadows, etc.).
- Tick marks and numbers.
- Styling for hour, minute, and second hands.
- Styling for the date container.

### Websites i used for help

- <https://www.w3schools.com/>
- <https://javascript.info/>
- <https://www.javascripttutorial.net/>
