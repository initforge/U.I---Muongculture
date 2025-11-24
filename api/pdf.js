// Vercel API route để proxy PDF từ Vercel Blob Storage
// Tránh lỗi 403 CORS khi fetch trực tiếp từ client

const PDF_BLOB_URL = 'https://erub5hkiytu5lnuq.public.blob.vercel-storage.com/Giai%20%C4%91i%E1%BB%87u%20v%C6%B0%E1%BB%A3t%20thung%20l%C5%A9ng.pdf'

export default async function handler(req, res) {
  try {
    // Fetch PDF từ Vercel Blob Storage (server-side, không bị CORS)
    const response = await fetch(PDF_BLOB_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/pdf',
      },
    })

    if (!response.ok) {
      return res.status(response.status).json({
        error: `Failed to fetch PDF: ${response.status} ${response.statusText}`,
      })
    }

    // Get PDF as buffer
    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Set headers để browser hiểu đây là PDF
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Length', buffer.length)
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')

    // Send PDF buffer
    res.send(buffer)
  } catch (error) {
    console.error('Error proxying PDF:', error)
    res.status(500).json({
      error: `Internal server error: ${error.message}`,
    })
  }
}

