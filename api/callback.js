export default function handler(req, res) {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  // Verify token (must match what you set in Meta dashboard)
  if (mode === 'subscribe' && token === 'instagram_webhook_secret') {
    console.log('Webhook verified');
    res.status(200).send(challenge);
  } else {
    res.status(403).send('Forbidden');
  }
}
