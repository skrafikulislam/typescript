function greet(names: string | null | undefined) {
  if (names) console.log(names.toUpperCase());
  else console.log("Hola");
}

greet(null);
greet(undefined);
greet("salman");
greet("babu");
