/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'raw.githubusercontent.com', //Настройка для подгрузки картинок с внешних источников
            }
        ]
    }
};

export default nextConfig;
