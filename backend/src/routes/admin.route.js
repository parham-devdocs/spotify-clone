import { Router } from "express";
import { protectedRoute, requireAdmin } from "../../middleware/auth.middleware.js";
import { createSong } from "../../controllers/admin.controller.js";
import multer from "multer";
const router = Router();

const storage = multer.memoryStorage()
    const upload = multer({
      storage, limits: { fileSize: 20000000 },
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.startsWith("audio/")) {
          return cb(new Error("only audio files are allowed"))
        }
        cb(null,true)
      }
    })
    upload.single("song")
router.post("/",upload.single("songs"), createSong);

export default router;
