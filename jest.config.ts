export default {
    // 何回テストに失敗するとテスト自体を中止させるかの設定 デフォルトは0
    // bail: 1,
    // 各テスト前にモックコール、インスタンス、コンテキスト、結果をクリアするかの設定 デファルトはfalse
    clearMocks: true,
    collectCoverage: false,
    coverageDirectory: "coverage",
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    // テスト環境の設定 デフォルトはNode.js フロントエンドでブラウザ環境にしたい場合はjsdom
    testEnvironment: "jest-environment-jsdom",
    transform: { "^.+\\.(ts|tsx)$": ["esbuild-jest", { sourcemap: true }] },
    // 全てのテストで共通のコードを記述したファイルを指定
    setupFilesAfterEnv: ["./jest.setup.ts"],
    reporters: [
      "default",
      [
        "jest-html-reporters",
        {
          publicPath: "__reports__",
          filename: "jest.html",
        },
      ],
    ],
  };
  