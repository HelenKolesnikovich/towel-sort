
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix == undefined || matrix.length == 0){
        return [];
    }

    matrix.forEach(function(element, index){
		if(index != 0 && index % 2 != 0)
		{
			matrix[index].reverse();
		}
	});

	let sortedArray = matrix[0];
	for(let i = 1; i < matrix.length; i++)
	{
		sortedArray = sortedArray.concat(matrix[i]);
	}

    return sortedArray;
}
