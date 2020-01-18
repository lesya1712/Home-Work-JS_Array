var fruits = ['apple','pear','banana','kiwi','orange','mandarin','peach']
    



for (let i = 0; i < fruits.length; i++) {
    const element = fruits[i];
    console.log(element);
}
function inArr(text,fruits){
    for (let i = 0; i < fruits.length; i++) {
        const element = fruits[i];
     if(text == element){
         return 'true'
     }   
    }
    return 'false'
}