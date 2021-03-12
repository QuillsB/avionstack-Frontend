export const airlineDataToArray = (airlines: any[]): string[] => {
  let airlinesNames: string[] = [];

  airlines.map((item: any) => (
    airlinesNames.push(item.airline_name ? item.airline_name : null)
  ));

  return airlinesNames;
}
