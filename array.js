//
// var array=[1,2,3,4,5,"hello"]
        // 0 1 2 3 4 
// for(i=0;i<6;i++)
// {
//     console.log(array[i])


// }
// for(i in array)
// {
//     console.log(array[i])
// }
var array=[[1,2,3],[4,5,6],[7,8,9]]
//          0        1        2
//          0,1,2   0,1,2   0,1,2
// for(i=0;i<array.length;i++)
// {
//         for(j=0;j<array[i].length;j++)
//         {
//                 console.log(array[i][j])
//         }
//         console.log("\t")
// }
// for(i in array)
// {
//         for(j in array[i])
//         {
//                 console.log(array[i][j])
//         }
// }
       

for(i=0;i<array.length;i++)
{
        for(j=0;j<array[i].length;j++)
        {
                console.log(array[i][j])
        }
}
for(i in array)
{
        for(j in array[i])
        {
                console.log(array[i][j])
                
        }
}
