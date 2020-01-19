var getStored = function(name) {
    if(localStorage.getItem(name) !== null) {
        return JSON.parse(localStorage.getItem(name));
    }
    else {
        return {};
    }
};

var storeJSON = function(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
};
