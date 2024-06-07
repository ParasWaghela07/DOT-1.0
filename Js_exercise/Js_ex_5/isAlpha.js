function containsOnlyAlphabets(str) {
    const regex = /^[a-zA-Z]+$/; //----> expression ensures string contains only aplhabets
    return regex.test(str);
  }

  //traditional
  function containsOnlyAlphabets2(str){
    if(str.length===0) return false;
    const alphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

    for(let i=0;i<str.length;i++){
      let c=(str[i]).toLowerCase();
      if(alphabets.includes(c)===false){
        return false;
      }
    }

    return true;

  }

  console.log(containsOnlyAlphabets("abcDEF")); // true
  console.log(containsOnlyAlphabets("123")); // false
  console.log(containsOnlyAlphabets("a b c")); // false
  console.log(containsOnlyAlphabets("")); // false
  
  console.log(containsOnlyAlphabets2("abcDEF")); // true
  console.log(containsOnlyAlphabets2("123")); // false
  console.log(containsOnlyAlphabets2("a b c")); // false
  console.log(containsOnlyAlphabets2("")); // false