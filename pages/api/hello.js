export default (req, res) => {
  const { name } = req.body;

  const greetTo = name || 'world';
  res.status(200).json({ text: `Hello ${greetTo}` })
}
