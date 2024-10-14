import HTTP from '@/services/axios';

export class contactService {
     async sendMessage(message: string) {
          await HTTP.get(
               `https://api.telegram.org/bot${import.meta.env.VITE_API_TELEGRA_TOKEN}/sendMessage?chat_id=${import.meta.env.VITE_API_TELEGRAM_CHAT_ID}&text=email: ${message}`
          );
     }
}

export default new contactService();
