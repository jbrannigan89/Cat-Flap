import { tw } from 'twind';

const listItems = [
  {
    title: `Window Width Requirement`,
    description: `In order to work properly the window opening that Fast-Flap is used on must have a width of 29-35 inches.  Please measure before ordering. `,
  },
  {
    title: `Weight recommendation`,
    description: `The width of the actual flap is 6in. Therefore we recommend it is best to use the product for cats that are 16 pounds or under.`,
  },
  {
    title: `Temporary Fixture`,
    description: `We do not recommend Fast-Flap to be permanently installed, but instead suggest it as a temporary fixture.  It is very easy to install and remove quickly`,
  },
];
const pic = <img src="attachedpicsforfastflapsite/fastflap.jpg" />;

const ListSection = () => (
  <section id="Specifications" className={tw(`lg:py-28  overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Read before ordering</h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Specifications</p>
      </div>
      <div id="spec" className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
            {listItems.map((item, index) => (
              <li className={tw(`flex -mx-4`)} key={item.title}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`lg:mb-12 lg:mb-0 pb-1cd2 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)} />
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
