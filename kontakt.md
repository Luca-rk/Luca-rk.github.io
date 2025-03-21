---
layout: page
title: Kontakt
permalink: /kontakt/
---

<div class="section bg-dark">
  <div class="wrapper">
    <h1 class="fade-in">Kontaktieren Sie uns</h1>
    <p class="fade-in">Haben Sie Fragen oder möchten Sie mehr über unsere Dienstleistungen erfahren? Füllen Sie das folgende Formular aus oder kontaktieren Sie uns direkt.</p>
    
    <div class="contact-info fade-in">
      <div class="contact-item">
        <i class="contact-icon">📞</i>
        <div>
          <h3>Telefon</h3>
          <p>+49 123 456789</p>
        </div>
      </div>
      
      <div class="contact-item">
        <i class="contact-icon">✉️</i>
        <div>
          <h3>E-Mail</h3>
          <p>info@luca-automatisierung.de</p>
        </div>
      </div>
      
      <div class="contact-item">
        <i class="contact-icon">📍</i>
        <div>
          <h3>Adresse</h3>
          <p>Musterstraße 123<br>12345 Musterstadt</p>
        </div>
      </div>
    </div>

    <div class="contact-form fade-in">
      <form action="https://formspree.io/f/deine-formspree-id" method="POST">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
        </div>
        
        <div class="form-group">
          <label for="email">E-Mail:</label>
          <input type="email" id="email" name="_replyto" required>
        </div>
        
        <div class="form-group">
          <label for="subject">Betreff:</label>
          <input type="text" id="subject" name="subject" required>
        </div>
        
        <div class="form-group">
          <label for="message">Nachricht:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        
        <button type="submit" class="button">Nachricht senden</button>
      </form>
    </div>
  </div>
</div>