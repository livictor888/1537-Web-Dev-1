let top = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>To do List</title>
    <style>
        body { width: 50%; margin: 0 auto; font-family: Verdana, Geneva, Tahoma, sans-serif;}
        form {border: 1px solid teal; padding: 10px;}
        label { background-color: teal; color: white; padding: 3px;}
        h1 { background-color: teal; color: white; padding: 5px;}
    </style>
</head>
<body>
    <h1> To do Items </h1>
    <form action='/list' method="POST">
        <input type='text' name='item'>
        <input type="submit" value="submit" />
    </form>
    <br>
`;

module.exports = top;