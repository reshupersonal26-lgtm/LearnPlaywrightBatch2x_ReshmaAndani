function printCenteredPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    const stars = [];
    for (let j = 0; j < i; j++) {
      stars.push('*');
    }
    const line = stars.join(' ');
    const padding = ' '.repeat(rows - i);
    console.log(padding + line);
  }
}

printCenteredPyramid(5);
