import {
  BannerSlice,
  ContentBlockSlice,
  FAQsSlice,
  FeatureSlice,
  FullHeroSlice,
  ImageBlockSlice,
  IntroSlice,
  ShowroomSlice,
  SpacerSlice,
  TwoColContentSlice,
  VideoBlockSlice,
  GallerySlice,
} from "@components/slices"
import FeatureSliderSlice from "@components/slices/FeatureSliderSlice"
import { SliceZone } from "@prismicio/react"
import * as React from "react"

const components = {
  full_hero: FullHeroSlice,
  spacer: SpacerSlice,
  introduction_content: IntroSlice,
  showroom: ShowroomSlice,
  feature: FeatureSlice,
  feature_slider: FeatureSliderSlice,
  banner: BannerSlice,
  content_block: ContentBlockSlice,
  two_column_content: TwoColContentSlice,
  image_block: ImageBlockSlice,
  faqs: FAQsSlice,
  video_block: VideoBlockSlice,
  gallery: GallerySlice,
}

export const PageTemplate = props => {
  const document = props.data.page

  console.log({ document })
  return (
    <>
      <SliceZone slices={document.data.body} components={components} />
    </>
  )
}
