<<<<<<< HEAD
import {
  createSqueezeController,
  getAllSqueezesController,
  getSqueezeByIdController,
} from "../controllers/squeeze.controller";

import { Router } from "express";

const router = Router();

router.get("/", getAllSqueezesController);
router.post("/", createSqueezeController);
router.get("/:id", getSqueezeByIdController);

export default router;
=======
import {
  createSqueezeController,
  getAllSqueezesController,
  getSqueezeByIdController,
} from "../controllers/squeeze.controller";

import { Router } from "express";

const router = Router();

router.get("/", getAllSqueezesController);
router.post("/", createSqueezeController);
router.get("/:id", getSqueezeByIdController);

export default router;
>>>>>>> c354b41d65e97ce570f3e20585d41ef4ad1c1639
