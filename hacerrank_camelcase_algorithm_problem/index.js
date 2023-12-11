const camelCaseString = "saveChangesInTheEditor";

const printWords = (s) => {
  // Use a regular expression to match the start of each word
  const regex = /[a-z]+|[A-Z][a-z]*/g;

  // Extract words using the regular expression
  const words = s.match(regex) || [];

  return (`${words.length}`);
};

printWords(camelCaseString);
