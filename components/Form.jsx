"use client";

import Link from "next/link";

import SearchBrandInput from "./SearchBrandsInput";

const Form = ({ reviewLink, setReviewLink, submitting, handleSubmit }) => {
  const setReviewLinkFromSuggestion = (reviewSiteMainUrl, siteIcon) => {
    setReviewLink({ ...reviewLink, reviewSiteMainUrl, siteIcon });
  };

  return (
    <section className="section__create-links">
      <h1>
        <span className="blue__gradient">Create Review Links</span>
      </h1>
      <p className="desc">
        Generate clickable links for your customers to share their feedback on
        your review sites:
      </p>

      <form
        onSubmit={handleSubmit}
        className="create-links__form glassmorphism"
      >
        <label>
          <span>Site Name</span>

          <SearchBrandInput
            setReviewLinkFromSuggestion={setReviewLinkFromSuggestion}
          />
        </label>

        <label>
          <span>Your profile link</span>

          <input
            value={reviewLink.profileUrl}
            onChange={(e) =>
              setReviewLink({
                ...reviewLink,
                reviewSiteProfileUrl: e.target.value,
              })
            }
            placeholder="Paste your profile URL"
            required
            className="form__input"
          />
        </label>

        <div className="create-links__btn-container">
          <Link href="/" className="cancel__btn">
            Cancel
          </Link>

          <button type="submit" disabled={submitting} className="blue__btn">
            {submitting ? "Creating link..." : "Create"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
