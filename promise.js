function addPromise(a,b){
	return new Promise(function(resolve, reject){
		if (typeof a === 'number' && typeof b === 'number'){
			resolve(a + b);
		} else{
			reject('not numbers')
		}
		
	})
}

addPromise(5, 9).then(function(sum) {
	console.log('succes ', sum)
}, function (err) {
	console.log('error: ', err)
})