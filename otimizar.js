const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './imagens';
const outputDir = './images-otimizadas';

// Array com as larguras para  gerar (Mobile, Tablet, Desktop)
const SIZES = [400, 800, 1000]; 

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

async function otimizarImagens() {
  console.log('🧙‍♂️ Forjando múltiplas resoluções de imagens...\n');
  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    if (!file.match(/\.(png|jpg|jpeg|webp)$/i)) {
      continue;
    }

    const inputPath = path.join(inputDir, file);
    const fileNameWithoutExt = path.basename(file, path.extname(file));

    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();

      // Loop para gerar as 3 versões de cada imagem
      for (const size of SIZES) {
        
        // Garante que não vamos esticar imagens pequenas
        const targetWidth = Math.min(size, metadata.width);
        const outputPath = path.join(outputDir, `${fileNameWithoutExt}-${size}.webp`);
        // Se o ficheiro já foi gerado numa execução anterior, poupamos a CPU
        if (fs.existsSync(outputPath)) {
          console.log(`⏩ Já existe: ${fileNameWithoutExt}-${size}.webp`);
          // Se a imagem original já é menor ou igual ao targetWidth, não faz sentido testar tamanhos maiores
          if (metadata.width <= size) break; 
          continue;
        }

        await image
          .resize({ width: targetWidth, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);

        console.log(`✅ Forjada: ${fileNameWithoutExt}-${targetWidth}.webp`);

        // Se acabámos de processar o tamanho máximo real da imagem, paramos o loop para não duplicar
        if (metadata.width <= size) {
          break;
        }
      }
    } catch (error) {
      console.error(`❌ Erro ao processar ${file}:`, error.message);
    }
  }
  
  console.log('\n✨ Grimório atualizado! As suas imagens estão na pasta:', outputDir);
}

otimizarImagens();