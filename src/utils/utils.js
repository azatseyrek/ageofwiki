// check the unit cost === undefined || null
export const checkCost = (unitParam) => {
  // check the unit resource cost. (is it defined or is it equal to 0? filtering to UI)
  let checkResourceCost = (resourceName) => {
    return unitParam.cost[resourceName]
      ? `${resourceName} : ${unitParam.cost[resourceName]} `
      : '';
  };
  if (unitParam.cost === null || undefined) {
    return 'no cost';
  } else {
    return `     ${checkResourceCost('Food')} 
    ${checkResourceCost('Wood')}
    ${checkResourceCost('Gold')}`;
  }
};
