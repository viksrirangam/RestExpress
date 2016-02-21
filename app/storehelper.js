module.exports = StoreHelper;

function StoreHelper () {
};

StoreHelper.prototype.find = function(data, att, val){
	for(var i in data){
		if(data[i][att]==val){
			return data[i];
		}
	}
};

StoreHelper.prototype.remove = function(data, item){
	data.delete(item);
	return;
};

StoreHelper.prototype.getNextId = function(data){
	var ret=0;
	for(var i in data){
		if(data[i]["id"]>ret){
			ret = data[i]["id"]
		}
	}
	return ret;
};