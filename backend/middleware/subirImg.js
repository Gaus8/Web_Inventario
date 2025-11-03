import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

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

export const subirImg = upload.single("img");
