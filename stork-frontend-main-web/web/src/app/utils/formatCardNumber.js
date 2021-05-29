export default (cardString) => {
  const blocks = [];
  const noSpacesString = cardString.replace(/\s/g, '');

  for (let i = 0; i < noSpacesString.length; i += 4) {
    const block = noSpacesString.slice(i, i + 4);
    blocks.push(block);
  }
  return blocks.join(' ');
};
