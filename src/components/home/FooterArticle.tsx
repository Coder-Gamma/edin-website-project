import Man2 from "../../assets/man-2-1024x966.png";
import Office2 from "../../assets/office-2-1024x830.png";
import Office3 from "../../assets/office-3-1024x702.png";

const FooterArticle = () => {
  return (
    <div>
      <div className="my-4 p-2">
        <p className="text-2xl mx-3 py-4 border-b-2 md:text-3xl border-gray-400">
          Since 1995
        </p>
        <h2 className="text-4xl md:text-7xl my-8 md:my-20 font-thin px-3 text-gray-750">
          Professional building &<br className="hidden md:block" /> fit out contractors <br />
          covering the UK
        </h2>
      </div>
      <div className="grid md:grid-cols-[11fr_9fr] gap-30">
        <div className="px-4 text-xl text-gray-750 flex flex-col gap-6">
          <p>
            Are you looking for a fit out contractor or construction contractor
            in to make the dreams for your commercial or residential space a
            reality? Eden are London & Essex based building contractors with the
            skills, expertise and passion to create innovative interior fit outs
            that transform spaces, enhance living, improve employee productivity
            and ensure customer ease.
          </p>
          <p>
            Eden is a professional and experienced construction/building company
            in Essex, London and the surrounding areas specialising in high
            quality fit outs. Eden construction operates predominantly in and
            around London and Essex but can also travel nationally. We
            specialise in all aspects of construction & fit outs, including
            commercial fit outs, gym & leisure fit outs and office
            refurbishments. No job is too big for us, we can help with projects
            ranging from £50,000 to £5 million.
          </p>
          <h5 className="text-3xl my-4">A name you can rely on</h5>
          <p>
            {` We’re proud of our skill and expertise, and are accredited by some
            of the most reputable organisations, including ISO 9001,
            Construction line, Carbon Neutral and Safe Contractor. But it’s not
            just great construction that we have to offer: our customer service
            skills are second to none. We pride ourselves on our collaborative
            working nature, always ensuring we create a space that fulfils our
            clients visions. Don’t believe us? Take a look at our testimonials
            and case studies.`}
          </p>
          <p>
            {` As fit out contractors in London who’ve worked with some of the
            country’s biggest names from a range of sectors, we have what it
            takes to create innovative and inspiring retail, commercial,
            residential, leisure and office fit outs to time and budget
            requirements.`}
          </p>
          <h5 className="text-3xl my-4">Complete construction</h5>
          <p>
            Our clients deserve the best. Whether you require a simple Cat A or
            Cat B fit out service or a complete design and build, we offer a
            premium service that gets unparalleled results. We pay attention to
            detail throughout process, from innovation to performance to
            quality. Our accomplished construction team complete their work in
            line with this in-house criteria to ensure a high benchmark is
            maintained and so no detail is missed.
          </p>
        </div>
        <div className="hidden md:flex flex-col">
          <img src={Man2} alt="construction workers" />
          <img src={Office2} alt="Image of office" />
          <img src={Office3} alt="Image of office" />
        </div>
      </div>
    </div>
  );
};

export default FooterArticle;
