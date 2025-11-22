import { Container } from '@styles/global';
import { PaymentContainer, PremiumPageMain, QrWrapper } from './style.premiumPayment';
import useAuth from '@hooks/useAuth';
import { Loading } from '@components/Loading/Loading.component';
import Button from '@components/Buttons/Buttons';
import { api } from '@services/api';
import handleAxiosErrors from '@utils/axiosErrorStandard';
import { useState } from 'react';

const PremiumPaymentPage = () => {
  const { userData, userLoading } = useAuth();
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const subscribePremium = async () => {
    try {
      const subscribeRequest = await api.post('/payment', {
        email: userData?.email,
        userId: userData?.id,
        type: 'pix'
      } as { email: string; userId: string; type: string });
      console.log(subscribeRequest);
      const qrCode = `data:image/png;base64,${subscribeRequest.data.qr_code_base64}`;

      setQrCodeUrl(qrCode);
    } catch (error) {
      handleAxiosErrors(error);
    }
  };

  return (
    <PremiumPageMain>
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        {userLoading ? (
          <Loading />
        ) : (
          <PaymentContainer>
            {!qrCodeUrl ? (
              <>
                <span className='tag'>Plano Premium</span>
                <h1>Hey, {userData?.username}</h1>
                <h2>Venha se juntar à comunidade premium</h2>

                <p className='description'>
                  Desbloqueie recursos exclusivos, avaliações em destaque e mais visibilidade para o seu perfil.
                </p>

                <ul className='benefits'>
                  <li>Avaliações em destaque na comunidade</li>
                </ul>

                <div className='priceRow'>
                  <span className='price'>
                    R$ <strong>09,90</strong>
                  </span>
                  <span className='period'>/ mês</span>
                </div>

                <Button onClick={subscribePremium}>SER PREMIUM</Button>
              </>
            ) : (
              <>
                <h2>Escaneie o QR Code para pagar</h2>
                <p>Depois de confirmar o pagamento, sua conta vira premium automaticamente.</p>

                <QrWrapper>
                  <img src={qrCodeUrl} alt='QR Code para pagamento' />
                </QrWrapper>
              </>
            )}
          </PaymentContainer>
        )}
      </Container>
    </PremiumPageMain>
  );
};

export default PremiumPaymentPage;
