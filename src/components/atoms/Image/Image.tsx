import React, { ElementType, forwardRef } from 'react';
import {
  GatsbyImage,
  GatsbyImageProps,
  getImage,
  ImageDataLike,
} from 'gatsby-plugin-image';
import { Image as ChakraImage, ImageProps } from '@chakra-ui/react';

export interface Props
  extends Omit<GatsbyImageProps, `image` | `onLoad`>,
    Omit<
      ImageProps,
      | `alt`
      | `backgroundColor`
      | `color`
      | `objectFit`
      | `objectPosition`
      | `onError`
      | `onLoad`
    > {
  image: ImageDataLike;
}

export const Image = forwardRef<HTMLImageElement, Props>(
  (props, ref): JSX.Element => {
    const { borderRadius, image, ...rest } = props;
    const imageData = getImage(image);

    if (!imageData) {
      return <></>;
    }

    return (
      <ChakraImage
        ref={ref}
        as={
          ((props) => (
            <GatsbyImage image={imageData} {...props} />
          )) as ElementType
        }
        imgStyle={{
          borderRadius,
        }}
        {...rest}
      />
    );
  }
);
