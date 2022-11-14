import remarkFrontmatter from 'remark-frontmatter';
import rehypeHighlight from 'rehype-highlight';

/** @type {import('next').NextConfig} */

export default {
  reactStrictMode: true,
  
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [remarkFrontmatter],
            rehypePlugins: [rehypeHighlight],
          },
        },
      ],
    });

    return config;
  },

  pageExtensions: ['js', 'jsx', 'md', 'mdx'],


  images: {
    domains: ['res.cloudinary.com'],
},
}


