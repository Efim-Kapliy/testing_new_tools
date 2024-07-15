import { ReactElement } from 'react';

function ErrorBoundary(): ReactElement {
  return (
    <div>
      <h1>Error 404</h1>
      <div>Данной страницы не существует</div>
    </div>
  );
}

export default ErrorBoundary;
