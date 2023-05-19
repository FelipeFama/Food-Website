export interface Gallery {
  _id: string;
  title: string;
  description: string;
  image: {
    alt: string;
    asset: {
      _ref: string;
    };
  };
}
