const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false
})

module.exports = withBundleAnalyzer({
  env: {
    Storage_Url: 'https://storage.googleapis.com/united-rope-234818.appspot.com'
  },
  output: "export",
  images: {
    // You can re-enable this if you are not using a static export
    unoptimized: true,
    domains: [
      'pbs.twimg.com',
      'lh3.googleusercontent.com',
      'storage.googleapis.com',
      'united-rope-234818.appspot.com',
      'avatars.githubusercontent.com'
    ],
  },
});