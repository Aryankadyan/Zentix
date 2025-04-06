import { Element } from "react-scroll"

const Download = () => {
  return(
    <section>
        <Element name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16">
            <div className="container">
                <div className="flex items-center">
                    <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100">
                        <div className="mb-10">
                            <img
                            src="/images/zentix.svg"
                            width={150}
                            height={50}
                            alt="zentix"
                            />
                        </div>
                        <p className="body-1 mb-10 max-w-md">
                            Try it now for free on iOS, android, PC, Web - whatever your flavour, we've got you covered.</p>
                    </div>
                </div>
            </div>
        </Element>
    </section>
  )
}

export default Download
