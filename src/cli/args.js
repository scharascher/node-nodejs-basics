const parseArgs = () => {
  const realArguments = process.argv.slice(2);
  let result = '';
  for (let i = 0; i< realArguments.length;i+=2) {
    const key = realArguments[i].slice(2), 
      value = realArguments[i + 1];
    result += `${key} is ${value}, `;
  }
  console.log(result.substring(0, result.length - 2));
};

parseArgs();