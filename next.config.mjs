/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'cdn.pixabay.com', // Add this domain for Pixabay
          'images.unsplash.com' ,// Add this domain for Unsplash
           'media.istockphoto.com'
        ],
      }
};

export default nextConfig;
