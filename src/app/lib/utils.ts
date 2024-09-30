import fs from 'fs';
import path from 'path';

export function getAllImagesFromFolder(folder: string) {
  const directoryPath = path.join(process.cwd(), `public/${folder}`);
  
  try {
    const files = fs.readdirSync(directoryPath);
    const imageFiles = files.filter((file) =>
      ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(path.extname(file).toLowerCase())
    );

    const directoryImages  = imageFiles.map((file) => `/${folder.replace('/public', '')}/${file}`)
    return directoryImages
  } catch (error) {
    console.error("Erro ao ler a pasta:", error);
    return [];
  }
}
