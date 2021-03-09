export const dateToCleanDate = (date: string): string => {
  const datefmt = new Date(date);

  return datefmt.toISOString().replace(/T/, ' ').replace(/\..+/, '').substr(0, 16);
}