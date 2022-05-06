const TreeNode = function(name, parentNode) {
	this.name = name;
	this.amount = 0;
	this.parentNode = parentNode;

	this.linkUpParent = function(parentNode) {
		this.parentNode = parentNode;
		this.parentNode.addAmount(this.amount);
	}
	this.addAmount = function(amount) {
		this.amount += amount;
		if(this.parentNode) {
			this.parentNode.addAmount(amount);
		}
	}
}

const getLocationAmount = (locationId, sampleData) => {

    //create an object tree structure with earning and parent child relation
    let nodeMap = buildNodeMap(sampleData);
    console.log(`${locationId} earns profit of ${nodeMap[locationId].amount}`)
    
}

const buildNodeMap = (sampleData) => {
    let nodeMap = {};
    let rootNodes = []
    for (const sampleRow of sampleData) {
        let nodeName = sampleRow[0];
        let parentNodeName = sampleRow[1];
        let amount = sampleRow[2] ? parseFloat(sampleRow[2]) : 0;

		if( parentNodeName && ! (parentNodeName in nodeMap) ) {
        	nodeMap[parentNodeName] = new TreeNode(parentNodeName);
        }

        if (! (nodeName in nodeMap) ) {
            nodeMap[nodeName] = new TreeNode(nodeName, nodeMap[parentNodeName]);
        }

        // to handle out of ordered build up - link parent node
        if (parentNodeName && ! nodeMap[nodeName].parentNode ) {
        	nodeMap[nodeName].linkUpParent(nodeMap[parentNodeName]);
        }
        nodeMap[nodeName].addAmount(amount);
    }
    return nodeMap;
}

module.exports = { 
    getLocationAmount
}
