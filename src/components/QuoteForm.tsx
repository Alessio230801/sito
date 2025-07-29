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
      }, (error) => {
        console.error(error.text);
        setIsSubmitting(false);
        setSubmitStatus('error');
      });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4">
      {/* Qui vanno tutti i tuoi campi input come prima */}
      {/* Assicurati che ogni input abbia un attributo name="..." coerente */}
      {/* Aggiungi messaggi di stato se vuoi: */}
      {submitStatus === 'success' && <p className="text-green-600">Messaggio inviato con successo!</p>}
      {submitStatus === 'error' && <p className="text-red-600">Errore nell'invio. Riprova.</p>}
      <button type="submit" disabled={isSubmitting} className="bg-red-600 text-white p-2 rounded">
        {isSubmitting ? 'Invio in corso...' : 'Invia Preventivo'}
      </button>
    </form>
  );
};

export default QuoteForm;
