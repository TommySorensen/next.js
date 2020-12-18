export default function handler(req, res) {
  // In real world we would authendicate here and afterwards redirect to logged in page
  res.redirect(307, '/?callback')
}