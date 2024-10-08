// pages/api/hello.js

export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000') // Or specify your frontend domain
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Authorization, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    )
    
    if (req.method === 'OPTIONS') {
      res.status(200).end() // Preflight check
      return
    }
  
    // Actual response
    res.status(200).json({ message: 'CORS enabled on this route' })
  }
  