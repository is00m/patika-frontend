# Practice with Form

This is a simple HTML form created for practicing various form input types in HTML.  
The form collects basic information such as name, email, password, gender, favorite fruit, and comments.

## Features

- **Text Inputs**: First name and last name fields
- **Email and Password Inputs**
- **Radio Buttons**: Select gender (male or female)
- **Dropdown List**: Choose your favorite fruit
- **Textarea**: Add additional comments
- **Buttons**: Submit and Reset functionality

## How to Use

1. Open the file in your browser by simply double-clicking the `.html` file or dragging it to any browser window.
2. Fill out the fields in the form.
3. Click **Submit** to send your data (currently does not send anywhere).
4. Click **Reset** to clear all fields.

## Code Preview

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice with form</title>
</head>
<body>
    <h1>Form</h1>
    <form >

        <!-- First Name, Last Name -->
        <label for="fName">First Name:</label>
        <input type="text" id="fName"><br><br>
        <label for="lName">Last name:</label>
        <input type="text" id="lName"><br><br>

        <!-- Email, Password -->
        <label for="email">Email:</label>
        <input type="email" id="email"><br><br>
        <label for="password" >Password:</label>
        <input type="password" id="password"><br><br>
        
        <!-- Gender -->
        <label for="gender" >Gender:</label>
        <input type="radio" id="male" name="gender" value="male" required>
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" required>
        <label for="female">Female</label><br><br>

        <!-- Favorite Fruits -->
        <label for="fFruits">Favorite Fruits:</label>
        <select id="fFruits" name="fFruits">
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
            <option value="grape">Grape</option>
            <option value="mango">Mango</option>
        </select><br><br>

        <!-- Comments -->
        <label for="comments">Comments:</label><br>
        <textarea id="comments" rows="4" cols="50"></textarea><br>

        <!-- Submit, Reset Buttons -->
        <input type="submit" value="Submit">
        <input type="reset" value="Reset">
    </form>
    
</body>
</html>
