function convertToCamelCase(inputText) {
  const variables = inputText.split("\n").filter(Boolean); // Split by newline and remove empty strings
  const outputArray = [];

  variables.forEach((variable) => {
    const camelCaseVariable = variable
      .split("_")
      .map((word, index) => {
        return index === 0
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join("");

    outputArray.push(`${camelCaseVariable} ✅`);
  });

  return outputArray.join("\n");
}

const inputData = `
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
`;

const result = convertToCamelCase(inputData);
console.log(result);
