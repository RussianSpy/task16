/*
Note: this algorithm is not the best. It can be optimized but i didnt have enough time for that
*/

function calc (base, segments) {
	let segJoined = [];

	// Sorting extra line segments by first coordinate
	segments.sort(function (a, b) {
		if (a[0] > b[0]) return 1;
		else return -1;
	});

	let entryPoint = segments[0][0];
	let endPoint = segments[0][1];

	// Join intersecting line segments
	for(let i = 1; i < segments.length; i++) {

		// If start point of the next segment located before end point of previous segment - this means we can join them in one bigger segment
		if(segments[i][0] < endPoint) {
			if(segments[i][1] > endPoint) endPoint = segments[i][1];
		}
		else { // Otherwise previous segment finished
			segJoined.push([entryPoint, endPoint]);
			entryPoint = segments[i][0];
			endPoint = segments[i][1] ;
		}
	}

	// Dont forget last points
	segJoined.push([entryPoint, endPoint]);

	// Also add join finish points of the base segment
	segJoined.push([base[1], base[1]]);

	// Start with first point of base segment
	let x = base[0];
	let len = 0;

	// Total length calculation
	for(let k = 0; k < segJoined.length; k++) {
		len += (segJoined[k][0] - x);

		x = segJoined[k][1];
	}

	return len;
}

//Example test
let base = [15,165];
let segs = [[37,68], [52,74], [118,146], [35,44], [37,65], [46,74] ];

console.log(calc(base, segs));