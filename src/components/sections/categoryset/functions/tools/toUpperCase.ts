
// make a function that takes a string and returns it in capitalized

export const toCapitalized = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}