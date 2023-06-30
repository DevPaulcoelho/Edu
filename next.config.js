module.exports = {
    async rewrites() {
        return [
          {
            source: '/apis/:path*',
            destination: 'http://localhost:4000/:path*',
          },
        
        ]
      },
    
  }
