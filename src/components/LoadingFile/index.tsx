
import {Container} from './styles'

import Lottie from 'react-lottie';
import animationData from '../../assets/loadingLottie.json';

export function LoadingFile() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <Container>
        <Lottie 
          options={defaultOptions}
          height={400}
          width={400}
        />
      </Container>
    );
  }