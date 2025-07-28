// Simulazione API endpoint per l'invio email
// In produzione, questo dovrebbe essere sostituito con un vero servizio backend

export default async function handler(req, res) {
  // Abilita CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const formData = req.body;
    
    // Validazione base
    if (!formData.nome || !formData.email || !formData.telefono) {
      res.status(400).json({ error: 'Campi obbligatori mancanti' });
      return;
    }

    // Qui dovresti integrare un servizio email come:
    // - Nodemailer con SMTP
    // - SendGrid
    // - Mailgun
    // - AWS SES
    
    console.log('Richiesta preventivo ricevuta:', formData);
    
    // Simulazione invio email
    const emailContent = `
      Nuova richiesta preventivo da ${formData.nome} ${formData.cognome}
      
      Dati cliente:
      - Nome: ${formData.nome} ${formData.cognome}
      - Email: ${formData.email}
      - Telefono: ${formData.telefono}
      - Indirizzo: ${formData.indirizzo}, ${formData.citta}
      - Servizio richiesto: ${formData.tipoServizio}
      - Messaggio: ${formData.messaggio}
    `;
    
    // In produzione, sostituire con vero invio email
    // await sendEmail({
    //   to: '2mnextenergy@gmail.com',
    //   subject: 'Nuova richiesta preventivo',
    //   text: emailContent
    // });
    
    res.status(200).json({ 
      success: true, 
      message: 'Richiesta inviata con successo' 
    });
    
  } catch (error) {
    console.error('Errore invio email:', error);
    res.status(500).json({ 
      error: 'Errore interno del server' 
    });
  }
}