// get one week ago date in format "YYYY-MM-DD"
export const getOneWeekAgoISODate = () => {
  //Get today's date using the JavaScript Date object.
  var ourDate = new Date();
  //Change it so that it is 7 days in the past.
  var dateOfOneWeekAgo = ourDate.getDate() - 7;
  ourDate.setDate(dateOfOneWeekAgo);
  const dateOfOneWeekAgoUTC = ourDate.toISOString().split("T")[0];
  return dateOfOneWeekAgoUTC;
};
