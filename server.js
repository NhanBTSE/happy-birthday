const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 3000;

// MIME types
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav'
};

// Find local Wi-Fi / LAN IP addresses
function getLocalIPs() {
  const interfaces = os.networkInterfaces();
  const ips = [];
  for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        ips.push({ name, ip: net.address });
      }
    }
  }
  return ips;
}

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  // Safe path resolution
  const safePath = path.normalize(decodeURIComponent(reqPath)).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(__dirname, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Không tìm thấy trang');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  const ips = getLocalIPs();
  console.log('\n======================================================');
  console.log('🎂 WEBSITE CHÚC MỪNG SINH NHẬT ĐÃ SẴN SÀNG! 💕');
  console.log('======================================================');
  console.log(`\n💻 1. Mở trên máy tính này:\n   👉 http://localhost:${PORT}`);
  
  if (ips.length > 0) {
    console.log(`\n📱 2. Mở trên ĐIỆN THOẠI hoặc MACBOOK (cùng mạng Wi-Fi):`);
    ips.forEach(item => {
      console.log(`   👉 http://${item.ip}:${PORT}  (${item.name})`);
    });
  }
  console.log('\n💡 Lưu ý: Điện thoại/Macbook chỉ cần kết nối cùng Wi-Fi');
  console.log('   với máy tính này là gõ link trên vào Safari/Chrome là xem được ngay!');
  console.log('======================================================\n');
});
