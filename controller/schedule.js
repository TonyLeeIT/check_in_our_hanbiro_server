const {
  saveSchedule,
  findScheduleByUid,
  clearShedule,
} = require("../service/schedule");

const router = require("express").Router();

router.post("/", async (req, res) => {
  const { userid, dayOffs } = req.body;
  saveSchedule(userid, dayOffs)
    .then((schedule) => {
      res.json(schedule);
    })
    .catch((err) => res.status(400).json({ error: err.message }));
});

router.get("/", async (req, res) => {
  const { userid } = req.query;
  try {
    const schedules = await findScheduleByUid(userid);
    res.status(200).json(schedules[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/", async (req, res) => {
  const { userid } = req.query;
  try {
    await clearShedule(userid);
    res.status(200).json({ success: "success" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
