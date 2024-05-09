import { Router } from "express";

const router = Router();

router.get('/', async (req, res) => {
  try {
    res.render('chat');
  } catch (e) {
    console.log(e);
    res.status(500).send('Server error');
  }
});

export default router;
