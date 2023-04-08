function chooseColor(value: number) {
  if (value < 5) return 'red';
  else if (value >= 5 && value < 8) return 'orange';
  else if (value >= 8) return 'green';
}

export default chooseColor;
