import Image from "next/image";
import { GoLinkExternal } from "react-icons/go";
import { FaTimes } from "react-icons/fa";

const LinkCard = ({ review, handleDelete, userId }) => {
  const siteName =
    review.reviewSiteMainUrl?.split(".")[0][0].toUpperCase() +
    review.reviewSiteMainUrl?.split(".")[0].slice(1);

  return (
    <div className="link-card glassmorphism">
      <Image
        src={review.siteIcon}
        alt={review.reviewSiteMainUrl}
        width={25}
        height={25}
        className="mr-4"
        priority={true}
        className="link-card__company-icon"
      />

      <p className="link-card__company-name">{siteName}</p>

      {userId === review.creator._id ? (
        <FaTimes
          className="link-card__btn delete-icon"
          onClick={() => handleDelete(review._id)}
        />
      ) : (
        <a href={review.profileUrl} target="_blank" className="link-card__btn">
          <GoLinkExternal />
        </a>
      )}
    </div>
  );
};

export default LinkCard;
