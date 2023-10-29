import * as React from 'react';

interface IProps<T> {
  title?: string;
  jobs?: T[];
}

const Communities: React.FC = <T extends {}>({ title, jobs }: IProps<T>) => {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

export default Communities;
