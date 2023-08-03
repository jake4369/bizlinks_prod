import Image from "next/image";

const GetStarted = () => {
  return (
    <div className="get-started-page">
      <section className="get-started__hero-section">
        <h1>
          Get started with <span className="blue__gradient">BizLink</span>
        </h1>

        <p>
          If you're new to Bizlinks and already have a{" "}
          <span className="blue__gradient">Google Account</span>, simply
          clicking the <span className="blue__gradient">'Sign In'</span> button
          and signing in with Google will instantly create an account for you,
          eliminating the need to fill in any registration forms.
        </p>

        <p>
          We've implemented Google authentication, which{" "}
          <span className="blue__gradient">requires a Google account</span> for
          signing in. Rest assured, we've chosen this method because having a
          Google account for your business unlocks{" "}
          <span className="blue__gradient">numerous benefits</span> that we
          wouldn't want you to miss out on!
        </p>

        <a
          href="https://business.google.com/create?skipLandingPage&service=ome&original_intent=GMB&omesrcexp=48778922&omec=EKqdoRcyAgECQAFKEwin6cz85LSAAxU0CNQBHUGLCVQ%3D"
          className="blue__btn google__btn"
          target="_blank"
        >
          Create account{" "}
          <Image
            src="/assets/getstarted/google-logo.png"
            alt="Google logo"
            width={35}
            height={35}
          />
        </a>

        <p>Here are some of the most important ones:</p>
      </section>

      <section className="main-benefits-section">
        <ul>
          <li>
            <h2 className="blue__gradient">Get found more easily online.</h2> A
            Google Business account boosts your business visibility in search
            results, Maps, and other Google platforms. Reach more potential
            customers searching for products or services like yours.
          </li>

          <li>
            <h2 className="blue__gradient">Manage your online presence.</h2> You
            control your business info online, including name, address, phone,
            website, hours, and more. Add photos, videos, and respond to
            reviews.
          </li>

          <li>
            <h2 className="blue__gradient">Get more reviews.</h2> Customer
            reviews build trust and credibility. With a Google Business account
            you can gather reviews to attract new customers and enhance online
            visibility.
          </li>

          <li>
            <h2 className="blue__gradient">Connect with customers.</h2> Receive
            messages from potential customers via Google. Answer questions,
            resolve issues, and build strong customer relationships.
          </li>

          <li>
            <h2 className="blue__gradient">Get insights into your business.</h2>{" "}
            Get valuable insights with Google Business analytics. Understand how
            people find and interact with your business, improving your
            marketing and sales strategies.
          </li>
        </ul>
      </section>

      <section className="info-section">
        <Image
          src="/assets/getstarted/google-business.png"
          alt="Google business"
          width={500}
          height={500}
          className="info-section__img"
        />

        <div className="info-section__text">
          <p>
            Overall, a Google Business account is a valuable tool for any
            business that wants to improve its online presence and connect with
            customers. It's free to create and maintain, so there's no reason
            not to sign up!
          </p>

          <a
            href="https://business.google.com/create?skipLandingPage&service=ome&original_intent=GMB&omesrcexp=48778922&omec=EKqdoRcyAgECQAFKEwin6cz85LSAAxU0CNQBHUGLCVQ%3D"
            className="blue__btn google__btn"
            target="_blank"
          >
            Create account{" "}
            <Image
              src="/assets/getstarted/google-logo.png"
              alt="Google logo"
              width={35}
              height={35}
            />
          </a>

          <p>
            Still need convincing? Here are some additional benefits of having a
            Google Business account:
          </p>
        </div>
      </section>

      <section className="secondary-benefits-section">
        <ul>
          <li>
            <h2>Improve your local SEO.</h2> A Google Business account can help
            improve your local SEO, which means that your business will be more
            likely to show up in search results for people who are searching for
            businesses like yours in your area.
          </li>

          <li>
            <h2>Reach more customers.</h2> Your Google Business listing can be
            seen by people all over the world, so it's a great way to reach new
            customers who may not be aware of your business.
          </li>

          <li>
            <h2>Increase sales.</h2> A well-optimized Google Business listing
            can lead to more website traffic, phone calls, and in-store visits,
            which can all lead to increased sales.
          </li>
        </ul>
      </section>

      <section className="summary-section">
        <div className="summary-section__logo flex items-center justify-center mb-10">
          <Image
            src="/assets/logo.png"
            alt="BizLinks logo"
            width={100}
            height={100}
            className="logo-img"
          />

          <span className="logo__text blue__gradient">BizLinks</span>
        </div>

        <p>
          If you're not already using a{" "}
          <span className="blue__gradient">Google Business account</span>, we
          highly recommend signing up. It's a{" "}
          <span className="blue__gradient">free and easy</span> way to improve
          your online presence and connect with customers.
        </p>

        <a
          href="https://business.google.com/create?skipLandingPage&service=ome&original_intent=GMB&omesrcexp=48778922&omec=EKqdoRcyAgECQAFKEwin6cz85LSAAxU0CNQBHUGLCVQ%3D"
          className="blue__btn google__btn"
          target="_blank"
        >
          Create account{" "}
          <Image
            src="/assets/getstarted/google-logo.png"
            alt="Google logo"
            width={35}
            height={35}
          />
        </a>
      </section>
    </div>
  );
};

export default GetStarted;
