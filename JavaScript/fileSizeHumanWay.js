// this snippets works if you need to display the file size in Kb Kib MB Gb, etc..
// normally javascript return the file size like a integer

function humanFileSize (size) {
  var i = Math.floor(Math.log(size) / Math.log(1024))
  return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i]
}
