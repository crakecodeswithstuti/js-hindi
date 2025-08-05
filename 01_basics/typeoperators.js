<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,
     initial-scale=1.0">
    <title>Operator in JS</title>
    </title>
</head>

<body>
    <script type="text/javascript">
        let a = 10;
        let b = 15;
         let isEqual = a === b; // Equality
         let isNotEqual = a !== b; // Inequality
        let isGreaterThan = a > b; // Greater than
        document.write(isGreaterThan);
         let isLessThan = a < b; // Less than
         let isGreaterOrEqual = a >= b; // Greater than or equal to
        let isLessOrEqual = a <= b; // Less than or equal to

        //Assignment Operators:
        let num = 10;
         num += 5; // Equivalent to num = num + 5
         num -= 3; // Equivalent to num = num - 3
        num *= 2; // Equivalent to num = num * 2
        num /= 4; // Equivalent to num = num / 4
        document.write(num += 5);
        // //Increment and Decrement Operators:
        let counter = 5;
        counter++; // Increment by 1 (post-increment)
        ++counter; // Increment by 1 (pre-increment)
         counter--; // Decrement by 1 (post-decrement)
        --counter; // Decrement by 1 (pre-decrement)

         //String Concatenation Operator:
         let firstName = 'Rajat';
         let lastName = 'Kumar';
        let fullName = firstName + ' ' + lastName; // Concatenation

         //Ternary (Conditional) Operator:
        let age = 18;
         let canVote = age >= 18 ? 'Yes' : 'No'; // If-else in a single line

         //Typeof Operator:
         let value = 42;
         let valueType = typeof value; // Returns 'number'

        // //Logical Operator
        let isTrue = true;
         let isFalse = false;
        let andResult = isTrue && isFalse; // Logical AND
         let orResult = isTrue || isFalse; // Logical OR
        let notResult = !isTrue; // Logical NOT
    </script>
</body>

</html> 