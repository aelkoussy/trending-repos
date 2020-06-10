import { getOneWeekAgoISODate } from "./helpers";

// the logic is similar to the implementation but that is the easiest way to get that date
describe("getOneWeekAgoISODate()", () => {
  it("get the date of 1 week ago in format YYYY-MM-DD", () => {
    //Get today's date using the JavaScript Date object.
    var ourDate = new Date();
    //Change it so that it is 7 days in the past.
    var dateOfOneWeekAgo = ourDate.getDate() - 7;
    ourDate.setDate(dateOfOneWeekAgo);
    const dateOfOneWeekAgoUTC = ourDate.toISOString().split("T")[0];

    const prevWeek = getOneWeekAgoISODate();
    expect(prevWeek).toEqual(dateOfOneWeekAgoUTC);
  });
});
