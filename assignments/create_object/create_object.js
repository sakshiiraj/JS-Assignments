function CreateObject(arr) {
    // Write your code here
    var keys = [];
    var values = [];
    var dic = {};
    for(let i=0; i<arr.length; i++) 
    {
        if(i % 2 == 0)
        {
            keys.push(arr[i]);
        } else 
        { 
            values.push(arr[i]);
        }
    }
    keys.forEach((key, i) => dic[key] = values[i]);
    return dic
}

module.exports = CreateObject;
