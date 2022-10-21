// You need to write regex that will validate a password to make sure it meets the following criteria:

//     At least six characters long
//     contains a lowercase letter
//     contains an uppercase letter
//     contains a digit
//     only contains alphanumeric characters (note that '_' is not alphanumeric)

const REGEXP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/;

/*
^ : start of input
(?=.*?[A-Z]) : Makes sure that there is at least one upper case letter
(?=.*?[a-z]) : Makes sure that there is at least one lower case letter
(?=.*?[0-9]) : Makes sure that there is at least one number
[A-Za-z0-9]{6,} : Makes sure there are at least 6 characters of [A-Za-z0-9]
$ : end of input
*/