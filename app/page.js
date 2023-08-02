import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <section className="hero__text">
        <h1>
          Enhance Your Online Presence with{" "}
          <span className="blue__gradient">Bizlinks</span>
        </h1>

        <p>
          Discover the Power of BizLinks: The Easy Way to Store, Organize, and
          Share Business Profiles and Review Site Links Effortlessly!
        </p>

        <Link href="/get-started" className="blue__btn">
          Get Started
        </Link>
      </section>

      <section className="intro-section">
        <Image
          src="/assets/homepage/reviews.svg"
          alt="Customer pressing rating button"
          width={100}
          height={100}
          className="intro-section__img"
        />

        <div className="intro-section__text">
          <h2>
            <span className="blue_gradient">Increase</span> reviews
          </h2>

          <p className="text-white px-6">
            Maximize Your Reviews, Elevate Your Business: Unleash the potential
            of positive feedback, boost credibility, and surpass the competition
            with our innovative solution.
          </p>
        </div>
      </section>

      <section className="about-section">
        <h2 className="text-3xl font-extrabold leading-[1.15] sm:text-6xl mb-20">
          Unlock Success, Trust, and Growth!
        </h2>

        <div className="about-section__list-item">
          <h3>
            <span>01</span> Increase Trust and Credibilty
          </h3>

          <p>
            Real customer reviews build trust and credibility, inspiring
            confidence in potential buyers, leading to increased brand trust and
            sales.
          </p>
        </div>

        <div className="about-section__list-item">
          <h3>
            <span>02</span> Improved Decision Making
          </h3>

          <p>
            Reviews enable potential customers to make informed decisions by
            learning from others' experiences, aligning products or services
            with their needs.
          </p>
        </div>

        <div className="about-section__list-item">
          <h3>
            <span>03</span> Higher Conversion Rates
          </h3>

          <p>
            Positive reviews showcase satisfied customers, creating a compelling
            incentive for potential buyers to transition into actual customers.
          </p>
        </div>

        <div className="about-section__list-item">
          <h3>
            <span>04</span> SEO and Search Rankings
          </h3>

          <p>
            Fresh and relevant user-generated content, such as reviews, plays a
            vital role in optimizing search engine rankings, leading to
            increased website visibility and traffic.
          </p>
        </div>
      </section>

      <section className="how-to-section__form">
        <Image
          src="/assets/homepage/tech.svg"
          alt="Tech image"
          width={200}
          height={200}
        />

        <div className="how-to-section__text">
          <h2>
            Share your review pages with{" "}
            <span className="blue__gradient">ease</span>
          </h2>

          <p>
            Effortlessly create a clickable link to your review site profiles by
            simply pasting the web address.
          </p>

          <p>
            Search from thousands of companies to find the name of the site,
            utilising the power of{" "}
            <a
              href="https://brandfetch.com/"
              className="font-bold blue__gradient"
            >
              Brandfetch
            </a>
            .
          </p>

          <p>
            Share this link instantly with your valued customers and clients.
          </p>
        </div>

        <Image
          src="/assets/homepage/form.png"
          alt="BizLinks link creation form"
          width={400}
          height={100}
          className="form-img"
        />
      </section>

      <section className="how-to-section__qr">
        <h2>
          Generate a <span className="blue__gradient">QR Code</span> or share
          your profile across{" "}
          <span className="blue__gradient">multiple platforms</span>
        </h2>

        <p>We make it simple to share your profile.</p>

        <p>
          Generate a unique QR Code your customers can scan from their mobile
          device.
        </p>

        <Image
          src="/assets/homepage/qrcode.png"
          alt="QR code for BizLinks profile page"
          width={200}
          height={200}
        />

        <p>
          Share your link via Whatsapp, text message, email, social media,
          direct messaging or any other application you may have on your device.
        </p>

        <Image
          src="/assets/homepage/share-profile.png"
          alt="Sharing your profile"
          width={200}
          height={200}
        />

        <Link href="/get-started" className="blue__btn">
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default Home;
