let fullname= prompt("Enter your full name without space");
fullname = fullname.trim().toLowerCase();
fullname=fullname.replaceAll(" ", "_");
let username=`@${fullname}_${fullname.length}`;
console.log(username);