import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import './styles.css';

interface FormData {
  name: string;
  dob: string;
  email: string;
  countryCode: string;
  phone: string;
  address: string;
  formation: string;
  experiences: string;
  skills: string;
  langues: string[];
  loisirs: string[];
}

const Formulaire = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    dob: '',
    email: '',
    countryCode: '+212',
    phone: '',
    address: '',
    formation: 'Bac',
    experiences: '0-6 mois',
    skills: '',
    langues: [],
    loisirs: [],
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    let checked = false;

    if (type === 'checkbox') {
      checked = (e.target as HTMLInputElement).checked;
    }

    if (type === 'checkbox') {
      const updatedArray = checked
        ? [...(formData[name as keyof FormData] as string[]), value]
        : (formData[name as keyof FormData] as string[]).filter(
            (item) => item !== value
          );
      setFormData({ ...formData, [name]: updatedArray });
    } else {
      setFormData({ ...formData, [name]: value });
      validateField(name, value);
    }
  };

  const validateField = (name: string, value: string) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!validateName(value)) {
          error =
            'Nom complet invalide. Le nom doit être en majuscules et le prénom doit commencer par une majuscule.';
        }
        break;
      case 'dob':
        if (!validateAge(new Date(value))) {
          error = 'Vous devez avoir plus de 18 ans.';
        }
        break;
      case 'email':
        if (!validateEmail(value)) {
          error =
            'Email invalide. Doit se composer de caractères + @ + caractères + .com ou .fr';
        }
        break;
      case 'address':
        if (!validateAddress(value)) {
          error =
            'Adresse invalide. Ne doit pas dépasser 100 caractères et ne doit pas contenir de caractères spéciaux.';
        }
        break;
      case 'skills':
        if (!validateText(value)) {
          error =
            'Les compétences ne doivent pas contenir de chiffres ni de caractères spéciaux.';
        }
        break;
      default:
        break;
    }

    setErrors({ ...errors, [name]: error });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!validateName(formData.name)) {
      newErrors.name =
        'Nom complet invalide. Le nom doit être en majuscules et le prénom doit commencer par une majuscule.';
    }

    if (!validateAge(new Date(formData.dob))) {
      newErrors.dob = 'Vous devez avoir plus de 18 ans.';
    }

    if (!validateEmail(formData.email)) {
      newErrors.email =
        'Email invalide. Doit se composer de caractères + @ + caractères + .com ou .fr';
    }

    if (!validateAddress(formData.address)) {
      newErrors.address =
        'Adresse invalide. Ne doit pas dépasser 100 caractères et ne doit pas contenir de caractères spéciaux.';
    }

    if (!validateText(formData.skills)) {
      newErrors.skills =
        'Les compétences ne doivent pas contenir de chiffres ni de caractères spéciaux.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage(true);
      console.log(formData);
    } else {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const validateName = (name: string) => {
    const regex = /^[A-Z]+ [A-Z][a-z]*$/;
    return regex.test(name);
  };

  const validateAge = (dob: Date) => {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age > 18;
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.(com|fr|net|org|edu|gov|uk|de|ca)$/;
    return regex.test(email);
  };

  const validateAddress = (address: string) => {
    const regex = /^[a-zA-Z0-9\s,.'-]{1,100}$/;
    return regex.test(address);
  };

  const validateText = (text: string) => {
    const regex = /^[a-zA-Z\s,.'-]+$/;
    return regex.test(text);
  };

  return (
    <div>
      <br />

      <form
        id="cvForm"
        onSubmit={handleSubmit}
        style={{
          margin: '0 auto',
          maxWidth: '600px',
          border: '4px solid #977392',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 0 50px rgba(0, 0, 0, 0.3)',
        }}
      >
        <label
          htmlFor="name"
          className="section-Label required"
          style={{
            color: '#6087A7',
            fontSize: '28px',
            fontFamily: 'Times New Roman, Times, serif',
          }}
        >
          Nom complet :
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => {
            handleChange(e);
            validateField('name', e.target.value);
          }}
          required
          className={errors.name ? 'error' : ''}
          title="Le nom doit être en majuscules et le prénom doit commencer par une majuscule. Pas de chiffres ni de caractères spéciaux."
        />
        {errors.name && <span className="error-message">{errors.name}</span>}

        <label
          htmlFor="dob"
          className="section-Label required"
          style={{
            color: '#6087A7',
            fontSize: '28px',
            fontFamily: 'Times New Roman, Times, serif',
          }}
        >
          Date de naissance :
        </label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={(e) => {
            handleChange(e);
            validateField('dob', e.target.value);
          }}
          required
          title="Vous devez avoir plus de 18 ans."
        />
        {errors.dob && <span className="error-message">{errors.dob}</span>}

        <label
          htmlFor="email"
          className="section-Label required"
          style={{
            color: '#6087A7',
            fontSize: '28px',
            fontFamily: 'Times New Roman, Times, serif',
          }}
        >
          Email :
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => {
            handleChange(e);
            validateField('email', e.target.value);
          }}
          required
          title="Email invalide. Doit se composer de caractères + @ + caractères + .com ou .fr etc "
        />
        {errors.email && <span className="error-message">{errors.email}</span>}

        <label
          htmlFor="phone"
          className="section-Label required"
          style={{
            color: '#6087A7',
            fontSize: '28px',
            fontFamily: 'Times New Roman, Times, serif',
          }}
        >
          Téléphone :
        </label>
        <div style={{ display: 'flex' }}>
          <select
            id="countryCode"
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            required
            title="Code du pays"
            style={{ marginRight : '5px'}}
          >
            <option value="+212">+212</option>
            <option value="+49">+49</option>
            <option value="+216">+216</option>
            <option value="+260">+260</option>
            <option value="+41">+41</option>
            <option value="+32">+32</option>
            <option value="+16">+16</option>
            <option value="+26">+26</option>
            <option value="+214">+214</option>
          </select>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            title="Entrez un numéro de téléphone valide"
            style={{flex:1}}
          />
        </div>

        <label
          htmlFor="address"
          className="section-Label required"
          style={{
            color: '#6087A7',
            fontSize: '28px',
            fontFamily: 'Times New Roman, Times, serif',
          }}
        >
          Adresse :
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={(e) => {
            handleChange(e);
            validateField('address', e.target.value);
          }}
          required
          title="Adresse ne doit pas dépasser 100 caractères et ne doit pas contenir de caractères spéciaux."
        />
        {errors.address && (
          <span className="error-message">{errors.address}</span>
        )}

        <label
          htmlFor="formation"
          className="section-Label required"
          style={{
            color: '#6087A7',
            fontSize: '28px',
            fontFamily: 'Times New Roman, Times, serif',
          }}
        >
          Formation :
        </label>
        <select
          id="formation"
          name="formation"
          value={formData.formation}
          onChange={handleChange}
          required
          title="Sélectionnez votre niveau de formation"
        >
         <option className="text-5xl" >Bac</option>
          <option className="text-5xl">Bac+1</option>
          <option className="text-5xl">Bac+2</option>
          <option className="text-5xl">Bac+3</option>
          <option className="text-5xl">Bac+4</option>
          <option className="text-5xl">Bac+5</option>
        </select>

        <label htmlFor="experiences" className="section-Label required" style={{ color: '#6087A7' , fontSize: '28px', fontFamily: 'Times New Roman, Times, serif' }}>
          Expériences professionnelles :
        </label>
        <select
          id="experiences"
          name="experiences"
          value={formData.experiences}
          onChange={handleChange}
          required
          title="Sélectionnez votre expérience professionnelle"
        >
          <option value="0-6 mois">0-6 mois</option>
          <option value="6-12 mois">6-12 mois</option>
          <option value="1-2 ans">1-2 ans</option>
          <option value="3 ans et plus">3 ans et plus</option>
        </select>

        <label htmlFor="skills" className="section-Label required" style={{ color: '#6087A7' , fontSize: '28px', fontFamily: 'Times New Roman, Times, serif' }}>
          Compétences :
        </label>
        <textarea
          id="skills"
          name="skills"
          value={formData.skills}
          onChange={(e) => {
            handleChange(e);
            validateField('skills', e.target.value);
          }}
          title="Les compétences ne doivent pas contenir de chiffres ni de caractères spéciaux."
        />
        {errors.skills && (
          <span className="error-message">{errors.skills}</span>
        )}
        
        <label htmlFor="langues" className="section-Label required " style={{ color: '#6087A7' , fontSize: '28px', fontFamily: 'Times New Roman, Times, serif' }} >
          Langues :
        </label>
        <label>
          <input
            type="checkbox"
            name="langues"
            value="anglais"
            checked={formData.langues.includes('anglais')}
            onChange={handleChange}
            style={{ marginRight : '5px'}}
          />
          Anglais
        </label>
        <label>
          <input
            type="checkbox"
            name="langues"
            value="français"
            checked={formData.langues.includes('français')}
            onChange={handleChange}
            style={{ marginRight : '5px'}}
          />
          Français
        </label>
        <label>
          <input
            type="checkbox"
            name="langues"
            value="espagnol"
            checked={formData.langues.includes('espagnol')}
            onChange={handleChange}
            style={{ marginRight : '5px'}}
          />
          Espagnol
        </label>
        <label>
          <input
            type="checkbox"
            name="langues"
            value="arabe"
            checked={formData.langues.includes('arabe')}
            onChange={handleChange}
            style={{ marginRight : '5px'}}
          />
          Arabe
        </label>
        <label>
          <input
            type="checkbox"
            name="langues"
            value="Turc"
            checked={formData.langues.includes('Turc')}
            onChange={handleChange}
            style={{ marginRight : '5px'}}
          />
          Turc
        </label>

        <label>
          <input
            type="checkbox"
            name="langues"
            value="Chinois"
            checked={formData.langues.includes('Chinois')}
            onChange={handleChange}
            style={{ marginRight : '5px'}}
          />
          Chinois
        </label>
        <label>
          <input
            type="checkbox"
            name="langues"
            value="Japonais"
            checked={formData.langues.includes('Japonais')}
            onChange={handleChange}
            style={{ marginRight : '5px'}}
          />
          Japonais
        </label>
        <label>
          <input
            type="checkbox"
            name="langues"
            value="Portugais"
            checked={formData.langues.includes('Portugais')}
            onChange={handleChange}
            style={{ marginRight : '5px'}}
          />
          Portugais
        </label>
        <label>
          <input
            type="checkbox"
            name="langues"
            value="Coréen"
            checked={formData.langues.includes('Coréen')}
            onChange={handleChange}
            style={{ marginRight : '5px'}}
          />
          Coréen
        </label>
        <label>
          <input
            type="checkbox"
            name="langues"
            value="Russe"
            checked={formData.langues.includes('Russe')}
            onChange={handleChange}
            style={{ marginRight : '5px'}}
          />
          Russe
        </label>
        <label>
          <input
            type="checkbox"
            name="langues"
            value="Allemand"
            checked={formData.langues.includes('Allemand')}
            onChange={handleChange}
            style={{ marginRight : '5px'}}
          />
          Allemand
        </label>

        <label
          className="section-Label required"
          style={{
            color: '#6087A7',
            fontSize: '28px',
            fontFamily: 'Times New Roman, Times, serif',
          }}
        >
          Loisirs :
        </label>
        <label>
          <input
            type="checkbox"
            name="loisirs"
            value="sports"
            checked={formData.loisirs.includes('sports')}
            onChange={handleChange}
            style={{ marginRight : '5px'}}
          />
          Sports
        </label>
        <label>
          <input
            type="checkbox"
            name="loisirs"
            value="lecture"
            checked={formData.loisirs.includes('lecture')}
            onChange={handleChange}
            style={{ marginRight : '5px'}}
          />
          Lecture
        </label>
        <label>
          <input
            type="checkbox"
            name="loisirs"
            value="voyage"
            checked={formData.loisirs.includes('voyage')}
            onChange={handleChange}
            style={{ marginRight : '5px'}}
          />
          Voyage
        </label>
        <label>
          <input
            type="checkbox"
            name="loisirs"
            value="Cuisine"
            checked={formData.loisirs.includes('Cuisine')}
            onChange={handleChange}
            style={{ marginRight : '5px'}}
          />
          Cuisine
        </label>
        <label>
          <input
            type="checkbox"
            name="loisirs"
            value="Musique"
            checked={formData.loisirs.includes('Musique')}
            onChange={handleChange}
            style={{ marginRight : '5px'}}
          />
          Musique
        </label>


        <button type="submit">Soumettre</button>
      </form>

      {successMessage && (
        <div className="success-message-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1px' }}>
          <div className="success-message" style={{ backgroundColor: '#5F91AD', color: 'white', padding: '20px', borderRadius: '5px' }}>
           Formulaire soumis avec succès!
          </div>
        </div>
      )}
    </div>
  );
};

export default Formulaire;
