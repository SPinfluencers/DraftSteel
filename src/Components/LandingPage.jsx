
import '../App.css';

// Landing Page Component

const LandingPage = () => (
  <div>
    <div className="landing-page">
    <h1>Welcome to DraftSteel Engineering Services</h1>
    <p>Your partner in success.</p>
    <div className="stats-container">
      <div className="stat-block">
        <h2>25+</h2>
        <p>Engineers</p>
      </div>
      <div className="stat-block">
        <h2>5+</h2>
        <p>Global Countries</p>
      </div>
      <div className="stat-block">
        <h2>25+</h2>
        <p>Projects Completed</p>
      </div>
    </div>
    {/* <button className="cta-button">Learn More</button> */}
    
  </div>
  <div>
  <div className="steel-detailing-section">
      <div className="steel-detailing-info">
        <h2>Steel Detailing Services</h2>
        <p>We specialize in providing high-quality steel detailing services, 
          ensuring precision and accuracy for your construction projects. 
          Our team leverages advanced tools and techniques to deliver exceptional 
          results that meet industry standards. <br /><br />
          Structural steel detailing has become quite well-liked because to the 
          rising need in the steel sector. Engineers, contractors, and fabricators 
          utilise it a lot. To produce high-quality items, it can be quite helpful 
          to have flawless and accurate detailing. This could be the initial step 
          toward a building structure of noticeably higher quality. <br /><br />
          Steel detailing is the production of detailed plans and drawings for steel 
          fabricators and erectors. These drawings help the erectors know where 
          and how to erect the fabricated steel members on the job site. 
          They also help the steel fabrication shop know the exact requirements 
          for fabricating each individual member, or piece of steel. Steel detailing 
          is a specialist area of structural drafting. <br /><br />
          We provide structural steel detailing services for practically 
          all types of buildings, including residential, commercial, industrial, 
          manufacturing, educational, and airport constructions. We have built 
          a solid name in the industry because to our skill in providing precise 
          and affordable drawing services to our clients. Steel fabricators, 
          erectors, structural engineers, and general contractors can benefit 
          from the expertise of our teams structural detailing services and
           miscellaneous steel detailing services. <br /><br />
           The detailed information on how individual elements are arranged 
           in a fixed formwork unit is shown in assembly drawings. In addition 
           to details on the sizes and labels needed for elevations with dimensions, 
           weld symbols, bolt marks, a bill of materials, and notes, our assembly
            drawings also include components and consumables. We guarantee that the 
            finished product is editable and provided in PDF, DXF, or DWG format 
            with the appropriate number of layers. With blocks for various types 
            of designs drawn in accordance with customer specifications, 
            we build distinct layers for measurements, body, lines, and text.
          </p>
      </div>
      <div className="steel-detailing-image">
        <img src="https://shorturl.at/SelZy" alt="Steel Detailing" />
      </div>
    </div>
  </div>
  <div>
  <h1><center>What we provide</center></h1>
  <div className="services-container">
      <div className="service-block">
        <h3>Structural Steel Detailing</h3>
        {/* <img src="  https://rb.gy/0cyvo9 " className="service-image" /> */}
        <p>Providing detailed and accurate structural steel plans for your projects.</p>
      </div>
      <div className="service-block">
        <h3>Engineering & Connection Design</h3>
        {/* <img src=" https://images.pexels.com/photos/3818947/pexels-photo-3818947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " className="service-image" /> */}
        <p>Expert connection designs to ensure the safety and stability of structures.</p>
      </div>
      <div className="service-block">
        <h3>Miscellaneous Detailing</h3>
        {/* <img src="  https://rb.gy/0cyvo9 " className="service-image" /> */}
        <p>Comprehensive detailing for stairs, handrails, and other miscellaneous items.</p>
      </div>
      <div className="service-block">
        <h3>Take-off Projects</h3>
        {/* <img src="  https://rb.gy/0cyvo9 " className="service-image" /> */}
        <p>Efficient and accurate material take-offs to streamline your construction projects.</p>
      </div>
    </div>
  </div>

  
  <h1><center>Work Platform</center></h1>
  
  <div className="services-container">
      <div className="service-block">
        <img src=" https://rb.gy/jq1c9z " className="Tekla Structure" />
      </div>

      <div className="service-block">
        <img src=" https://rb.gy/jn7sc9 " className="sds-2" />
      </div>
      <div className="service-block">
        <img src=" https://rb.gy/7pzl2n " className="Autocad" />
      </div>
      <div className="service-block">
        <img src="https://shorturl.at/z4hbq " className="solidwork" />
      </div>
      <div className="service-block">
        <img src=" https://shorturl.at/u4ML8 " className="Autodesk" />
      </div>
    </div>
  </div>
);

export default LandingPage