import { AuthResponse, LoginCredentials } from '@/types/auth';



export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    // Gerçek API yerine sahte bir gecikme ve yanıt oluşturuyoruz
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Başarılı login simülasyonu
    if (credentials.email === 'test@example.com' && credentials.password === 'password') {
      return {
        user: {
          id: '1',
          email: credentials.email,
          name: 'Test Kullanıcı',
        },
        token: 'fake-jwt-token',
      };
    }

    // Hatalı login simülasyonu
    throw new Error('Geçersiz email veya şifre');
  },
}; 