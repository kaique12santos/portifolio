const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configurações (Fáceis de alterar para outros projetos)
const inputDir = './images'; 
const outputDir = './images-otimizadas';
const MAX_WIDTH = 1000;

// Garante que a pasta de saída existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

async function otimizarImagens() {
  console.log('🧙‍♂️ Iniciando a forja de imagens...\n');
  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    // 1. Ignora vídeos e arquivos que não são imagens (ex: Mago_video.mp4)
    if (!file.match(/\.(png|jpg|jpeg|webp)$/i)) {
      continue; 
    }

    const inputPath = path.join(inputDir, file);
    const fileNameWithoutExt = path.basename(file, path.extname(file));
    const outputPath = path.join(outputDir, `${fileNameWithoutExt}.webp`);

    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();

      // 2. Lógica de decisão
      const needsResize = metadata.width > MAX_WIDTH;
      const needsConversion = metadata.format !== 'webp';

      // 3. Se já for WebP e for menor que o MAX_WIDTH, apenas copia o arquivo e pula
      if (!needsResize && !needsConversion) {
        console.log(`⏩ Ignorado (Já otimizado): ${file} (${metadata.width}px)`);
        fs.copyFileSync(inputPath, outputPath);
        continue;
      }

      // 4. Inicia o pipeline de transformação
      let transform = image;

      if (needsResize) {
        transform = transform.resize({ 
          width: MAX_WIDTH, 
          withoutEnlargement: true // Garante que imagens pequenas não sejam esticadas
        });
      }

      // 5. Salva a nova imagem
      await transform
        .webp({ quality: 80 }) // Garante compressão WebP
        .toFile(outputPath);

      console.log(
        `✅ Processada: ${file} ` +
        `${needsResize ? `[Redimensionada de ${metadata.width}px para ${MAX_WIDTH}px]` : ''} ` +
        `${needsConversion ? '[Convertida para WebP]' : ''}`
      );

    } catch (error) {
      console.error(`❌ Erro ao processar ${file}:`, error.message);
    }
  }
  
  console.log('\n✨ Processo concluído! As imagens prontas estão na pasta:', outputDir);
}

otimizarImagens();