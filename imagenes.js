import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const routerImg = express.Router();

// ⚙️ Configurar Cloudinary
cloudinary.config({
  cloud_name: "dk6alhgrt",
  api_key: "162752754456773",
  api_secret: "JDsTxIjpFGj6KAwkh80h8RJph8U",
});

// 📦 Configurar almacenamiento con Multer y Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "img-cdisfruta", // Carpeta en Cloudinary
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

// 🚀 Ruta para subir la imagen
routerImg.post("/upload", upload.single("img"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No se envió imagen" });

  res.json({
    imageUrl: req.file.path, // URL directa de Cloudinary
  });
});

export default routerImg;