var quickSort=function(arr){
    if(arr.length<=1){
        return arr;
    };
    var pivotIndex=Math.floor(arr.length/2);//提取中间索引
    var pivot=arr.splice(pivotIndex,1)[0];//提取中间元素
    var left=[];
    var right=[];
    for (var i=0;i<arr.length;i++){
        if (arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));
};
var arr=[1,5,2,6,8,4,8,2,0,3];
console.log(quickSort(arr));