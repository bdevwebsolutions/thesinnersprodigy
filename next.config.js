const withReactSvg = require('next-react-svg')
const path = require('path')
 
module.exports = withReactSvg({
  include: path.resolve(__dirname, 'media/svg'),
  webpack(config, options) {
    return config
  },
  images: {
    domains: ['cdn.shopify.com'],
  },
})