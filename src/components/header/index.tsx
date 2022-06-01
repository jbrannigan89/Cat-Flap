import { tw, css } from 'twind/css';
import Button from '@/components/button';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        Fast-Flap Cat Doors
      </h1>

      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          The easy to use portable door that gives your cat easy inside and outside access.
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <a
          className={tw(
            `font-sans font-medium py-2 px-4 border rounded bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700`,
          )}
          href="#Design"
        >
          Learn More
        </a>

        <span className={tw(`mx-2`)}>or</span>

        <a
          className={tw(
            `font-sans font-medium py-2 px-4 border rounded bg-white text-gray-600 border-gray-300 hover:bg-gray-100`,
          )}
          href="#footer"
        >
          Contact us
        </a>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>Cats like doors too!</p>
      </div>
    </div>
  </header>
);

export default Header;
