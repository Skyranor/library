import clsx from 'clsx';
import Lottie from 'lottie-react';

import loader from '../../../assets/loader.json';
import cl from './Loader.module.scss';

const Loader = () => (
  <div className={clsx(cl.loader)}>
    <Lottie animationData={loader} />
  </div>
);

export default Loader;
