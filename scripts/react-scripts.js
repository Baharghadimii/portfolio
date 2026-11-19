// Runs react-scripts with the OpenSSL legacy provider only on Node 17+.
// react-scripts 3 (webpack 4) needs it on Node 17+, and Node 16 and older
// refuse to start if the flag is in NODE_OPTIONS (Amplify builds with Node 16).
const { spawnSync } = require('child_process')

const major = Number(process.versions.node.split('.')[0])
const env = { ...process.env }
if (major >= 17 && !/--openssl-legacy-provider/.test(env.NODE_OPTIONS || '')) {
  env.NODE_OPTIONS = `${env.NODE_OPTIONS || ''} --openssl-legacy-provider`.trim()
}

const result = spawnSync('react-scripts', process.argv.slice(2), {
  stdio: 'inherit',
  env,
  shell: true,
})
process.exit(result.status === null ? 1 : result.status)
