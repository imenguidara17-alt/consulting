import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";

export function ContactPage() {
  // état du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // changement de champ
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // soumission du formulaire
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/mldppqrq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (res.ok) {
        alert("Message envoyé !");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        console.error("Erreur Formspree :", data);
        alert("Erreur lors de l'envoi : " + (data.error || res.statusText));
      }
    } catch (err) {
      console.error(err);
      alert("Erreur réseau : impossible d'envoyer le formulaire");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Formulaire */}
        <div className="bg-white p-10 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-indigo-700">Contactez Nous!</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} required
              className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required
              className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" />
            <input type="text" name="phone" placeholder="Numéro de téléphone" value={formData.phone} onChange={handleChange} required
              className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" />
            <select name="subject" value={formData.subject} onChange={handleChange} required
              className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition">
              <option value="">Sujet</option>
              <option value="Consulting">Consulting</option>
              <option value="Marketing">Marketing</option>
              <option value="Site Vitrine">Site Vitrine</option>
              <option value="Site E-Commerce">Site E-Commerce</option>
              <option value="Other">Autre</option>
            </select>
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required
              className="border border-gray-300 p-3 rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" />
            <button type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition transform hover:scale-105">
              Envoyer
            </button>
          </form>
        </div>

        {/* Informations de l'agence */}
        <div className="bg-white p-10 rounded-3xl shadow-2xl flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-indigo-700">Contact Information</h2>

          <div className="flex items-center gap-3 text-gray-700">
            <FaPhone className="text-indigo-600" />
            <span>+216 71 452 360</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <FaEnvelope className="text-indigo-600" />
            <span>contact@marketingconsult.com</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <FaMapMarkerAlt className="text-indigo-600" />
            <span>Tunis, Lac 1</span>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">Social Media</h3>
            <div className="flex gap-4 text-indigo-600">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-800 transition"><FaFacebookF size={24} /></a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-800 transition"><FaTiktok size={24} /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-800 transition"><FaInstagram size={24} /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-800 transition"><FaLinkedin size={24} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">Nos Horaires</h3>
            <p>Lundi – Vendredi: 9:00 H – 18:00 H</p>
            <p>Samedi: 10:00 H – 14:00 H</p>
            <p>Dimanche: Fermée</p>
          </div>
        </div>

      </div>
    </div>
  );
}
