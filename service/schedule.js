const { ScheduleModel } = require("../models");

const saveSchedule = async (userid, dayOffs) => {
  const schedules = await findScheduleByUid(userid);
  if (schedules.length > 0) {
    try {
      await ScheduleModel.update(
        { dayOffs: dayOffs },
        { where: { id: schedules[0].id, userid: schedules[0].userid } }
      );
      const checkResultUpdate = await findScheduleByUid(userid);
      return checkResultUpdate[0];
    } catch (error) {
      console.log(error);
      throw new Error(err.message);
    }
  } else {
    return await ScheduleModel.create({ userid, dayOffs });
  }
};

const updateSchedule = async (userid, dayOffs) => {
  const schedules = await findScheduleByUid(userid);
  if (schedules.length > 0) {
    try {
      await ScheduleModel.update(
        { dayOffs: dayOffs },
        { where: { id: schedules[0].id, userid: schedules[0].userid } }
      );
      const checkResultUpdate = await findScheduleByUid(userid);
      return checkResultUpdate[0];
    } catch (error) {
      console.log(error);
      throw new Error(err.message);
    }
  }
};

const findScheduleByUid = async (userid) => {
  return await ScheduleModel.findAll({
    where: {
      userid: userid,
    },
  });
};

const clearShedule = async (userid) => {
  return await ScheduleModel.destroy({ where: { userid: userid } });
};

const trumcateSchedule = async () => {
  return await ScheduleModel.destroy({ truncate: true, cascade: false });
};

module.exports = {
  saveSchedule,
  findScheduleByUid,
  clearShedule,
  updateSchedule,
  trumcateSchedule,
};
