const timeTable = {
  y: () => timeTable.d() * 365,
  mt: () => timeTable.d() * 30,
  d: () => timeTable.h() * 24,
  h: () => timeTable.m() * 60,
  m: () => timeTable.s() * 60,
  s: () => timeTable.ms() * 1000,
  ms: () => 1,
};

/**
 * @param time use only one letter to represent time. e.g. `1y`, `10d`, `2h`, `5m`, `30s`. Use `mt` to represents the month. e.g. `2mt = 2 months`
 * @param resType is format that returns the response for you. Default is in second
 * @returns returns your time in number
 */
export function getTimeByString(time: string, resType?: keyof typeof timeTable) {
  const [timeNumber, timeMultiplier] = [
    +time.replace(/\D+/g, ''),
    time.replace(/\d+/g, ''),
  ];

  const timeInMiliSecond = timeNumber * timeTable[timeMultiplier]();
  const timeResponse = timeInMiliSecond / timeTable[resType || 's']();
  return timeResponse;
}
