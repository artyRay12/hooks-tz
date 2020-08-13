export const USER_REG = /^[\w\d\@\-\+]{1,150}$/;
export const PASSWORD_REG = /^(?=.*[A-Z])(?=.*\d).{8,128}$/;

export const USERNAME_ERROR_MESSAGE =
    "Username should atleast 1 letter, and you can use '@' '+' '-' '_'";
export const PASSWORD_ERROR_MESSAGE =
    "Password must contain at least one uppercase letter and number, and 8chars min";
export const SERVER_ERROR =
    "Your username or password is invalid";

export const createChecker = (reg) => {
    return (value) => reg.test(value);
};
