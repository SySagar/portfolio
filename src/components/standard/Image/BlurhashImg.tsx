import * as React from 'react';
import { useEffect, useState } from 'react';
import { Blurhash } from 'react-blurhash';
import { motion } from 'framer-motion';
import { encodeImageToBlurhash } from './encoder';

export type BlurhashImgProps = {
  src: string;
  blurhashSize?: Size;
};

export type Size = `${number}x${number}`

const reduceImgUrlDimensions = (input: string, size: Size = '19x19') => {
  const regex = /\d+x\d+/;
  const match = input.match(regex);

  if (match) {
    const replacement = size
    return input.replace(regex, replacement);
  } else {
    console.info('Dimensions pattern not found so returning input as is');
    return input;
  }
};

export default function BlurhashImg({ src, blurhashSize }: BlurhashImgProps) {
  const [hashUrl, setHashUrl] = useState('');
  const [imgIsLoading, setImgIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const hash = await encodeImageToBlurhash(reduceImgUrlDimensions(src, blurhashSize));
      console.log('hash', hash);
      setHashUrl(hash);
    })();
  }, []);

  const onLoaded = () => setImgIsLoading(false);

  return (
    <>
      {hashUrl && <Blurhash hash={hashUrl} width="100%" height="100%" />}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: imgIsLoading ? 0 : 1 }}
        transition={{ opacity: { delay: 0.5, duration: 0.4 } }}
        onLoad={onLoaded}
        className="image"
        src={src}
        loading="lazy"
        width="100%"
        height="100%"
      />
    </>
  );
}
