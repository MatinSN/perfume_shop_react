export function toFarsiNumber(n) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return n
      .toString()
      .split('')
      .map(x => farsiDigits[x])
      .join('');
  }


  export function addComma(n){

        const digits = n.split("")
        const result = [...digits]

        for(let i=digits.length-1;i>0;i = i-3){
            result.splice()
        }
  }


  export function getDiscountPrice(price,discount){
   
   return (Math.round(price*((100-discount)/100))).toString()
  }
  