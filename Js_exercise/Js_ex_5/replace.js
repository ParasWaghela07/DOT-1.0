function replaceCatWithDog(str) {
    const regex = /cat/g; //--> g stands for all occ
    return str.replace(regex, "dog");
  }
  
  console.log(replaceCatWithDog("The cat sat on the mat.")); // The dog sat on the mat.
  console.log(replaceCatWithDog("The cats sat on the mats.")); // The dogs sat on the mats.
  console.log(replaceCatWithDog("Caterpillar")); // Dogerpillar
  console.log(replaceCatWithDog("Cats are cool.")); // Dogs are cool.