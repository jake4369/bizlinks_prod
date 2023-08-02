import { Schema, model, models } from "mongoose";

const ReviewLinkSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  reviewSiteMainUrl: {
    type: String,
    required: [true, "Site must have a url"],
    unique: [true, "Only one link per site"],
  },
  reviewSiteProfileUrl: {
    type: String,
    required: [true, "Profile must have a url"],
    unique: [true, "Only one link per site"],
  },
  siteIcon: {
    type: String,
  },
});

const ReviewLink = models.ReviewLink || model("ReviewLink", ReviewLinkSchema);

export default ReviewLink;
