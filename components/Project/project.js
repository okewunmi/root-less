import Image from "next/image";
import Link from "next/link";
import { Wrappers, Content } from "./styles.js";
import photo1 from "../../public/ptvs.jpeg";
import photo2 from "../../public/zoomRida.png";
import photo3 from "../../public/e-clean.png";
import photo4 from "../../public/external.png";
import photo5 from "../../public/ken.png";

const index = () => {
  return (
    <Wrappers>
      <div className="project">
        <h1 className="project__head">Selected Work</h1>
      </div>
      <Content>
        <div className="box">
          <Image
            className="grid__img"
            src={photo1}
            width={450}
            height={420}
            alt="image"
          />
          <div className="box__text">
            <h3 className="box__text--big">PTVS</h3>
            <p className="box__text--small">
              UI/UX design, Research, News Authenticity App
            </p>
            <p className="box__text--small-2">
              Designed to help determine the authenticity of news with the use
              of images.
            </p>
          </div>
          <div className="box__btn">
            <Link
              target="_blank"
              href="https://www.figma.com/proto/18IgzqBnoySPLsJHVBj1Ta/Photo-Truth-verification-system?page-id=21%3A3&node-id=509-3125&node-type=frame&viewport=1798%2C1222%2C0.52&t=WTKmZoihBvhfLxJF-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=121%3A3195"
              className="btn"
            >
              View Prototype video
            </Link>
          </div>
        </div>
        <div className="box">
          <Image
            className="grid__img"
            src={photo2}
            width={450}
            height={440}
            alt="image"
          />
          <div className="box__text">
            <h3 className="box__text--big">Zoom RIda</h3>
            <p className="box__text--small">UI design, Ride App</p>
            <p className="box__text--small-2">
              Design of screens of a ride App with new features that makes it
              stand out.
            </p>
          </div>
          <div className="box__btn">
            <Link
              target="_blank"
              href="https://www.figma.com/proto/8yLsTfpUjRvLmJHfo3CRK0/Ride-App?type=design&node-id=166-3357&t=cNuypVrJynvNFZSm-1&scaling=scale-down&page-id=9%3A642&starting-point-node-id=182%3A2321&show-proto-sidebar=1&mode=design"
              className="btn"
            >
              View Prototype video
            </Link>
          </div>
        </div>
        {/* zoom off image is required */}
        <div className="box">
          <Image
            className="grid__img"
            src={photo5}
            width={440}
            height={390}
            alt="image"
          />
          <div className="box__text">
            <h3 className="box__text--big">Kenpact Designs</h3>
            <p className="box__text--small">Ui Design, Apple store Design</p>
            <p className="box__text--small-2">
              This design shows the design of a website which is for a design
              agency.
            </p>
          </div>
          <div className="box__btn">
            <Link
              target="_blank"
              href="https://www.figma.com/design/8E7Tth77EuqTW9Tl5xT9mw/Kenpact-Designs?node-idc0-1&t=lgiL815mVQVzSqBt-1"
              className="btn"
            >
              View Prototype video
            </Link>
          </div>
        </div>

        <div className="box">
          <Image
            className="grid__img"
            src={photo3}
            width={450}
            height={420}
            alt="image"
          />
          <div className="box__text">
            <h3 className="box__text--big">E-clean Laundry App</h3>
            <p className="box__text--small">
              UI/UX design, Usability Study, UX Research
            </p>
            <p className="box__text--small-2">
              Design of few screens to purchase flowers
            </p>
          </div>
          <div className="box__btn">
            <Link
              target="_blank"
              href="https://www.figma.com/proto/hyADwBEMbwzVu7B573AsNx/Laundry-Service-Alfa-Aaqib?page-id=0%3A1&node-id=2-158&node-type=canvas&viewport=2640%2C1050%2C0.54&t=eUjbjUBeTUCKmeH8-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=31%3A636&show-proto-sidebar=1"
              className="btn"
            >
              View Prototype video
            </Link>
          </div>
        </div>

        <div className="box">
          <Image
            className="grid__img"
            src={photo4}
            width={450}
            height={420}
            alt="images"
          />
          <div className="box__text">
            <h3 className="box__text--big">Extante Rental Homes</h3>
            <p className="box__text--small">Branding, UX Design, Web Design</p>
            <p className="box__text--small-2">
              Responsive website, branded apparel and products, and an eCommerce
              CMS for a professional band.
            </p>
          </div>
          <div className="box__btn">
            <Link
              target="_blank"
              href="https://www.figma.com/proto/338Y1KWDH1DILIws78oXg5/Extante-Rental-homes?page-id=&node-id=67-863&node-type=canvas&viewport=-759%2C-127%2C0.1&t=Q7nBSZar8tUhTymE-1&scaling=contain&content-scaling=fixed&starting-point-node-id=67%3A863"
              className="btn"
            >
              View Prototype video
            </Link>
          </div>
        </div>
      </Content>
      <div className="link">
        <p>
          Check out the rest of{" "}
          <span>
            {" "}
            <a href=""> my work </a>
          </span>{" "}
          !{" "}
        </p>
      </div>
    </Wrappers>
  );
};

export default index;
