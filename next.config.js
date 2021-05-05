const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false
})

module.exports = withBundleAnalyzer({
  future: {
    webpack5: true,
    modern: true,
  },
  env: {
    Storage_Url: 'https://storage.googleapis.com/united-rope-234818.appspot.com'
  },
  images: {
    domains: [
      'pbs.twimg.com',
      'lh3.googleusercontent.com',
      'storage.googleapis.com',
      'united-rope-234818.appspot.com'
    ],
  },
});