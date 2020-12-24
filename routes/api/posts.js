const express = require("express");
const router = express.Router();

//@route GET api/posts/test
//@desc Test routes
//@access Public
router.get("/test", (req, res) =>
  res.json({
    msg: "Posts routes test works",
  })
);

module.exports = router;
