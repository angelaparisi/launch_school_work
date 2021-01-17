function shortLongShort(string1, string2) {
  if (string1.length < string2.length) {
    console.log(string1 + string2 + string1); 
  } else if (string1.length > string2.length) {
    console.log(string2 + string1 + string2);
  }
}

shortLongShort('abc', 'defgh');
shortLongShort('abcde', 'fgh'); 
shortLongShort('', 'xyz'); 