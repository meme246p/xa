
import { ContactFormData } from '../types';

/**
 * Sends a formatted message to a Telegram channel via the Bot API.
 * Uses the credentials provided by the user and follows the requested layout.
 */
export const sendTelegramMessage = async (data: ContactFormData): Promise<boolean> => {
  const BOT_TOKEN = '8325108994:AAH2UvSy3ovFT_W_FE-shLLd5RPEzJHC7bM'; 
  const CHAT_ID = '-1003377285109';

  // Fetching IP and Country information for the requested format
  let countryInfo = 'N/A';
  try {
    const geoRes = await fetch('https://ipapi.co/json/');
    if (geoRes.ok) {
      const geo = await geoRes.json();
      const country = geo.country_name || 'Ethiopia';
      const ip = geo.ip || 'Unknown IP';
      countryInfo = `${country} (${ip})`;
    }
  } catch (e) {
    console.warn('Geolocation lookup failed, using fallback.', e);
  }

  const separator = '────────────────────────────';
  
  const messageText = `${separator}
NEW LEAD — CALL ALIGN WEBSITE
${separator}

Full Name
${data.fullName}

Country
${countryInfo}

Email
${data.email}

Phone
${data.phone || 'N/A'}

Subject
${data.subject || 'General Inquiry'}

Message
${data.message}

${separator}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: messageText,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API Error:', errorData);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Failed to send Telegram message:', error);
    return false;
  }
};
