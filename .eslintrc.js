// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,//此檔案的目錄為根層
  parser: 'babel-eslint',//就是我們package安裝的
  parserOptions: {
    sourceType: 'module'//default為script，如果我們要es6以上的話，就設為module
  },
  env: {
    browser: true,
  },
  extends: 'standard',//我使用的是standard的，如果是airbnb的話就會改成airbnb
  // required to lint *.vue files
  plugins: [
    'html'//有很多種，也有react的，vue使用的是html版的
  ],
  // 新增自己要特別設定的規則，0為關閉，1為警告，2直接錯誤
  'rules': {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
