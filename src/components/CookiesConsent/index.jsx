import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieConsentBanner = () => {
  const handleAccept = () => {
    // Code à exécuter lorsque l'utilisateur accepte les cookies
    console.log('Cookies acceptés!');
  };

  const handleDecline = () => {
    // Code à exécuter lorsque l'utilisateur refuse les cookies
    console.log('Cookies refusés!');
  };

  return (
    <CookieConsent
      location="bottom" // Position de la bannière (top, bottom)
      buttonText="Accepter" // Texte du bouton d'acceptation
      declineButtonText="Refuser" // Texte du bouton de refus
      cookieName="monCookieConsent" // Nom du cookie de consentement
      enableDeclineButton // Activer le bouton de refus
      onAccept={handleAccept} // Fonction appelée lorsque les cookies sont acceptés
      onDecline={handleDecline} // Fonction appelée lorsque les cookies sont refusés
    >
      Ce site utilise des cookies pour améliorer l'expérience utilisateur.
    </CookieConsent>
  );
};

export default CookieConsentBanner;
