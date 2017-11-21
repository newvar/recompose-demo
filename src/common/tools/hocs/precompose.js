import {
  compose,
} from 'recompose';

export const precompose = (
  ...upperHocs
) => (
  ...lowerHocs
) => compose(
  ...upperHocs,
  ...lowerHocs,
);

export default precompose;
