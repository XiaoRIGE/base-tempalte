module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        "commit-rule": ({ raw }) => {
          return [
            /^\[(feat|fix|docs|style|build|refactor|revert|test|perf|chore)].+/g.test(raw),
            `commit备注信息格式错误，格式为 <[type]: 修改内容>，type支持${types.join(",")}`,
          ];
        },
      },
    },
  ],
}
