import React, { useState } from 'react';
import { Send, User, Mail, Phone, MapPin, MessageSquare, Wrench } from 'lucide-react';

interface FormData {
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  indirizzo: string;
  citta: string;
  tipoServizio: string;
  messaggio: string;
}

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    indirizzo: '',
    citta: '',
    tipoServizio: '',
    messaggio: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulazione invio per sviluppo
      // In produzione, sostituire con servizio email reale
      console.log('Dati preventivo:', formData);
      
      // Simula delay di rete
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        indirizzo: '',
        citta: '',
        tipoServizio: '',
        messaggio: ''
      });
    } catch (error) {
      console.error('Errore invio form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Richiedi un Preventivo Gratuito</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Compila il form sottostante per ricevere un preventivo personalizzato per i nostri servizi di climatizzazione e riscaldamento.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="inline-block mr-2" size={16} />
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Il tuo nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="cognome" className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="inline-block mr-2" size={16} />
                    Cognome *
                  </label>
                  <input
                    type="text"
                    id="cognome"
                    name="cognome"
                    value={formData.cognome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Il tuo cognome"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="inline-block mr-2" size={16} />
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="la-tua-email@esempio.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="inline-block mr-2" size={16} />
                    Telefono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Il tuo numero di telefono"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="indirizzo" className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="inline-block mr-2" size={16} />
                    Indirizzo *
                  </label>
                  <input
                    type="text"
                    id="indirizzo"
                    name="indirizzo"
                    value={formData.indirizzo}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Via, numero civico"
                  />
                </div>
                
                <div>
                  <label htmlFor="citta" className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="inline-block mr-2" size={16} />
                    Città *
                  </label>
                  <input
                    type="text"
                    id="citta"
                    name="citta"
                    value={formData.citta}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Città e CAP"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="tipoServizio" className="block text-sm font-medium text-gray-700 mb-2">
                  <Wrench className="inline-block mr-2" size={16} />
                  Tipo di Servizio *
                </label>
                <select
                  id="tipoServizio"
                  name="tipoServizio"
                  value={formData.tipoServizio}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Seleziona il servizio</option>
                  <option value="climatizzazione">Climatizzazione / Condizionatori</option>
                  <option value="riscaldamento">Riscaldamento / Caldaie</option>
                  <option value="assistenza">Assistenza Tecnica</option>
                  <option value="manutenzione">Manutenzione</option>
                  <option value="altro">Altro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="inline-block mr-2" size={16} />
                  Messaggio
                </label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  value={formData.messaggio}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Descrivi le tue esigenze o richieste specifiche..."
                />
              </div>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-md p-4">
                  <p className="text-green-800 font-medium">
                    ✅ Richiesta inviata con successo! Ti contatteremo presto.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4">
                  <p className="text-red-800 font-medium">
                    ❌ Errore nell'invio. Riprova o contattaci direttamente.
                  </p>
                </div>
              )}
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      Invia Richiesta
                    </>
                  )}
                </button>
              </div>
              
              <p className="text-sm text-gray-500 text-center">
                * Campi obbligatori. I tuoi dati saranno trattati nel rispetto della privacy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;