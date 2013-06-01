var input = [
	["75"],
	["95","64"],
	["17","47","82"],
	["18","35","87","10"],
	["20","04","82","47","65"],
	["19","01","23","75","03","34"],
	["88","02","77","73","07","63","67"],
	["99","65","04","28","06","16","70","92"],
	["41","41","26","56","83","40","80","70","33"],
	["41","48","72","33","47","32","37","16","94","29"],
	["53","71","44","65","25","43","91","52","97","51","14"],
	["70","11","33","28","77","73","17","78","39","68","17","57"],
	["91","71","52","38","17","14","91","43","58","50","27","29","48"],
	["63","66","04","68","89","53","67","30","73","16","69","87","40","31"],
	["04","62","98","27","23","09","70","98","73","93","38","53","60","04","23"]
]

function Node (val, left, right) {
	this.val = val;
	this.left = left;
	this.right = right;

	// this.maximalPathValue unset by default, but set by the path algorithm
	this.maximalPathValue = undefined;
}

var inputToTree = exports.inputToTree = function (input) {
	var i = input.length - 1;
	var lastRow = []
	while (i >= 0) {
		lastRow = input[i].map(function (strVal, idx) {
			// abusing JavaScript's arrays -- these will return undefined
			return new Node(parseInt(strVal, 10), lastRow[idx], lastRow[idx+1]);
		});
		i--;
	}

	return lastRow[0]; // the top node
}

var maxPath = exports.maxPath = function (node) {
	if (node.maximalPathValue) {
		return node.maximalPathValue;
	}
	
	var leftPathVal = 0, rightPathVal = 0;
	if (node.left) {
		leftPathVal = maxPath(node.left);
	}
	if (node.right) {
		rightPathVal = maxPath(node.right);
	}

	node.maximalPathValue = node.val + 
		(leftPathVal > rightPathVal ? leftPathVal : rightPathVal);

	return node.maximalPathValue;
}

exports.solve = function () {

	var tree = inputToTree(input);
	
	return maxPath(tree);

}

