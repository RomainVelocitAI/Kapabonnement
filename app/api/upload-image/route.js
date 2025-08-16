import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';

// Configuration Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { image, fileName, fileType } = body;

    // Validation des données
    if (!image || !fileName) {
      return NextResponse.json(
        { error: 'Image et nom de fichier requis' },
        { status: 400 }
      );
    }

    // Déterminer le dossier selon le type de fichier (même logique que l'original)
    let folder = 'templates';
    if (fileName.includes('logo')) {
      folder = 'templates/logos';
    } else if (fileName.includes('favicon')) {
      folder = 'templates/favicons';
    } else if (fileName.includes('photo')) {
      folder = 'templates/photos';
    } else if (fileName.includes('menu') || fileType === 'pdf') {
      folder = 'templates/menus';
    }

    // Options d'upload pour Cloudinary (similaire à l'original)
    const uploadOptions = {
      folder: folder,
      public_id: `${Date.now()}_${fileName.replace(/\.[^/.]+$/, '')}`,
      resource_type: 'auto', // Détection automatique (image, pdf, etc.)
      quality: 'auto',
      format: fileType !== 'pdf' ? 'jpg' : undefined
    };

    // Upload vers Cloudinary
    const result = await cloudinary.v2.uploader.upload(image, uploadOptions);

    // Retourner l'URL sécurisée
    return NextResponse.json({
      success: true,
      url: result.secure_url,
      public_id: result.public_id,
      format: result.format,
      size: result.bytes
    });

  } catch (error) {
    console.error('Erreur upload Cloudinary:', error);
    
    // Gestion des erreurs spécifiques
    if (error.message && error.message.includes('File size too large')) {
      return NextResponse.json(
        { error: 'Fichier trop volumineux. Taille maximale: 10MB' },
        { status: 413 }
      );
    }
    
    if (error.message && error.message.includes('Invalid image file')) {
      return NextResponse.json(
        { error: 'Format de fichier non supporté' },
        { status: 400 }
      );
    }

    // Erreur générique
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'upload du fichier',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Gérer les requêtes OPTIONS pour CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}