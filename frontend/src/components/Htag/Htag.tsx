import { HtagProps } from './Htag.props';

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return (
        <h1 className="flex flex-row pt-3 pl-3 text-3xl font-bold text-gray-600">
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className="flex flex-row pt-2 pl-2 text-2xl font-medium text-gray-600">
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className="flex flex-row pt-1 pl-1 text-xl font-normal text-gray-600">
          {children}
        </h3>
      );
    default:
      return <></>;
  }
};
