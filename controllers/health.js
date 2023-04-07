const healthz = async (_, res) => {
  res.status(200).json({ trigger: 'success' });
};

module.exports = healthz;
