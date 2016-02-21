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
	for(var i in data){
		if(data[i]["id"]==item.id){
			data.splice(i, 1);
			return;
		}
	}
};

StoreHelper.prototype.getid = function(data){
	var ret=-1;
	for(var i in data){
		if(data[i]["id"]>ret){
			ret = data[i]["id"]
		}
	}
	return ret+1;
};