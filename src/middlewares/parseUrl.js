module.exports =  (baseUrl) => (req, res) => {
  const path = new URL(req.url, baseUrl);
  const param = {};
  path.searchParams.forEach((value, key) => param[key] = value);
  req.pathname = path.pathname;
  req.pathparam = param;
};
