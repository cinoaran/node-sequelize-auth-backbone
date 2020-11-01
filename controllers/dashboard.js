
module.exports = {
  dashboard: async (req, res, next) => {
    res.status(200).json({secret: "resource"})
  }
};
