export default condition => {
  const allConditions = condition.entry;

  // create array of unique conditions e.g. ["Bipolar", "measles", ...]
  const uniqueArray = new Set(
    allConditions.map(condition => condition.resource.code.text)
  );

  // return name, dates to filtered conditions array
  const filteredArray = [...uniqueArray].map(uniqueName => {
    const uniqueInfo = allConditions.filter(
      condition => condition.resource.code.text === uniqueName
    );
    const dates = uniqueInfo.map(condition => condition.resource.onsetDateTime);

    // find the earliest date for the condition
    let oldestDate, dateObject;
    dates.forEach(date => {
      if (!date || date === "") return;
      dateObject = new Date(date);

      if (!oldestDate || oldestDate > dateObject) {
        return (oldestDate = dateObject);
      }
    });
    return { name: uniqueName, dateOnset: oldestDate };
  });
  return filteredArray;
};
