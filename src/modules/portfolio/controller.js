import Portfolio from './model';

export const createPortfolio = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: true, message: 'Name must be provided!' });
  } else if (typeof name !== 'string') {
    return res.status(400).json({ error: true, message: 'Name must be a string!' });
  } else if (name.length < 5) {
    return res.status(400).json({ error: true, message: 'Name must be 5 characters long!' });
  }

  const portfolio = new Portfolio({ name });

  try {
    return res.status(201).json({ error: false, portfolio: await portfolio.save() });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Error in while creating portfolio!' });
  }
};
