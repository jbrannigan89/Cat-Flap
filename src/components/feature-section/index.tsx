import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section id="Design" className={tw(`bg-white pb-6 mt-16`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Features</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Smart Design</p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Lightweight and Portable</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Fast-Flap can be easily moved from one door to another as needed. Give your feline friend easy access to
              the porch, patio, or outside litterbox.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Auto-Closing</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
              Fast Flap uses a 2 way magnetic catch to seal the door after entry or exit. Say goodbye to bugs sneaking
              in the house through your animal doors.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Customizable</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Fast-Flap will work in any window from 29-35 inches in width.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
