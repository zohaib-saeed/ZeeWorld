import React, { Fragment } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";

import Container from "@/components/Shared/Container/Container";

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
                <div className="w-full flex flex-col items-center justify-start xs:grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xs:gap-x-2 sm:gap-x-3 mdl:gap-x-4 lg:gap-x-5 sxl:gap-x-8 xs:gap-y-20 sm:gap-y-20 mdl:gap-y-24 gap-20 ">
                  {[0, 1, 2, 3, 4, 5].map((item, index) => (
                    <div
                      key={index}
                      className="w-full max-w-[83%] xs:max-w-none flex flex-col items-center justify-start relative"
                    >
                      <div className="w-full h-[240px] xs:h-[190px] vsm:h-[210px] sm:h-[250px] md:h-[200px] mdl:h-[240px] lg:h-[270px] sxl:h-[300px] rounded-3xl overflow-hidden flex items-center justify-center relative">
                        <Image
                          src="/images/category-sample.jpg"
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="w-[85%] p-3 xs:p-4 mdl:p-5 lg:p-6 rounded-2xl flex flex-col items-center justify-center gap-[2px] bg-white absolute bottom-[-60px] shadow-category-card">
                        <div className="text-sm font-semibold text-azure">
                          Category
                        </div>
                        <h3 className="font-bold text-xl text-black-ebony mb-[3px]">
                          Lorem Ipsum
                        </h3>
                        <button
                          className={`transition-all flex items-center justify-center rounded-full px-9 mdl:px-11 py-[8px] mdl:py-[10px] text-sm font-medium border-2 border-solid border-grey-storm text-grey-storm cursor-pointer hover:bg-conifer hover:border-conifer hover:text-white`}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
              {/* Panel 2 */}
              <Tab.Panel className="w-full flex flex-col items-start justify-start mt-12 sm:mt-16">
                <div className="">Panel 2</div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
