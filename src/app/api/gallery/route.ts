import fs from 'fs';
import path from 'path';

export async function GET() {
    const galleryDir = path.join(process.cwd(), 'public', 'gallery');

    try {
        const files = fs.readdirSync(galleryDir);

        const images = files.filter((file) => 
            file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.webp') || file.endsWith('.gif')
        );

        return new Response(
            JSON.stringify(images.map((image) => `/gallery/${image}`)), 
            { 
                status: 200, 
                headers: { 'Content-Type': 'application/json' },
            }
        );
    } catch (error) {
        return new Response(JSON.stringify({message: error}) , { status: 500 });
    }
}
