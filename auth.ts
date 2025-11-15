import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/login', (req, res) => {
  const { email } = req.body;
  const token = jwt.sign({ email }, "secret", { expiresIn: '1h' });
  res.json({ token });
});

export default router;