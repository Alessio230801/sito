import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
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

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    if (!formRef.current) return;

    emailjs.sendForm('service_g7fw87i', 'template_yhuipws', formRef.current, 'He_qI-WYwbTg8XZWY')
      .then(() => {
        setIsSubmitting(false);
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
        // Reset form after 3 seconds
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }, (error) => {
        console.error('EmailJS Error:', error.text);
        setIsSubmitting(false);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      });
  };

  return (
    <section id="preventivo" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Richiedi un Preventivo Gratuito</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Compila il form per ricevere un preventivo personalizzato per i nostri servizi di climatizzazione e riscaldamento.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Nome e Cognome */}
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

              {/* Email e Telefono */}
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

              {/* Indirizzo e Città */}
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
                    placeholder="La tua città"
                  />
                </div>
              </div>

              {/* Tipo Servizio */}
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
                  <option value="Installazione Condizionatore">Installazione Condizionatore</option>
                  <option value="Installazione Caldaia">Installazione Caldaia</option>
                  <option value="Manutenzione Condizionatore">Manutenzione Condizionatore</option>
                  <option value="Manutenzione Caldaia">Manutenzione Caldaia</option>
                  <option value="Riparazione Condizionatore">Riparazione Condizionatore</option>
                  <option value="Riparazione Caldaia">Riparazione Caldaia</option>
                  <option value="Consulenza Tecnica">Consulenza Tecnica</option>
                  <option value="Altro">Altro</option>
                </select>
              </div>

              {/* Messaggio */}
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
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Descrivi le tue esigenze, il tipo di ambiente da climatizzare, eventuali preferenze sui prodotti, o qualsiasi altra informazione utile per il preventivo..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-md p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">
                        Preventivo inviato con successo! Ti contatteremo presto.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-red-800">
                        Errore nell'invio del preventivo. Riprova o contattaci direttamente.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white transition-colors duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      Invia Richiesta Preventivo
                    </>
                  )}
                </button>
              </div>

              {/* Privacy Note */}
              <div className="text-center text-sm text-gray-500">
                <p>
                  I tuoi dati personali verranno utilizzati esclusivamente per elaborare la tua richiesta di preventivo 
                  e non verranno condivisi con terze parti.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;