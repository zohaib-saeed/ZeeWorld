import React, { Fragment } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";

import Container from "@/components/Shared/Container/Container";
import CategoryCard from "@/components/Shared/CategoryCard/CategoryCard";

const Experience = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start expreince-section-bg">
      <Container styles="pt-8 md:pt-10 pb-24 md:pb-28">
        <div className="w-full max-w-[95%] xs:max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] sxl:max-w-[40%] flex flex-col items-center justify-start gap-[2px] xs:gap-[4px]">
          <h3 className="font-semibold text-base md:text-[18px] text-azure ">
            Beleven
          </h3>
          <h2 className="font-bold text-[28px] md:text-4xl text-black-dune capitalize">
            Een selectie
          </h2>
          <p className="text-[15px] md:text-base text-grey-storm text-center">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-start mt-4 md:mt-6 mdl:mt-8 sxl:mt-12">
          <Tab.Group>
            <Tab.List className="w-full flex items-center justify-center flex-wrap gap-5 mdl:gap-8">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <div
                    className={`text-base font-semibold ${
                      selected
                        ? "text-white bg-azure rounded-full px-8 py-[8px]"
                        : "text-grey-storm"
                    }   transition-all  outline-none cursor-pointer`}
                  >
                    Alles
                  </div>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <div
                    className={`text-base font-semibold ${
                      selected
                        ? "text-white bg-azure rounded-full px-8 py-[8px]"
                        : "text-grey-storm"
                    }   transition-all  outline-none cursor-pointer`}
                  >
                    Iets anders
                  </div>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <div
                    className={`text-base font-semibold ${
                      selected
                        ? "text-white bg-azure rounded-full px-8 py-[8px]"
                        : "text-grey-storm"
                    }   transition-all  outline-none cursor-pointer`}
                  >
                    Iets anders
                  </div>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <div
                    className={`text-base font-semibold ${
                      selected
                        ? "text-white bg-azure rounded-full px-8 py-[8px]"
                        : "text-grey-storm"
                    }   transition-all  outline-none cursor-pointer`}
                  >
                    Iets anders
                  </div>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <div
                    className={`text-base font-semibold ${
                      selected
                        ? "text-white bg-azure rounded-full px-8 py-[8px]"
                        : "text-grey-storm"
                    }   transition-all  outline-none cursor-pointer`}
                  >
                    Iets anders
                  </div>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels className="w-full mt-6 md:mt-9 mdl:mt-12 sxl:mt-16">
              {/* Panel 1 */}
              <Tab.Panel className="w-full flex flex-col items-start justify-start">
                <div className="w-full flex flex-col items-center justify-start xs:grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xs:gap-x-2 sm:gap-x-3 mdl:gap-x-4 lg:gap-x-5  xs:gap-y-20 sm:gap-y-20 mdl:gap-y-24 gap-20 ">
                  {[0, 1, 2, 3, 4, 5].map((item, index) => (
                    <CategoryCard key={index} />
                  ))}
                </div>
              </Tab.Panel>
              {/* Panel 2 */}
              <Tab.Panel className="w-full flex flex-col items-start justify-start">
                <div className="w-full flex flex-col items-center justify-start xs:grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xs:gap-x-2 sm:gap-x-3 mdl:gap-x-4 lg:gap-x-5  xs:gap-y-20 sm:gap-y-20 mdl:gap-y-24 gap-20 ">
                  {[0, 1, 2, 3, 4, 5].map((item, index) => (
                    <CategoryCard key={index} />
                  ))}
                </div>
              </Tab.Panel>
              {/* Panel 3 */}
              <Tab.Panel className="w-full flex flex-col items-start justify-start">
                <div className="w-full flex flex-col items-center justify-start xs:grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xs:gap-x-2 sm:gap-x-3 mdl:gap-x-4 lg:gap-x-5 xs:gap-y-20 sm:gap-y-20 mdl:gap-y-24 gap-20 ">
                  {[0, 1, 2, 3, 4, 5].map((item, index) => (
                    <CategoryCard key={index} />
                  ))}
                </div>
              </Tab.Panel>
              {/* Panel 4 */}
              <Tab.Panel className="w-full flex flex-col items-start justify-start">
                <div className="w-full flex flex-col items-center justify-start xs:grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xs:gap-x-2 sm:gap-x-3 mdl:gap-x-4 lg:gap-x-5  xs:gap-y-20 sm:gap-y-20 mdl:gap-y-24 gap-20 ">
                  {[0, 1, 2, 3, 4, 5].map((item, index) => (
                    <CategoryCard key={index} />
                  ))}
                </div>
              </Tab.Panel>
              {/* Panel 5 */}
              <Tab.Panel className="w-full flex flex-col items-start justify-start">
                <div className="w-full flex flex-col items-center justify-start xs:grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xs:gap-x-2 sm:gap-x-3 mdl:gap-x-4 lg:gap-x-5 xs:gap-y-20 sm:gap-y-20 mdl:gap-y-24 gap-20 ">
                  {[0, 1, 2, 3, 4, 5].map((item, index) => (
                    <CategoryCard key={index} />
                  ))}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
