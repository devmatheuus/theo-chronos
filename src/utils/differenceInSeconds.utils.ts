export const differenceInSeconds = (milliseconds: number) => {
  const currentMilliseconds = new Date().getTime();
  const differenceInMilliseconds = currentMilliseconds - milliseconds;
  const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);

  return differenceInSeconds;
};
