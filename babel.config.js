module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@models': './src/app/models',
        '@controllers': './src/app/controllers',
        '@middlewares': './src/app/middlewares',
        '@config': './src/config',
        '@database': './src/database',
        '@helpers': './src/helpers',
        '@routes': './src/routes',
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}