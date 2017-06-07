import Stock from './model';

export const createStock = async (req, res) => {
  const { symbol, lastPrice, marketTime, percentChange } = req.body;
  const newStock = new Stock({ symbol, lastPrice, marketTime, percentChange });

  try {
    return res.status(201).json({ stock: await newStock.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Stock Create' });
  }
};

export const getAllStocks = async (req, res) => {
  try {
    return res.status(200).json({ stocks: await Stock.find({}) });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Stock Get All Stocks' });
  }
};
