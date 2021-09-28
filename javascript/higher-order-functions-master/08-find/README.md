The arr.find() method is used to get the value of the first element
in the array that satisfies the provided condition.It checks all the
elements of the array and whichever the first element satisfies
the condition is going to print.

Stynax : array.find(function(currentValue, index, arr),thisValue)

Parameters: This method accepts five parameters as mentioned above and described below:

function: It is the function of the array that works on each element.

currentValue: This parameter holds the current element.

index: It is an optional parameter that holds the index of current element.

arr: It is an optional parameter that holds the array object the current element belongs to.

thisValue: This parameter is optional, if a value to be passed to the function to be used
as its “this” value else the value “undefined” will be passed as its “this” value.

Return value: It returns the array element value, if any of the elements in the array which satisfy the condition, otherwise it returns undefined.
