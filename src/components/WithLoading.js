import React from 'react';
import { branch, renderComponent } from 'recompose';

export const Loader = () => <div className="loader">Loading...</div>;

export default isLoading => branch(isLoading, renderComponent(Loader));
