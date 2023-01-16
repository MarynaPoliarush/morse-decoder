const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
     let arr=[]


    

    for (let i=0; i<expr.replace(/\s/g, "").length;i+=10){ // replace(/\s/g, "") helps to get string length w/o spaces
       if (expr.slice(i,i+10)[0]=='*'){
        arr.push(['*'])
        arr.push([...expr.slice(i+1,i+11)])
       } else {
        arr.push([...expr.slice(i,i+10)])
       }
    }

   

    let finArr=[]
    for (let i=0; i<arr.length;i++){
        finArr.push(new Array())
        for (let j=0;j<9;j+=2){
            
            if ((arr[i][j]+arr[i][j+1])=='11'){
                finArr[i] += ('-')
            } else if ((arr[i][j]+arr[i][j+1])=='10'){
                finArr[i] += ('.')
            } else if(arr[i][j]=='*'){
                finArr[i] +=('**********')
            }
        }
    }

    console.log(finArr)
    let result=''
    
    for ( const item of finArr){
        for ( key in MORSE_TABLE){
            
            if (item==key){
                result+= MORSE_TABLE[key]
            } 
        }
        if(item=='**********'){
            result= result+ ' ';
        }
       
    }

  
   return result
}

module.exports = {
    decode
}
