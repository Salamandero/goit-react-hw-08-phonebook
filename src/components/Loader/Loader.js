import { RingLoader } from 'react-spinners';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <>
      <div className={css.loaderPosition}>
        <RingLoader color="#06c5ff" size={50} />
      </div>
    </>
  );
};
